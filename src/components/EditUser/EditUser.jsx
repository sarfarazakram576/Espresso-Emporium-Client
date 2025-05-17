import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const EditUser = () => {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);
  const handleEditUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedUserInfo = Object.fromEntries(formData.entries());

    fetch(
      `https://espresso-emporium-server-sarfaraz.vercel.app/users/${user._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUserInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount){
            const updatedUser = {
              _id: initialUser._id,
              email: initialUser.email,
              creationTime: initialUser.creationTime,
              lastSignInTime: initialUser.lastSignInTime,
              uid: initialUser.uid,
              ...updatedUserInfo
            };
            setUser(updatedUser)

          Swal.fire({
            position: "center",
            icon: "success",
            title: "<h1>Congratulation!</h1>",
            text: "You successfully updated user information",
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold mb-4">Update User Information</h1>
        <form onSubmit={handleEditUser} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="name"
            defaultValue={user.name}
            placeholder="Enter your Name"
          />
          <label className="label">Address</label>
          <input
            type="text"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="address"
            defaultValue={user.address}
            placeholder="Enter your Address"
          />
          <label className="label">Phone</label>
          <input
            type="number"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="phone"
            defaultValue={user.phone}
            placeholder="Enter your Phone Number"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="photo"
            defaultValue={user.photo}
            placeholder="Enter your Photo Url"
          />
          <button className="btn btn-neutral mt-4 text-2xl">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
