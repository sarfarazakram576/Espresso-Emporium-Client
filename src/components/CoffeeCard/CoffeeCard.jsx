import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, initialCoffees, setinitialCoffees }) => {

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/coffees/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "<h1>Deleted!</h1>",
                  text: "Coffee has been deleted",
                  showConfirmButton: false,
                  timer: 1200,
                });
                const remainingCoffees = initialCoffees.filter(
                  (coffee) => coffee._id !== id
                );
                setinitialCoffees(remainingCoffees);
              }
            });
        }
      });
    };
  return (
    <div className="grid gap-4 items-center grid-cols-[1fr_2fr_50px] bg-[#F5F4F1] rounded-lg p-4">
      <img src={coffee.photo} alt={coffee.name} className="h-36" />

      <div>
        <p className="text-xs my-4">
          <strong>Name:</strong> {coffee.name}
        </p>
        <p className="text-xs my-4">
          <strong>Chef:</strong> {coffee.chef}
        </p>
        <p className="text-xs my-4">
          <strong>Price:</strong> {coffee.price}$
        </p>
      </div>

      <div>
        <Link to={`/coffeeDetails/${coffee._id}`}>
          <button className="bg-[#D2B48C] btn text-lg rounded-sm my-2 px-2.5 block text-white">
            <IoMdEye />
          </button>
        </Link>
      <Link to={`/updateCoffee/${coffee._id}`}>
        <button className="bg-[#3C393B] btn text-lg rounded-sm my-2 px-2.5 block text-white">
          <MdEdit />
        </button>
      </Link>
        <button
          onClick={() => handleDelete(coffee._id)}
          className="bg-[#EA4744] btn text-lg rounded-sm my-2 px-2.5 block text-white"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
