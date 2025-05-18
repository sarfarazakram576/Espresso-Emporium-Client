import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl md:text-4xl mx-auto justify-center max-w-3xl pt-12 flex items-center gap-5">
          <BsArrowLeft /> Back to home
        </h1>
      </Link>
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/c7bqyHh/404.gif"
          className="my-10 w-[75%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Error;
