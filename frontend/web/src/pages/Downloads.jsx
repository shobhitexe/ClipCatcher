import React from "react";
import { Sidebar, YtdownloadForm } from "../components";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { sidebarLinks } from "../data/constants";

export default function Downloads() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/downloads/youtube" replace={true} />}
        />
        {sidebarLinks.map((link) => {
          return (
            <Route
              key={link.tittle}
              path={`/${link.tittle}`}
              element={<YtdownloadForm />}
            />
          );
        })}
      </Routes>
    </div>
  );
}
