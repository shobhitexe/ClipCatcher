import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex sm:flex-row flex-col justify-around sm:mt-[200px] mt-[100px] sm:gap-0 gap-[50px] mb-[100px]">
      <div className="flex flex-col gap-5 sm:mx-0 mx-auto">
        <h1 className="font-poppins text-[50px] leading-[60px] font-bold mt-[60px]">
          Welcome to <br />
          ClipCatcher
        </h1>
        <p className="font-inter">
          Download and enjoy your favorite videos hassle-free
        </p>
        <Link
          to="/downloads"
          className=" bg-lightPurple font-inter text-white rounded-lg py-3 px-5 w-[150px] text-center shadow-lg"
        >
          Download
        </Link>
      </div>
      <img
        className="w-[300px] h-[300px] sm:mx-0 mx-auto"
        src="favicon.ico"
        alt="heroimg"
      />
    </div>
  );
}
