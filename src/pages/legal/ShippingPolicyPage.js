import Layout from "../../components/Layout";
import style from "../../components/support/Policy.module.css";
import ToTopButton from "../../components/ToTopButton"

const ShippingPolicyPage = () => {
    return (
        <Layout className={style["policy-container"]} header footer>
            <div>
                <h1>Shipping Policy</h1>

                <p>All orders are processed within X to X business days (excluding weekends and holidays) after
                    receiving your order confirmation email. You will receive another notification when your order has
                    shipped. </p>

                <h2>Domestic Shipping Rates and Estimates</h2>

                <p>For calculated shipping rates: Shipping charges for your order will be calculated and displayed at
                    checkout.</p>
                <p>For simple flat rate shipping: We offer 50.000 dong flat rate shipping to Vietnam.</p>

                <h2>Local delivery</h2>

                <p>Free local delivery is available for orders over 100.000 dong within cities including Ho Chi Minh
                    City, Da Nang, and Hanoi. For orders under 100.000,
                    we charge 20.000 dong for local delivery.</p>

                <p> Deliveries are made from 7:00 to 18:00 on weekdays. We will contact you via text message
                    with the phone number you provided at checkout to notify you on the day of our arrival. </p>


                <h2>International Shipping</h2>

                <p>We offer international shipping to the following countries: </p>

                <ul>
                    <li>Brunei</li>
                    <li>Myanmar</li>
                    <li>Cambodia</li>
                    <li>Timor-Leste</li>
                    <li>Indonesia</li>
                    <li>Laos</li>
                    <li>Malaysia</li>
                    <li>the Philippines,</li>
                    <li>Singapore</li>
                    <li>Thailand</li>
                </ul>

                <p>We offer international shipping to countries of the following regions: </p>

                <ul>
                    <li>Africa</li>
                    <li>North America</li>
                    <li>South America</li>
                    <li>Antarctica</li>
                    <li>Europe</li>
                    <li>Australia</li>
                </ul>

                <p>If you’re using calculated shipping rates: Shipping charges for your order will be calculated and
                    displayed at checkout. </p>

                <p>Your order may be subject to import duties and taxes (including VAT), which are incurred once a
                    shipment reaches your destination country. Kronicle is not responsible for these charges if
                    they are applied and are your responsibility as the customer.</p>

                <h2>How do I check the status of my order?</h2>

                <p>When your order has shipped, you will receive an email notification from us which will include a
                    tracking number you can use to check its status. Please allow 48 hours for the tracking information
                    to become available. </p>

                <p>If you haven’t received your order within 7 days of receiving your shipping confirmation email,
                    please contact us at kronicle-support@email.com with your name and order number, and we will look
                    into it for
                    you.</p>
            </div>
            <ToTopButton/>
        </Layout>
    )
}

export default ShippingPolicyPage;
