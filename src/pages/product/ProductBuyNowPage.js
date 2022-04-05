import Layout from "../../components/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import CardDetails from "../../components/card-detail/CardDetails";
import CardShowCase from "../../components/CardShowCase";
import ProductCardHome from "../../components/ProductCardHome";

const ProductBuyNowPage = () => {
    return (
    <Layout header footer>
    <FontAwesomeIcon icon={faChevronLeft} />
      <CardDetails />
        

    <section className="recommendation">
    </section>
    </Layout>
    )
}

export default ProductBuyNowPage;