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
import VisaDetails from "../components/VisaDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () =>
          fetch("http://localhost:5000/visa").then((res) => res.json()),
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
        loader: () =>
          fetch("http://localhost:5000/visa").then((res) => res.json()),
      },
      {
        path: "/add-visa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "/visa/:id",
        element: <VisaDetails></VisaDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/visa/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/my-added-visas",
        element: <MyAddVisa></MyAddVisa>,
        loader: () =>
          fetch("http://localhost:5000/my-visas").then((res) => res.json()),
      },
      {
        path: "/my-visa-application",
        element: <MyVisaApplication></MyVisaApplication>,
        loader: () =>
          fetch("http://localhost:5000/my-applications").then((res) =>
            res.json()
          ),
      },
    ],
  },
]);

export default router;
