import React, { useEffect, useState } from "react";
import { sidebarLinks } from "../../data/constants";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    width < 768 ? setIsSidebarOpen(false) : setIsSidebarOpen(true);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, [width]);

  return (
    <div
      className={`mt-[50px] ${
        isSidebarOpen
          ? "pl-6 pr-12 min-w-64 ss:static absolute"
          : "ss:pl-2 pl-1 ss:pr-3 pr-1 min-w-[80px]"
      } py-14 bg-sidebar flex flex-col float-left  h-screen gap-10 shadow-lg `}
    >
      <div
        className={`flex gap-5 justify-center cursor-pointer mx-auto font-inter ${
          isSidebarOpen ? "" : " bg-lightPurple p-4 rounded-lg"
        }`}
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        {isSidebarOpen && (
          <h1 className="duration-500 trans ease-in-out">ClipCatcher</h1>
        )}
        <img
          src="/images/sidebar/sidebarBtn.png"
          alt="sidebarBtn"
          className={`w-5 h-5 duration-500 trans ease-in-out ${
            isSidebarOpen ? "" : "rotate-180"
          }`}
        />
      </div>
      <ul className="flex flex-col gap-5 shadow-lg">
        {sidebarLinks.map((sidebar, idx) => (
          <Link
            to={sidebar.tittle}
            key={sidebar.tittle}
            className={`flex ${
              isSidebarOpen ? "px-14 py-3" : "ss:p-5 p-3 ss:w-auto w-[50px]"
            } rounded-lg cursor-pointer gap-3 mx-auto ${
              idx === selected ? "bg-lightPurple" : "bg-bgColor"
            }`}
            onClick={() => setSelected(idx)}
          >
            <img
              src={sidebar.image}
              alt={sidebar.tittle}
              className="w-5 h-5 mx-auto"
            />
            <li className={`font-poppins  ${isSidebarOpen ? "" : "hidden"}`}>
              {sidebar.tittle}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
