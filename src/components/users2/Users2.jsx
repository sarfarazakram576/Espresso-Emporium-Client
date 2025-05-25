import { useQuery } from "@tanstack/react-query";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";

const Users2 = () => {
  const { isPending, isError, error, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://espresso-emporium-server-sarfaraz.vercel.app/users"
      );
      return res.json();
    },
  });

  //     const [users, setUsers] = useState([])
  //     useEffect(()=>{

  // fetch('https://espresso-emporium-server-sarfaraz.vercel.app/users')
  //  .then(res=>res.json())
  //  .then(data => setUsers(data))
  //     },[])


  if (isPending) {
  return   <div className="h-[80vh] flex justify-center items-center">
      <span className="loading loading-infinity loading-xl"></span>
    </div>;
  }

  if (isError) {
  return   <span>{error.message}</span>
  }

  return (
    <div className="px-4 my-14 max-w-5xl mx-auto">
      <Link to="/">
        <h1 className="text-3xl md:text-4xl my-8 flex items-center gap-5">
          <BsArrowLeft /> Back to home
        </h1>
      </Link>
      {/* <h1 className="text-2xl md:text-3xl text-center my-12">
        Total Users: {users.length}
      </h1> */}
      {users && users.length ? (
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
          There is no users
        </h1>
      )}
    </div>
  );
};

export default Users2;
