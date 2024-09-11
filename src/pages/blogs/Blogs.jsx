import { Pagination } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-4 border bg-secondary rounded-md py-2 my-2">
        <div className="w-[400px] text-center">images</div>
        <div>
          <h2>How to Use TFM Tool Pro?</h2>
          <p className="pb-2 text-sm">
            <span>Jan 24, 2024 |</span>
            <span>
              {" "}
              <Link to="/" className="text-primary">
                Ashaduzzaman
              </Link>
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolorem
            nisi similique reiciendis repudiandae voluptatem at facilis eaque,
            sequi officia dolores nostrum vero alias ullam architecto
            dignissimos maiores, obcaecati quia.
          </p>
          <button className="underline">Read More...</button>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 border bg-secondary rounded-md py-2 my-2">
        <div className="w-[400px] text-center ">images</div>
        <div>
          <h2>How to Use TFM Tool Pro?</h2>
          <p className="pb-2 text-sm">
            <span>Jan 24, 2024 |</span>
            <span>
              {" "}
              <Link to="/" className="text-primary">
                Ashaduzzaman
              </Link>
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolorem
            nisi similique reiciendis repudiandae voluptatem at facilis eaque,
            sequi officia dolores nostrum vero alias ullam architecto
            dignissimos maiores, obcaecati quia.
          </p>
          <button className="underline">Read More</button>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 border bg-secondary rounded-md py-2 my-2">
        <p className="w-[400px] text-center ">images</p>
        <div>
          <h2>How to Use TFM Tool Pro?</h2>
          <p className="pb-2 text-sm">
            <span>Jan 24, 2024 |</span>
            <span>
              {" "}
              <Link to="/" className="text-primary">
                Ashaduzzaman
              </Link>
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolorem
            nisi similique reiciendis repudiandae voluptatem at facilis eaque,
            sequi officia dolores nostrum vero alias ullam architecto
            dignissimos maiores, obcaecati quia.
          </p>
          <button className="underline">Read More</button>
        </div>
      </div>
      <div className="py-3 flex justify-center">
        <Pagination count={10} shape="rounded" />
      </div>
    </>
  );
};

export default Blogs;
