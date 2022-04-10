import style from "./CartCard.module.css"
import {useEffect, useState} from "react";

const CartCard = ({image, name, price, bid, highestBid}) => {
    const [winning, setWinning] = useState(true)
    const currency = "VND"
    useEffect(() => {
        if (highestBid > price) {
            setWinning(false)
        }
    }, [price, highestBid])

    return (
        <div className={style.cardWrapper}>
            <div className={style.cardImgWrapper}>
                <img src={image ? image : "../media/icons/logo.png"} className={style.cardImg} alt={"product"}/>
            </div>
            <div className={style.cardContentContainer}>
                <div className={style.cardContent}>
                    <div className={style.cardNameWrapper}>
                        <h5 className={style.cardName}>{name}</h5>
                    </div>
                    <div className={style.cardPriceWrapper}>
                        <p className={style.cardPrice}>{price + " " + currency}</p>
                    </div>
                    {bid ?
                        <div className={style.cardStatusWrapper}>
                            <p className={winning ? style.winningCard : style.overBiddenCard}>
                                {winning ? "WINNING" : "HiGHEST BID: " + highestBid + " " + currency}
                            </p>
                        </div>
                    : null}
                </div>
                <div className={style.removeBtnWrapper}>
                    <button className={style.removeBtn}>REMOVE</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard