import React, { useState } from "react";
import { navLinks } from "../data/constants";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex py-5 justify-around bg-bgLight fixed w-full top-0 shadow-xl z-10">
      <div className="flex align-middle gap-2">
        <img src="/favicon.ico" alt="logo" className="w-5 h-5" />
        <h1 className="font-inter font-bold">ClipCatcher</h1>
      </div>
      <div className="sm:flex hidden">
        <ul className="flex gap-5 font-poppins cursor-pointer">
          {navLinks.map((nav) => (
            <li key={nav.tittle}>
              {" "}
              <Link to={nav.link}>{nav.tittle}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:hidden flex">
        <img
          className={`cursor-pointer w-7 h-7 duration-500 trans ease-in-out ${
            Boolean(isNavOpen) ? "rotate-90" : ""
          }`}
          src={`/images/navbar/${Boolean(isNavOpen) ? "cross" : "select"}.svg `}
          alt="ham"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
        {Boolean(isNavOpen) && (
          <div className="absolute left-0 top-16 py-10 w-full bg-bgLight">
            <ul className="flex flex-col text-center text-[17px] gap-3 font-poppins ">
              {navLinks.map((nav) => (
                <li key={nav.tittle} className="cursor-pointer">
                  <Link to={nav.link}>{nav.tittle}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
