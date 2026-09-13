import { createBrowserRouter } from "react-router";

import Navbar from "../components/Navbar";
import Product from "../pages/Product";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../admins/Dashboard";
import AdminDashboard from "../admins/AdminDashboard";
import AllUsers from "../admins/Allusers";
import CreateProduct from "../admins/Createproduct";
import Products from "../admins/adminroduct";
import Carts from "../pages/carts";
import Profile from "../pages/Profile";



export const router = createBrowserRouter([
  // =========================
  // USER ROUTES
  // =========================
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Carts />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },

  // =========================
  // ADMIN DASHBOARD
  // =========================
  {
    path: "/admindashboard",
    element: <AdminDashboard />,

    children: [
      // /dashboard
      {
        index: true,
        element: (
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to Admin Dashboard 👋
            </h1>

            <p className="mt-3 text-gray-600">
              Manage your users, products and orders from here.
            </p>
          </div>
        ),
      },

      // /dashboard/allusers
      {
        path: "/admindashboard/allusers",
        element: <AllUsers />,
      },
       {
        path: "/admindashboard/dashboard",
        element: <Dashboard />,
      },


      // /dashboard/products
      {
        path: "/admindashboard/createproduct",
        element: <CreateProduct />,
      },

      // /dashboard/products
      {
        path: "/admindashboard/products",
        element: <Products />,  
      },

      // /dashboard/orders
      {
        path: "orders",
        element: (
          <div>
            <h1 className="text-3xl font-bold">
              Orders
            </h1>
          </div>
        ),
      },
    ],
  },
]);