import style from "./CartCard.module.css"
import {useEffect, useState} from "react";
import {db} from "../../config/firebase"
import {doc, updateDoc} from "firebase/firestore"
import {Link} from "react-router-dom";

const CartCard = ({cart, id, image, name, price, bid, highestBid}) => {
    const [winning, setWinning] = useState(true)
    const [source, setSource] = useState(image)
    const currency = "VND"
    const currentUser = "0UHcspYV2NOUc5yZTFkslMuYRD23"
    const productLink = bid === "bid now" ? "/cards/bid/" + id : "/cards/buy-now/" + id
    const removeItemFromCart = async () => {
        const userRef = doc(db, "users", currentUser)
        const newCart = cart
        delete newCart[id];
        await updateDoc(userRef, {
            cart: newCart
        })
        window.location.reload()
    }
    useEffect(() => {
        if (highestBid > price) {
            setWinning(false)
        }
    }, [price, highestBid])

    return (
        <div className={style.cardWrapper}>
            <Link className={style.cardImgWrapper} to={productLink}>
                <img src={image ? image : "../media/icons/logo.png"} className={style.cardImg} alt={"product"} onError={() => {
                    setSource(("/public/media/images/product-card-placeholder.png"))
                }}/>
            </Link>
            <div className={style.cardContentContainer}>
                <div className={style.cardContent}>
                    <Link className={style.cardNameWrapper} to={productLink}>
                        <h5 className={style.cardName}>{name}</h5>
                    </Link>
                    <div className={style.cardPriceWrapper}>
                        <p className={style.cardPrice}>{price + " " + currency}</p>
                    </div>
                    {bid === "bid now" ?
                        <div className={style.cardStatusWrapper}>
                            <p className={winning ? style.winningCard : style.overBiddenCard}>
                                {winning ? "WINNING" : "HIGHEST BID: " + highestBid + " " + currency}
                            </p>
                        </div>
                    : null}
                </div>
                <div className={style.removeBtnWrapper}>
                    <button className={style.removeBtn} onClick={async () => {
                        await removeItemFromCart()
                    }}>REMOVE</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard