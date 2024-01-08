import React from "react";

const HeroSection = () => {
  return (
    <>
      <div>
        <div className="w-full h-full bg-black text-center pt-52 ">
          <h1 className=" text-8xl font-Primary font-extrabold text-green-400  ">
            Sneaker Store
          </h1>
          <h3 className="text-green-400 text-4xl font-Primary mt-5">
            Buy Affordable Sneaker
          </h3>
          <button className="bg-black text-green-400 border-2 border-green-400 rounded text-xl w-24 h-12 font-Primary font-extrabold hover:bg-slate-800 mt-8 mb-5">
            Visit Now
          </button>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
