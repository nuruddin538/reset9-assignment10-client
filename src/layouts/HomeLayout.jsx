import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import { useState } from "react";

const HomeLayout = () => {
  const location = useLocation();

  // Define routes where the banner should NOT be displayed
  const noBannerRoutes = ["/login", "/register"];

  // Check if the current route is in the noBannerRoutes array
  const showBanner = !noBannerRoutes.includes(location.pathname);

  // Define background images for each route
  const bgImages = {
    "/all-visas": "url('/images/banner2.jpg')",
    "/add-visa": "url('/images/banner3.jpg')",
    "/my-added-visas": "url('/images/banner4.jpg')",
    "/my-visa-application": "url('/images/banner5.jpg')",
    "/visa": "url('/images/banner6.jpg')", //Fallback for visaDetails route
  };
  // Get the current route's background image
  const bannerBgImage = bgImages[location.pathname] || bgImages["/visa"];

  return (
    <div>
      <div>
        <ToastContainer />
        <div>
          <header>
            <nav>
              <Navbar></Navbar>
              {/* Conditionally render Slider or Banner */}
              {showBanner && (
                <>
                  {location.pathname === "/" ? (
                    <Slider />
                  ) : (
                    <Banner bgImage={bannerBgImage} />
                  )}
                </>
              )}
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
    </div>
  );
};

export default HomeLayout;
