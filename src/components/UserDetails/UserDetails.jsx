import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl md:text-4xl mx-auto max-w-3xl mt-12 flex items-center gap-5">
          <BsArrowLeft /> Back to home
        </h1>
      </Link>
      <div className="bg-[#F4F3F0] mx-auto max-w-3xl py-6 px-10 my-12 rounded-lg flex gap-8 justify-center items-center">
        <div>
          <img src={user.photo} alt="" className="h-72 rounded-lg w-auto" />
        </div>
        <div>
          <h1 className="text-3xl mb-6 text-[#331A15] font-bold">
            User Information
          </h1>
          <div>
            <p className="text-xs my-3">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-xs my-3">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-xs my-3">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="text-xs my-3">
              <strong>Address:</strong> {user.address}
            </p>
            <p className="text-xs my-3">
              <strong>Creation Time:</strong> {user.creationTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
