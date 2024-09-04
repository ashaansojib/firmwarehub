import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Comments from "./Comments";
import Steps from "./Steps";
import Disclaimer from "./Disclaimer";
import moment from "moment";

const Downloads = () => {
  const data = useLoaderData();
//   console.log(data?.data);
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
    image,
    version,
    category,
    size,
    createdAt,
  } = data?.data;
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
        <p className="border-b p-2 flex">
          <span className="w-20">Brand</span>
          <span className="italic"> - {brand}</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Model</span>
          <span className="italic"> - {model}</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Chipset</span>
          <span className="italic"> - {chipset}</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">FileName</span>
          <span className="italic"> - {version}</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Size</span>
          <span className="italic"> - {size}</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Price</span>
          <span className="italic"> - {price} BDT</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Password</span>
          <span className="italic"> - {status}</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">File Link</span>
          <span className="d-link">
            - <Link target="_blank" to={link}>Click Here</Link>
          </span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Drivers</span>
          <span className="d-link">
            {" "}
            - <Link to="/">Click Here</Link>
          </span>
        </p>
        <p className="flex border-b p-2">
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
      <Comments />
    </>
  );
};

export default Downloads;
