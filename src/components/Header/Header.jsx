import React from "react";

const Header = () => {
  return (
    <div className='p-2 bg-[url("https://i.ibb.co/DXYTPws/15.jpg")] bg-center bg-cover'>
      <div className="flex justify-center gap-4 items-center">
        <img
          src="https://i.ibb.co/23mpK3vT/logo1.png"
          className="w-[4%]"
          alt=""
        />
        <h1 className="font-bold text-4xl text-white rancho">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Header;
