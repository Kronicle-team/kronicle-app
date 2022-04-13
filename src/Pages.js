import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ListingPage from "./pages/listing/ListingPage";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/support/FaqPage";
import AboutUsPage from "./pages/support/AboutUsPage";
import CopyrightPage from "./pages/legal/CopyrightPage";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
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

const pages = {
  home: {
    name: "Home",
    link: "/",
    component: <HomePage />,
  },
  all: {
    name: "all",
    link: "/all",
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
    name: "Buy Now Card",
    link: "/cards/buy-now/:id",
    component: <ProductBuyNowPage />,
  },
  cardBid: {
    name: "Bidding Card",
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
    name: "All bid cards",
    link: "/cards/bid",
    component: <AllBidPage />
  },
  allBuyNow: {
    name: "All buy-now cards",
    link: "/cards/buy-now",
    component: <AllBuyNowPage />
  },

};

export const allPages = {
  all: Object.values(pages),
  auth: [pages.login, pages.register],
  legal: [pages.copyright, pages.privacyPolicy, pages.tos],
};
