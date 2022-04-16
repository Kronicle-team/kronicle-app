import Layout from "../../components/Layout";
import style from "../../components/support/Policy.module.css";

const RefundPolicyPage = () => {
    return (
        <Layout className={style["policy-container"]} header footer>
            <div>
                <h1>Refund Policy</h1>

                <h2>Refunds, returns, and exchanges</h2>

                <p>We accept returns up to 5 days after delivery, if the item is unused and in its original condition,
                    and we will refund the full order amount minus the shipping costs for the return. </p>

                <p>In the event that your order arrives damaged in any way, please email us as soon as possible at
                    support@email.com with your order number and a photo of the item’s condition. We address these on a
                    case-by-case basis but will try our best to work towards a satisfactory solution.</p>

                <p>If you have any further questions, please don't hesitate to contact us at support@email.com.</p>
            </div>
        </Layout>
    )
}

export default RefundPolicyPage;
