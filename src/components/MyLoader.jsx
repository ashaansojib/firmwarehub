import React from "react";
import { Discuss } from "react-loader-spinner";

const MyLoader = () => {
  return (
    <section className="relative">
      <div className="absolute z-20 bg-slate-50 w-full md:h-[530px] h-screen bg-opacity-80 flex justify-center items-center">
        <Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="discuss-loading"
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      </div>
    </section>
  );
};

export default MyLoader;
