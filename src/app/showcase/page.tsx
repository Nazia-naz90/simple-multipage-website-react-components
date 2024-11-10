import React from "react";
import Navbar from "../components/navbar";
const Showcase = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl lg:mx-auto flex flex-col 
      justify-center">
        <div className="lg:flex justify-center items-center lg:gap-x-4 
        mt-12 hidden">
          <h6 className=" text-[20px] font-bold">Next.JS</h6>
          <div className=" w-[70px] font-semibold border-black 
          border-[1px]
           rounded-sm">
            CONF24
          </div>
          <p>
            Full speaker lineup and schedule out now. Join us on 
            <b>Oct 24</b>
          </p>
          <button
            className="bg-black text-white w-[150px]
        h-[45px] rounded-3xl text-[3vmin] font-semibold"
          >
            Get Tickets
          </button>
        </div>
        <div className="flex flex-col justify-center items-center lg:mt-5 
        m-auto p-10 text-center">
          <h1 className="text-[12vmin] text-gray-800 
          lg:font-extrabold font-bold 
          font-serif -tracking-wide ">
            The web framework
          </h1>
          <h1 className="text-[12vmin] text-gray-800 lg:font-extrabold 
             font-bold font-serif -tracking-wide leading-10">
            for when it matters
          </h1>
          <p className="lg:text-[20px] text-gray-500 font-semibold 
          font-serif leading-10 mt-10">
            Peerless performance efficiency and developer experience.
          </p>
          <p
            className="lg:text-[20px] font-semibold font-serif
    text-gray-500"
          >
            Next.js is trusted by some of the biggest names of the web.
          </p>
          <div className="lg:flex mt-10 lg:space-x-4 space-y-5">
            <button className="bg-black text-white 
            font-semibold  font-serif
             lg:w-[300px] h-[45px] rounded-xl text-center">
                Learn About Managed Next.Js
             </button>
            <button className="bg-slate-100  border-2 hover:bg-slate-200
            w-[150px] h-[45px] rounded-md font-semibold text-gray-700
            shadow-2xl  ">
                Contact Sales</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
