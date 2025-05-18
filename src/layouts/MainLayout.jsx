import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CopyRight from "../components/CopyRight/CopyRight";

const MainLayout = () => {
  return (
    <div className="xl:container mx-auto">
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </div>
  );
};

export default MainLayout;
