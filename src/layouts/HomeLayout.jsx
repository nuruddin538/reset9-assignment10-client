import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
  return (
    <div>
      <ToastContainer />
      <div>
        <header>
          <nav>
            <Navbar></Navbar>
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
