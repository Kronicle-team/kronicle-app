import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/user/ProfilePage";
import ListingPage from "./pages/listing/ListingPage";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/support/FaqPage";
import AboutUsPage from "./pages/support/AboutUsPage";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import CopyrightPage from "./pages/legal/CopyrightPage";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import TosPage from "./pages/legal/TosPage";
import CheckoutPageOne from "./pages/checkout/CheckoutPageOne";
import CheckoutPageTwo from "./pages/checkout/CheckoutPageTwo";
import CheckoutPageThree from "./pages/checkout/CheckoutPageThree";
import SellerProfilePage from "./pages/profile/SellerProfilePage";
import MyAccount from "./components/profile/MyAccount";
import AllPage from "./pages/AllPage"

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
  profile: {
    name: "Profile",
    link: "/profile",
    component: <ProfilePage />,
  },
  listing: {
    name: "Listing",
    link: "/listing",
    component: <ListingPage />,
  },
  productDetail: {
    name: "Product Details",
    link: "/product/:id",
    component: <ProductDetailPage />,
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
};

export const allPages = {
  all: Object.values(pages),
  auth: [pages.login, pages.register],
  legal: [pages.copyright, pages.privacyPolicy, pages.tos],
};
