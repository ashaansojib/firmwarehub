import React from "react";
import { Link } from "react-router-dom";
import Steps from "../download/Steps";
import Disclaimer from "../download/Disclaimer";

const SPDTools = () => {
  return (
    <div className="py-2">
      <h2>Tested Version of SPD Flash Tools Free.</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora
        itaque, non ullam molestias odio earum. Officiis, fugiat rerum fugit
        beatae eos id ut, quam numquam inventore veritatis, libero cum.
      </p>
      <p className="py-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora
        itaque, non ullam molestias odio earum. Officiis, fugiat rerum fugit
        beatae eos id ut, quam numquam inventore veritatis, libero cum.
      </p>
      <h3>Features of SPD Tool:</h3>
      <div className="pb-4">
        <p className="border-b p-2 flex">
          <span className="w-20">Name</span>
          <span className="italic"> - SPD Free Tool</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Category</span>
          <span className="italic"> - Upgrade/Facroty</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Supports</span>
          <span className="italic"> - MT6580, MT6580, MT6765, MT6797T & more.</span>
        </p>
        <p className="flex border-b p-2">
          <span className="w-20">Tool Link</span>
          <span className="d-link">
            - <Link to="https://spdflashtool.com/wp-content/uploads/SPD_Upgrade_Tool_R27.23.1902.zip">SP_Flash_Tool_v5.1736_Win.rar</Link>
          </span>
        </p>
      </div>
      {/* TODO */}
      <Steps />
      <Disclaimer />
    </div>
  );
};

export default SPDTools;
