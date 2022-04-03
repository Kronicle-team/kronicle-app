import style from "./CartCard.module.css"

const CartCard = ({image, name, price, type}) => {
    return (
        <div className={style.cardWrapper}>
            <div className={style.cardImgWrapper}>
                <img src={(image)} className={style.cardImg} alt={"product"}/>
            </div>
            <div className={style.cardContentContainer}>
                <div className={style.cardContent}>
                    <div className={style.cardNameWrapper}>
                        <h5 className={style.cardName}>{name}</h5>
                    </div>
                    <div className={style.cardPriceWrapper}>
                        <p className={style.cardPrice}>{price}</p>
                    </div>
                </div>
                <div className={style.removeBtnWrapper}>
                    <button className={style.removeBtn}>REMOVE</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard