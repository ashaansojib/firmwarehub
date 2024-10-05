import React from "react";
import { useSelector } from "react-redux";

const DownloadLoader = () => {
  const fileLink = useSelector((state) => {
    return state.fileLink.link;
  });

  return (
    <div className="p-2">
      <div className="">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          modi beatae. Consectetur ad sequi exercitationem assumenda ipsa,
          corrupti pariatur maiores ex, quasi eveniet dolore labore optio ab
          officia voluptatum dolorum.
        </p>
        <img src="/web.jpg" className="w-[400px] h-full mx-auto" alt="" />
      </div>
      <div className="p-10 flex justify-center">
        <button className="d-btn">Click Here</button>
      </div>
      <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          modi beatae. Consectetur ad sequi exercitationem assumenda ipsa,
          corrupti pariatur maiores ex, quasi eveniet dolore labore optio ab
          officia voluptatum dolorum.
        </p>
      {/* <span>{fileLink}</span> */}
      <img src="/ads-2.jpeg" className="w-[400px] h-full mx-auto" alt="" />
      <h2>Conclusion: </h2>
      <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          modi beatae. Consectetur ad sequi exercitationem assumenda ipsa,
          corrupti pariatur maiores ex, quasi eveniet dolore labore optio ab
          officia voluptatum dolorum.
        </p>
    </div>
    
  );
};

export default DownloadLoader;
