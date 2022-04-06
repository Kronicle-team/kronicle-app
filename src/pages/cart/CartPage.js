import Layout from "../../components/Layout";
import style from "./CartPage.module.css";
import CartCard from "../../components/cart/CartCard";
import {useEffect, useState} from "react";
const bid = [
    {
        "id": 0,
        "name": "No. 0",
        "img": "",
        "price": 45000,
        "bid": true,
        "highestBid": 55000
    },
    {
        "id": 1,
        "name": "No. 1",
        "img": "",
        "price": 14000,
        "bid": true,
        "highestBid": 14000
    },
]

const buy = [
    {
        "id": 2,
        "name": "No. 2",
        "img": "",
        "price": 2000,
        "bid": false,
        "highestBid": null,
    },
    {
        "id": 3,
        "name": "No. 3",
        "img": "",
        "price": 24000,
        "bid": false,
        "highestBid": null,
    },
    {
        "id": 4,
        "name": "No. 4",
        "img": "",
        "price": 60000,
        "bid": false,
        "highestBid": null,
    },
]
const CartPage = () => {
    const [bidBtn, setBidBtn] = useState(true)
    const [temp, setTemp] = useState(bid)

    useEffect(() => {
        if (bidBtn === true) {
            setTemp(bid)
        } else {setTemp(buy)}
    })

    return (
        <Layout header footer>
            <div className={style.container}>
                <h1>Cart</h1>
                <div className={style.bidOrBuyNowContainer}>
                    <div>
                        <button className={!bidBtn ? style.changeModeBtn : style.changeModeBtnSelected} disabled={bidBtn} onClick={() => {setBidBtn(true)}}>bidBtn</button>
                    </div>
                    <div>
                        <button className={bidBtn ? style.changeModeBtn : style.changeModeBtnSelected}  disabled={!bidBtn} onClick={() => {setBidBtn(false)}}>Buy Now</button>
                    </div>
                </div>
                <div className={style.contentContainer}>
                    <div className={style.cartListing}>
                        {
                            temp.map((card) => {
                                return (
                                    <CartCard
                                        image={card.img}
                                        name={card.name}
                                        price={card.price}
                                        bid={card.bid}
                                        highestBid={card.highestBid}
                                    />
                                )
                            })
                        }

                    </div>
                    <div className={style.cartSummary}>
                        <div className={style.summaryTitle}>
                            <h3>SUMMARY</h3>
                        </div>
                        <div className={style.summaryRow}>
                            <div className={style.summaryField}>
                                <div className={style.summaryFieldHeading}>Subtotal</div>
                                <div className={style.summaryFieldValue}></div>
                            </div>
                            <div className={style.summaryField}>
                                <div className={style.summaryFieldHeading}>Shipping charges</div>
                                <div className={style.summaryFieldValue}></div>
                            </div>
                            {bidBtn ?
                                <div className={style.summaryField}>
                                    <div className={style.summaryFieldHeading}>Deposit</div>
                                    <div className={style.summaryFieldValue}></div>
                                </div>
                            : null}
                            {bidBtn ?
                                <div className={style.summaryField}>
                                    <div className={style.summaryFieldHeading}>Service Fee</div>
                                    <div className={style.summaryFieldValue}>5000</div>
                                </div>
                                : null}
                        </div>
                        <div className={style.summaryRow}>
                            <div className={style.summaryField}>
                                <div className={style.summaryFieldHeading}>Coupon</div>
                                <div className={style.summaryFieldValueAsInput}>
                                    <input className={style.summaryFieldCouponInput} type={"text"} />
                                    <button className={style.summaryFieldCouponBtn}>Apply</button>
                                </div>
                            </div>
                        </div>
                        <div className={style.summaryTotal}>
                            <h3 className={style.summaryTotalHeading}>TOTAL</h3>
                            <h3 className={style.summaryTotalValue}></h3>
                        </div>
                        <div className={style.cartBtnWrapper}>
                            <button className={style.cartBtn + " " + style.btnContinueShopping}>CONTINUE SHOPPING</button>
                            <button  className={style.cartBtn + " " + style.btnPlaceOrder}>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage