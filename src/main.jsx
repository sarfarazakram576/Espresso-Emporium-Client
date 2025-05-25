import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails/CoffeeDetails.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProvider from "./Authentication/AuthProvider.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import EditUser from "./components/EditUser/EditUser.jsx";
import Error from "./components/Error/Error.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users2 from "./components/users2/Users2.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://espresso-emporium-server-sarfaraz.vercel.app/coffees"),
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
          fetch(
            `https://espresso-emporium-server-sarfaraz.vercel.app/coffees/${params.id}`
          ),
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
          fetch(
            `https://espresso-emporium-server-sarfaraz.vercel.app/coffees/${params.id}`
          ),
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
        path: "/userDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-sarfaraz.vercel.app/users/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
        Component: UserDetails,
      },
      {
        path: "/editUser/:id",
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-sarfaraz.vercel.app/users/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
        Component: EditUser,
      },
      {
        path: "/users",
        loader: () =>
          fetch("https://espresso-emporium-server-sarfaraz.vercel.app/users"),
        hydrateFallbackElement: (
          <div className="h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
        Component: Users,
      },
      {
        path: "/users2",
        Component: Users2,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
