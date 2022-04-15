import Layout from "../../components/Layout";
import style from "../support/FaqSection.module.css";
import {Link} from "react-router-dom";

const FaqPage = () => {
    const orders = [
        {
            id: 1,
            question: "Wrong Item Received",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper nibh."
        },
        {
            id: 2,
            question: "Card Guides",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper nibh."
        },
        {
            id: 3,
            question: "Prices On The Site Have Changed",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper nibh."
        },
        {
            id: 4,
            question: "Why Was Order Cancelled?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper nibh."
        }
    ]
    const delivery = [
        {
            id: 1,
            question: "Track Your Order",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper nibh."
        },
        {
            id: 2,
            question: "My Order Hasn't Been Delivered Yet?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper nibh."
        },
        {
            id: 3,
            question: "International Delivery Information",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper nibh."
        },
        {
            id: 4,
            question: "Lost Parcel",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper nibh."
        }
    ]
    const qna = [
        {
            id: 1,
            question: "Tracking Your Order",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 2,
            question: "International Delivery Information",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]

    return (
        <Layout header footer>
            <h1 className={style["title"]}>FAQ</h1>
            <hr className={style["hl"]}/>
            <div className={style["questions-container"]}>
                <div className={style["questions-section"]}>
                    <h3 className={style["category"]}>ORDERS</h3>
                    {orders.map(element => (
                        <div key={element.id}>
                            <details>
                                <summary>{element.question}</summary>
                                <p>{element.answer}</p>
                            </details>
                        </div>
                    ))}
                </div>
                <div className={style["questions-section"]}>
                    <h3 className={style["category"]}>DELIVERY</h3>
                    {delivery.map(element => (
                        <div key={element.id}>
                            <details>
                                <summary>{element.question}</summary>
                                <p>{element.answer}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style["common-section"]}>
                <h2 className={style["subtitle"]}>COMMON QUESTIONS</h2>
                <hr className={style["divider"]}/>
                {qna.map(element => (
                    <div key={element.id}>
                        <details>
                            <summary>{element.question}
                            </summary>
                            <p>{element.answer}</p>
                        </details>
                        <hr className={style["divider"]}/>
                    </div>
                ))}
            </div>

            <div className={style["contact-section"]}>
                <h2 className={style["subtitle"]}>CAN'T FIND THE PHOTOCARD?</h2>
                <button className={style["contact-btn"]}>
                    <Link to="/" className={style["link"]}>CONTACT US</Link>
                </button>
            </div>
        </Layout>
    )
}

export default FaqPage