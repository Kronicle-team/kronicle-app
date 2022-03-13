import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ListingPage from "./pages/ListingPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const pages = {
  home: {
    name: "Home",
    link: "/",
    component: <HomePage />
  },
  login: {
    name: "Login",
    link: "/login",
    component: <LoginPage />
  },
  register: {
    name: "Register",
    link: "/register",
    component: <RegisterPage />
  },
  profile: {
    name: "Profile",
    link: "/profile",
    component: <ProfilePage />
  },
  listing: {
    name: "Listing",
    link: "/listing",
    component: <ListingPage />
  },
  productDetail: {
    name: "Product Details",
    link: "/product/:id",
    component: <ProductDetailsPage/>
  },

}

export const allPages = {
  all: Object.values(pages),
  auth: [pages.login, pages.register]
}
