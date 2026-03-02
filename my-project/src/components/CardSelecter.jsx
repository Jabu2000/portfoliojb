import React from "react";
import { Link } from "react-router-dom";

export const CardSelecter = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center gap-[50px] overflow-hidden ">
      <div className="contains">
        <Link to="/ayodele" className="item item-1 ">
          <div className="word w1">Ayodele</div>
          <div className="img flex ">
            <img
              src="./Ayo/imgAyo.png"
              className="w-[150px] h-auto object-cover mt-5 "
            />
          </div>
        </Link>
        <Link to="/b&b" className="item item-2 ">
          <div className="word w1">B&B</div>
          <div className="img flex ">
            <img
              src="./BandB/B&Bworkimg.png"
              className="w-[150px] h-auto object-cover mt-5 "
            />
          </div>
        </Link>
        <Link to="/kkcmaa" className="item item-3 ">
          <div className="word w1">KK</div>
          <div className="img flex ">
            <img
              src="./KK/KKdesignimg.png"
              className="w-[150px] h-auto object-cover mt-5 "
            />
          </div>
        </Link>
        <Link to="/" className="item item-4 ">
          <div className="word w1"></div>
          <div className="img flex ">
            <div className="w-[150px] h-auto object-cover mt-5 " />
          </div>
        </Link>
      </div>
    </div>
  );
};

export const CardSelecter1 = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center gap-[50px] overflow-hidden ">
      <div className="contains">
        <Link to="/jblogo" className="item item-1 ">
          <div className="word w1">Jb Logo</div>
          <div className="img flex">
            <img
              src="./Jb/imglogo.png"
              className="w-[150px] h-auto object-cover"
            />
          </div>
        </Link>
        <Link to="/" className="item item-2 ">
          <div className="word w1"></div>
          <div className="img">
            <div className="w-[150px] h-auto object-cover" />
          </div>
        </Link>
        <Link to="/" className="item item-3 ">
          <div className="word w1"></div>
          <div className="img">
            <div className="w-[150px] h-auto object-cover" />
          </div>
        </Link>
        <Link to="/" className="item item-4 ">
          <div className="word w1"></div>
          <div className="img">
            <div className="w-[150px] h-auto object-cover" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export const CardSelecter2 = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center gap-[50px] overflow-hidden ">
      <div className="contains">
        <Link to="/nightinlagos" className="item item-1 ">
          <div className="word w1">NIL</div>
          <div className="img flex">
            <img
              src="./NIL/cardNILimg.png"
              className="w-[150px] h-auto object-cover mt-5"
            />
          </div>
        </Link>
        <Link to="/coconutforlife" className="item item-2 ">
          <div className="word w1">C.F.L</div>
          <div className="img flex">
            <img
              src="./Coco/imgCOCO1.png"
              className="w-[150px] h-auto object-cover mt-5"
            />
          </div>
        </Link>
        <Link to="/hemisphere" className="item item-3 ">
          <div className="word w1">Hemisphere</div>
          <div className="img flex">
            <img
              src="./Hemisphere/imghemisphere.png"
              className="w-[150px] h-auto object-cover mt-5"
            />
          </div>
        </Link>
        <Link to="/" className="item item-4 ">
          <div className="word w1"></div>
          <div className="img">
            <div className="w-[150px] h-auto object-cover" />
          </div>
        </Link>
      </div>
    </div>
  );
};
