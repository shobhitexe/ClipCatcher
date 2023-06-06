import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex sm:flex-row flex-col justify-around sm:mt-[200px] mt-[100px] sm:gap-0 gap-[50px] mb-[100px]">
      <div className="flex flex-col gap-5 sm:mx-0 mx-auto">
        <h1 className="font-poppins text-[50px] leading-[60px] font-bold mt-[60px] ss:mx-0 mx-auto">
          Welcome to <br />
          ClipCatcher
        </h1>
        <p className="font-inter ss:mx-0 mx-auto ss:w-[100%] w-[80%]">
          Download and enjoy your favorite videos hassle-free
        </p>
        <Link
          to="/downloads"
          className=" bg-lightPurple font-inter text-white rounded-lg py-3 px-5 w-[150px] text-center shadow-lg ss:mx-0 mx-auto"
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
