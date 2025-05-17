import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails/CoffeeDetails.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProvider from "./Authentication/AuthProvider.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/AddCoffee/UserDetails/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        hydrateFallbackElement: (
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        hydrateFallbackElement: (
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
        Component: UpdateCoffee,
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        hydrateFallbackElement: (
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
        Component: CoffeeDetails,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:3000/users"),
        hydrateFallbackElement: (
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
        Component: Users,
      },
      {
        path: "/userDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
        hydrateFallbackElement: (
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
        Component: UserDetails,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
