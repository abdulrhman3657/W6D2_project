import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {path: "home", element: <Home/>},
      {path: "/", element: <Login/>},
      {path: "signup", element: <Signup/>},
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router