import React from "react";
import { DTitile } from "../../../components/DTitle";
import { useGetUsersQuery } from "../../../redux/features/UserSlice";
import MyLoader from "../../../components/MyLoader";

const Users = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  return (
    <div className="p-2">
      <DTitile title="Manage All Registerd Users!" />
      <div className="md:flex gap-2 my-2">
        {isLoading ? (
          <MyLoader />
        ) : (
          users?.data.map((user) => (
            <div key={user._id} className="p-2 border mb-2 relative rounded-md">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-5 absolute top-0 text-red-500 right-0 cursor-pointer"
              >
                <path d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
