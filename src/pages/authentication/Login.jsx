import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const naviagate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then((result) => {
        // console.log(result);
        naviagate("/admin");
      })
      .catch((err) => {
        console.log(err.message);
      });
    reset();
  };
  return (
    <section className="middle-container">
      <div className="middle-content w-[450px]">
        <Link to="/">
          <h2>SoftFirm.com</h2>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-2">
            <p>Email Address</p>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="py-2">
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-between items-end">
            <FormControlLabel
              control={<Checkbox />}
              checked={true}
              label="Accept Terms & Conditions"
            />
            <span className="inline-block text-accent pb-2">
              Forget Password?
            </span>
          </div>
          <input type="submit" value="Login" className="d-active" />
        </form>
        <p className="text-center pt-4">Or</p>
        <div className="flex gap-4 justify-center py-4">
          <Link>
            <FaGithub className="text-2xl" />
          </Link>
          <Link>
            <FaGoogle className="text-2xl" />
          </Link>
          <Link>
            <FaFacebookF className="text-2xl" />
          </Link>
        </div>
        <p className="text-center pt-2">
          Don't have any account?{" "}
          <Link to="/user/register" className="inline-block text-accent">
            Register
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Login;
