import Layout from "../../components/Layout";
import style from "./CartPage.module.css";
import CartCard from "../../components/cart/CartCard";
let temp = []
for (let i = 0; i < 3; i ++) {
    temp.push("")
}


const CartPage = () => {
    return (
        <Layout header footer>
            <div className={style.container}>
                <h1>Cart</h1>
                <div className={style.contentContainer}>
                    <div className={style.cartListing}>
                        {
                            temp.map(() => {
                                return (
                                    <CartCard
                                        image={"../media/icons/logo.png"}
                                        name={"product"}
                                        price={"100"}
                                        type={"bid"}
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
                        </div>
                        <div className={style.summaryRow}>
                            <div className={style.summaryField}>
                                <div className={style.summaryFieldHeading}>Coupon</div>
                                <div className={style.summaryFieldValueAsInput}>
                                    <input type={"text"} />
                                    <button>APPLY</button>
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