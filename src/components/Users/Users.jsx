import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the user from Firebase and MongoDB!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // First delete from Firebase
        fetch(
          `https://espresso-emporium-server-sarfaraz.vercel.app/api/users/${user.uid}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((fbData) => {
            console.log(fbData);
            // Then delete from MongoDB
            fetch(
              `https://espresso-emporium-server-sarfaraz.vercel.app/users/${user._id}`,
              {
                method: "DELETE",
              }
            )
              .then((res) => res.json())
              .then((mongoData) => {
                if (mongoData.deletedCount || fbData.message) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "<h1>Deleted!</h1>",
                    text: "User has been deleted",
                    showConfirmButton: false,
                    timer: 1200,
                  });
                  const remainingUsers = users.filter(
                    (u) => u._id !== user._id
                  );
                  setUsers(remainingUsers);
                }
              });
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <div className="px-4 my-14 max-w-5xl mx-auto">
      <Link to="/">
        <h1 className="text-3xl md:text-4xl my-8 flex items-center gap-5">
          <BsArrowLeft /> Back to home
        </h1>
      </Link>
      <h1 className="text-2xl md:text-3xl text-center my-12">
        Total Users: {users.length}
      </h1>
      {users.length ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.photo} alt="User" />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/userDetails/${user._id}`}>
                    <button className="bg-[#D2B48C] mr-1 btn text-lg rounded-sm my-2 px-2.5 text-white">
                      <IoMdEye />
                    </button>
                  </Link>
                  <Link to={`/editUser/${user._id}`}>
                    <button className="bg-[#3C393B] mr-1 btn text-lg rounded-sm my-2 px-2.5 text-white">
                      <MdEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(user)}
                    className="bg-[#EA4744] btn text-lg rounded-sm my-2 px-2.5 text-white"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-6xl flex justify-center items-center h-40">
          Can't find data from server or there is no users
        </h1>
      )}
    </div>
  );
};

export default Users;
