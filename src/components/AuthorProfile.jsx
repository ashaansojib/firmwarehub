import React from "react";
import { Link } from "react-router-dom";

const AuthorProfile = () => {
  return (
    <div className="flex items-center gap-6 p-4 border">
      <div className="w-[100px] h-[100px] border bg-slate-300 flex justify-center items-center rounded-full">
        <p>profile</p>
      </div>
      <div>
        <h3>Md. Ashaduzzaman Sojib</h3>
        <Link to="https://ashaduzzaman-sojib.netlify.app/" target="_blank">
          Portfolio{" "}
        </Link>
        |
        <Link to="https://www.linkedin.com/in/ashaansojib/" target="_blank">
          {" "}
          Linkedin{" "}
        </Link>
        |
        <Link to="https://wa.me/+8801892932859" target="_blank">
          {" "}
          Whatsapp
        </Link>
        <p>
          <span className="text-black">Work At</span>- Web Developer | Sr.
          Mobile Software Technician
        </p>
      </div>
    </div>
  );
};

export default AuthorProfile;
