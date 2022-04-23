import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ListingPage from "./pages/listing/ListingPage";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/support/FaqPage";
import AboutUsPage from "./pages/support/AboutUsPage";
import CopyrightPage from "./pages/legal/CopyrightPage";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import ShippingPolicyPage from "./pages/legal/ShippingPolicyPage";
import RefundPolicyPage from "./pages/legal/RefundPolicyPage";
import TosPage from "./pages/legal/TosPage";
import CheckoutPageOne from "./pages/checkout/CheckoutPageOne";
import CheckoutPageTwo from "./pages/checkout/CheckoutPageTwo";
import CheckoutPageThree from "./pages/checkout/CheckoutPageThree";
import SellerProfilePage from "./pages/profile/SellerProfilePage";
import MyAccount from "./components/profile/MyAccount";
import AllPage from "./pages/AllPage"
import CartPage from "./pages/cart/CartPage";
import ProductBidPage from "./pages/product/ProductBidPage";
import ProductBuyNowPage from "./pages/product/ProductBuyNowPage";
import AllBidPage from "./pages/AllBidPage";
import AllBuyNowPage from "./pages/AllBuyNowPage";
import AllAlbumCardsPage from "./pages/AllAlbumCardsPage";
import AllTradingCardsPage from "./pages/AllTradingCardsPage";
import Form from "./components/auth/Form";

const pages = {
  home: {
    name: "Home",
    link: "/",
    component: <HomePage />,
  },
  all: {
    name: "All",
    link: "/cards/all",
    component: <AllPage />
  },
  login: {
    name: "Login",
    link: "/login",
    component: <LoginPage />,
  },
  register: {
    name: "Register",
    link: "/register",
    component: <RegisterPage />,
  },
  listing: {
    name: "Listing",
    link: "/listing",
    component: <ListingPage />,
  },
  cardBuyNow: {
    name: "Buy Now Card Detail",
    link: "/cards/buy-now/:id",
    component: <ProductBuyNowPage />,
  },
  cardBid: {
    name: "Bidding Card Detail",
    link: "/cards/bid/:id",
    component: <ProductBidPage />,
  },
  faq: {
    name: "Frequently Asked Questions",
    link: "/faq",
    component: <FaqPage />,
  },
  aboutUs: {
    name: "About Us",
    link: "/about-us",
    component: <AboutUsPage />,
  },
  copyright: {
    name: "Copyright",
    link: "/copyright",
    component: <CopyrightPage />,
  },
  privacyPolicy: {
    name: "Privacy Policy",
    link: "/privacy-policy",
    component: <PrivacyPolicyPage />,
  },
  shippingPolicy: {
    name: "Shipping Policy",
    link: "/shipping-policy",
    component: <ShippingPolicyPage />,
  },
  refundPolicy: {
    name: "Refund Policy",
    link: "/refund-policy",
    component: <RefundPolicyPage />,
  },
  tos: {
    name: "Terms of Service",
    link: "/tos",
    component: <TosPage />,
  },
  checkOutOne: {
    name: "Checkout One",
    link: "/check-out-1",
    component: <CheckoutPageOne />,
  },
  checkOutTwo: {
    name: "Checkout Two",
    link: "/check-out-2",
    component: <CheckoutPageTwo />,
  },
  checkOutThree: {
    name: "Checkout Three",
    link: "/check-out-3",
    component: <CheckoutPageThree />,
  },
  sellerProfilePage: {
    name: "Seller Profile",
    link: "/seller-profile",
    component: <SellerProfilePage />,
  },
  myAccount: {
    name: "My Account",
    link: "/my-account",
    component: <MyAccount />,
  },
  cart: {
    name: "Cart",
    link: "/cart",
    component: <CartPage />
  },
  allBid: {
    name: "Bid",
    link: "/cards/bid",
    component: <AllBidPage />
  },
  allBuyNow: {
    name: "Buy Now",
    link: "/cards/buy-now",
    component: <AllBuyNowPage />
  },
  allAlbumCards: {
    name: "Album Cards",
    link: "/cards/album-cards",
    component: <AllAlbumCardsPage/>
  },
  allTradingCards: {
    name: "Trading Cards",
    link: "/cards/trading-cards",
    component: <AllTradingCardsPage/>
  },
  form: {
    name: "Form",
    link: "/form",
    component: <Form />,
  },
};

export const allPages = {
  all: Object.values(pages),
  auth: [pages.login, pages.register],
  legal: [pages.copyright, pages.privacyPolicy, pages.tos],
  navBar: [pages.home, pages.all, pages.allAlbumCards, pages.allTradingCards, pages.allBuyNow, pages.allBid]
};
