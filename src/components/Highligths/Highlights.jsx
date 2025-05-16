import React from "react";

const Highlights = () => {
  return (
    <div className="bg-[#ECEAE3] p-8">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center max-w-4xl mx-auto">
         <div className="p-4 flex flex-col gap-3 items-center md:items-start">
        <img src="https://i.ibb.co/MDCMj1ff/1.png" alt="" className="w-12 h-auto" />
        <h1 className="text-3xl font-semibold text-[#331A15]">Awesome Aroma</h1>
        <p className="text-xs">You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div className="p-4 flex flex-col gap-3 items-center md:items-start">
        <img src="https://i.ibb.co/G49h9ph5/2.png" alt="" className="w-12 h-auto" />
        <h1 className="text-3xl font-semibold text-[#331A15]">High Quality</h1>
        <p className="text-xs">We served the coffee to you maintaining the best quality</p>
      </div>
      <div className="p-4 flex flex-col gap-3 items-center md:items-start">
        <img src="https://i.ibb.co/dwJJhRtv/3.png" alt="" className="w-12 h-auto" />
        <h1 className="text-3xl font-semibold text-[#331A15]">Pure Grades</h1>
        <p className="text-xs">The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div  className="p-4 flex flex-col gap-3 items-center md:items-start">
        <img src="https://i.ibb.co/21k2XJ7w/4.png" alt="" className="w-12 h-auto" />
        <h1 className="text-3xl font-semibold text-[#331A15]">Proper Roasting</h1>
        <p className="text-xs">Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
     </div>
    </div>
  );
};

export default Highlights;
