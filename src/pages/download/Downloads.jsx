import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Steps from "./Steps";
import Disclaimer from "./Disclaimer";
import moment from "moment";
import { useForm } from "react-hook-form";
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "../../redux/features/CommentSlice";
import MyLoader from "../../components/MyLoader";
import { useDispatch } from "react-redux";
import { setFileLink } from "../../redux/features/FileLinkSlice";
import AuthorProfile from "../../components/AuthorProfile";

const Downloads = () => {
  const dispatch = useDispatch();
  const [addComment, { isLoading }] = useAddCommentMutation();
  const data = useLoaderData();
  const {
    title,
    filename,
    model,
    brand,
    chipset,
    status,
    price,
    desc,
    link,
    version,
    category,
    size,
    createdAt,
    _id,
  } = data?.data;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddDownloadLink = () => {
    dispatch(setFileLink(link));
  };

  const { data: comments } = useGetCommentsQuery({ id: _id });
  const onSubmit = (data) => {
    data.postId = _id;
    addComment(data);
    reset();
  };

  return (
    <>
      {/* breadcumb tags */}
      <div className="text-sm pt-4">
        <span>
          <Link to="/">Home</Link>{" "}
        </span>
        <span className="text-secondary italic">- {filename}</span>
      </div>
      {/* title */}
      <h2 className="py-1">{title}</h2>
      <span className="text-sm px-2 bg-orange-200">{category}</span>
      <span className="text-sm px-2">
        {moment(createdAt).format("DD MMMM, YYYY")}
      </span>
      {/* description */}
      <p> {desc} </p>
      <p className="py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        voluptate quisquam ab nulla, nesciunt iste, consequatur eaque ipsa
        veniam deleniti, dolore aperiam at ad quasi alias? Quam doloremque odit
        voluptatem?
      </p>
      {/* features area */}
      <h3>Features of Firmware:</h3>
      <div className="pb-4">
        <p className="info-label">
          <span className="w-20">Brand</span>
          <span className="italic"> - {brand}</span>
        </p>
        <p className="info-label">
          <span className="w-20">Model</span>
          <span className="italic"> - {model}</span>
        </p>
        <p className="info-label">
          <span className="w-20">Chipset</span>
          <span className="italic"> - {chipset}</span>
        </p>
        <p className="info-label">
          <span className="w-20">FileName</span>
          <span className="italic"> - {version}</span>
        </p>
        <p className="info-label">
          <span className="w-20">Size</span>
          <span className="italic"> - {size}</span>
        </p>
        <p className="info-label">
          <span className="w-20">Price</span>
          <span className="italic"> - {price} BDT</span>
        </p>
        <p className="info-label">
          <span className="w-20">Password</span>
          <span className="italic"> - {status}</span>
        </p>
        <p className="info-label">
          <span className="w-20">File Link</span>
          <span className="d-link">
            <Link
              // target="_blank"
              to="/downloads"
              onClick={handleAddDownloadLink}
            >
              Click Here
            </Link>
          </span>
        </p>
        <p className="info-label">
          <span className="w-20">Drivers</span>
          <span className="d-link">
            {" "}
            - <Link to="/">Click Here</Link>
          </span>
        </p>
        <p className="info-label">
          <span className="w-20">Flash Tool</span>
          <span className="d-link">
            {" "}
            - <Link to="/">Click Here</Link>
          </span>
        </p>
      </div>
      {/* steps */}
      <Steps />
      {/* safety */}
      <Disclaimer />
      {/* comments */}
      {/* <Comments id={_id} /> */}
      {/* author profile */}
      <AuthorProfile />
      <div className="py-2">
        <h3>Comments</h3>
        {isLoading ? (
          <MyLoader />
        ) : (
          comments?.data.map((comm) => (
            <div className="p-2 flex gap-2 border-b items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <div>
                <p className="font-medium text-primary">{comm.name}</p>
                <span className="text-sm italic">{comm.comment}</span>
              </div>
            </div>
          ))
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <div className="comment">
            <textarea
              placeholder="Write your comments..."
              register
              {...register("comment", { required: true })}
              rows={5}
            ></textarea>
            <div className="space-y-2">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="border w-full p-2"
              />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                className="border w-full p-2"
              />
              <input
                type="submit"
                value={isLoading ? "Submitting" : "SUBMIT"}
                className="d-btn cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Downloads;
