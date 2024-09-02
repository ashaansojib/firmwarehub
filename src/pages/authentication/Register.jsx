import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import {
  useAddUserMutation,
  useGetUsersQuery,
} from "../../redux/features/UserSlice";

const Register = () => {
  const { data } = useGetUsersQuery([]);
  const [addUser, { isLoading }] = useAddUserMutation();
  console.log(data);
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // create new users
    createUser(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        // console.log(newUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
    const UD = {
      name: data.name,
      email: data.email,
    };
    await addUser(UD);
    navigate("/");
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
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
          </div>
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
          <FormControlLabel
            control={<Checkbox />}
            checked
            label="Accept Terms & Conditions"
          />
          <input type="submit" value="Register" className="d-active" />
        </form>
        <p className="text-center pt-2">
          Already have account?{" "}
          <Link to="/user/login" className="inline-block text-accent">
            Login
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Register;
