import React, { useState } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { Link } from "react-router";
import { LuCoffee } from "react-icons/lu";

const Products = ({ coffees }) => {
  const [initialCoffees, setinitialCoffees] = useState(coffees);


  return (
    <div className="relative my-16 px-4">
      {/* Background overlay ABOVE cards */}
      <div className="absolute inset-0 z-10 bg-[url('https://i.ibb.co/nvsy9vf/1.png')] bg-no-repeat bg-contain bg-center pointer-events-none opacity-90" />

      {/* Content stays under background visually but fully functional */}
      <div className="relative z-0">
        <p className="text-center">--- Sip & Savor ---</p>
        <h1 className="font-bold text-4xl md:text-5xl text-center my-4 text-[#331A15]">
          Our Popular Products
        </h1>

        <Link className="flex justify-center my-4" to="/addCoffee">
          <button className="flex items-center hover:text-[#331A15] mt-2 gap-2 text-white btn bg-[#E3B577] text-xl md:text-2xl hover:bg-[#F5F4F1] border-2 px-8 py-5 rounded-lg border-[#331A15]">
            Add Coffee <LuCoffee />
          </button>
        </Link>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto mt-12">
          {initialCoffees.map((coffee) => (
            <CoffeeCard
              coffee={coffee}
              key={coffee._id}
              initialCoffees={initialCoffees}
              setinitialCoffees={setinitialCoffees}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
