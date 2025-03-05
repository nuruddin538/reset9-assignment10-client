import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import Banner from "../components/Banner";

const HomeLayout = () => {
  const location = useLocation();

  // Define routes where the banner should NOT be displayed
  const noBannerRoutes = ["/login", "/register"];

  // Check if the current route is in the noBannerRoutes array
  const showBanner = !noBannerRoutes.includes(location.pathname);

  // Define background images for each route
  const bgImages = {
    "/": "url('/images/banner1.jpg')",
    "/all-visas": "url('/images/banner2.jpg')",
    "/add-visa": "url('/images/banner3.jpg')",
    "/my-added-visas": "url('/images/banner4.jpg')",
    "/my-visa-application": "url('/images/banner5.jpg')",
  };

  // Get the current route's background image
  const bannerBgImage = bgImages[location.pathname] || "";
  return (
    <div>
      <ToastContainer />
      <div>
        <header>
          <nav>
            <Navbar></Navbar>
            {showBanner && <Banner bgImage={bannerBgImage}></Banner>}
          </nav>
        </header>
      </div>
      <div>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
      <div>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default HomeLayout;
