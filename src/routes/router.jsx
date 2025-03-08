import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllVisa from "../pages/AllVisa";
import AddVisa from "../pages/AddVisa";
import MyAddVisa from "../pages/MyAddVisa";
import MyVisaApplication from "../pages/MyVisaApplication";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-visas",
        element: <AllVisa></AllVisa>,
      },
      {
        path: "/add-visa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "/my-added-visas",
        element: <MyAddVisa></MyAddVisa>,
        loader: () => fetch("http://localhost:5000/visa"),
      },
      {
        path: "/my-visa-application",
        element: <MyVisaApplication></MyVisaApplication>,
      },
    ],
  },
]);

export default router;
