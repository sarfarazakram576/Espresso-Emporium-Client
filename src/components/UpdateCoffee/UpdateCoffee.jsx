import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const [updatedCoffee, setUpdatedCoffee] = useState(coffee);

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center center",
            icon: "success",
            title: "<h1>Congratulation!</h1>",
            text: "You successfully updated coffee information",
            showConfirmButton: false,
            timer: 1200,
          });

          setUpdatedCoffee(updatedCoffee);
        }
      });
  };
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl md:text-4xl mx-auto max-w-5xl mt-12 flex items-center gap-5">
          <BsArrowLeft /> Back to home
        </h1>
      </Link>
      <div className="bg-[#F4F3F0] mx-auto max-w-5xl py-14 px-10 my-12 rounded-lg">
        <h1 className="text-center text-4xl md:text-5xl my-8 text-[#374151] font-bold">
          Update Existing Coffee Details
        </h1>
        <p className="max-w-2xl md:max-w-3xl leading-5 mx-auto text-center text-xs md:text-sm text-[#1B1A1A] mb-12">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Name</label>
              <input
                type="text"
                defaultValue={updatedCoffee.name}
                name="name"
                className="input w-full bg-white placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Chef</label>
              <input
                type="text"
                defaultValue={updatedCoffee.chef}
                name="chef"
                className="input w-full bg-white placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Chef Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Supplier</label>
              <input
                type="text"
                defaultValue={updatedCoffee.supplier}
                name="supplier"
                className="input w-full bg-white placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Taste</label>
              <input
                type="text"
                defaultValue={updatedCoffee.taste}
                name="taste"
                className="input w-full bg-white placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Coffee Taste"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Category</label>
              <input
                type="text"
                defaultValue={updatedCoffee.category}
                name="category"
                className="input w-full bg-white placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Coffee Category"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold text-sm">Price</label>
              <input
                type="text"
                defaultValue={updatedCoffee.price}
                name="price"
                className="input w-full bg-white placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset md:col-span-2">
              <label className="label font-bold text-sm">Photo</label>
              <input
                type="text"
                defaultValue={updatedCoffee.photo}
                name="photo"
                className="input w-full bg-white placeholder:text-xs placeholder:font-semibold h-8"
                placeholder="Enter Photo URL"
              />
            </fieldset>
          </div>
          <button className="hover:text-white w-full border-2 border-black btn bg-[#d2b48c] mt-12 text-2xl md:text-3xl hover:bg-[#b99976]">
            Update Coffee Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
