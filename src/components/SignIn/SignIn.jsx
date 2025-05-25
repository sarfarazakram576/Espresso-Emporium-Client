import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "<h1>Congratulations!</h1>",
          text: "Yo successfully logged In",
          showConfirmButton: false,
          timer: 1200,
        });

        const signInInfo = {
          email,
          lastSignInTime: result.user.metadata.lastSignInTime,
        };

        // fetch('https://espresso-emporium-server-sarfaraz.vercel.app/users',{
        //     method: "PATCH",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(signInInfo)
        // })
        //  .then(res=>res.json())
        //  .then(()=> {})

          
      axios.patch('https://espresso-emporium-server-sarfaraz.vercel.app/users', signInInfo)
      .then((data) =>{console.log(data.data)})
      })
      .catch((error) => console.dir(error));

    form.reset();
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold mb-4">Sign In Now!</h1>
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
              name="email"
              placeholder="Enter your email"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input text-lg placeholder:text-[15px] placeholder:font-bold rancho"
                name="password"
                placeholder="Enter your password"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-6 cursor-pointer z-10"
                  size={17}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-6 cursor-pointer z-10"
                  size={17}
                />
              )}
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 text-2xl">Sign In</button>
            <p className="text-xs my-2">
              Don't have an account ? Please{" "}
              <Link
                to="/signUp"
                className="underline text-blue-500 font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
