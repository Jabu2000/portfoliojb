import React from "react";

const HeroName = () => {
  return (
    <div className="2xl:mt-[20px] z-[10]">
      <div className="flex mr-3 justify-between ml-[80px]">
        <div className="w-[10%] sorts-mill-goudy-regular flex justify-between text-[96px] ">
          <p className="sorts-mill-goudy-regular">.</p>
          <p className="sorts-mill-goudy-regular">.</p>
          <p className="sorts-mill-goudy-regular">.</p>
        </div>
        <div className="w-[30%] flex justify-between items-center text-[96px]">
          <p className="sorts-mill-goudy-regular">.</p>
          <p className="sorts-mill-goudy-regular">.</p>
          <p className="sorts-mill-goudy-regular">.</p>
        </div>
        <div className="w-[10%] flex justify-between text-[96px] ">
          <p className="sorts-mill-goudy-regular">.</p>
          <p className="sorts-mill-goudy-regular">.</p>
          <p className="sorts-mill-goudy-regular">.</p>
        </div>
      </div>
      <div className="flex justify-center ml-[80px] lg:mt-0 mt-[-30px]">
        <h1 className="flex justify-center items-center 2xl:text-[245px] xl:text-[160px] lg:text-[130px] text-[70px] md:leading-0 leading-[70px] font-semibold">
          jabulani longwe
        </h1>
      </div>
      <div className="w-full flex lg:justify-end justify-start lg:items-center 2xl:mt-[200px] xl:mt-[60px] mt-[20px] lg:ml-[80px] ml-[80px]">
        <div className="lg:text-[32px] text-[22px] font-medium mr-[16%]">
          <h2 className="text-black ">web developer</h2>
          <h2 className="text-[#797979]">web designer</h2>
        </div>
      </div>
      <div className="w-full flex 2xl:mt-[10%] xl:mt-[5%] mt-[2%] ml-[80px]">
        <p className=" lg:w-[20%] w-[60%] lg:text-[15px] text-[12px] font-normal">
          I'm Jabulani Longwe, a web designer and developer
          who blends clean code with creative flair.
        </p>
      </div>
    </div>
  );
};

export default HeroName;
