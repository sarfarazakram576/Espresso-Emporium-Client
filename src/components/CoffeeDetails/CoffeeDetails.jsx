import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl md:text-4xl mx-auto max-w-3xl mt-12 flex items-center gap-5">
          <BsArrowLeft /> Back to home
        </h1>
      </Link>
      <div className="bg-[#F4F3F0] mx-auto max-w-3xl py-6 px-10 my-12 rounded-lg flex gap-8 justify-center items-center">
        <div>
          <img src={coffee.photo} alt="" className="h-80 w-auto" />
        </div>
        <div>
            <h1 className="text-3xl mb-6 text-[#331A15] font-bold">Niceties</h1>
            <div>
          <p className="text-xs my-3">
            <strong>Name:</strong> {coffee.name}
          </p>
          <p className="text-xs my-3">
            <strong>Chef:</strong> {coffee.chef}
          </p>
          <p className="text-xs my-3">
            <strong>Supplier:</strong> {coffee.supplier}
          </p>
          <p className="text-xs my-3">
            <strong>Taste:</strong> {coffee.taste}
          </p>
          <p className="text-xs my-3">
            <strong>Category:</strong> {coffee.category}
          </p>
          <p className="text-xs my-3">
            <strong>Price:</strong> {coffee.price}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
