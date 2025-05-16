import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="xl:container mx-auto">
      <Header></Header>
  
     
          <Outlet></Outlet>
       <Footer></Footer>
  
    </div>
  );
};

export default MainLayout;
