import React from "react";
import { Sidebar, YtdownloadForm, InstaDownloadForm } from "../components";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

export default function Downloads() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      <Routes>
        {" "}
        <Route
          path="/"
          element={<Navigate to="/downloads/instagram" replace={true} />}
        />
        <Route path="/instagram" element={<InstaDownloadForm />} />
        <Route path="/youtube" element={<YtdownloadForm />} />
      </Routes>
    </div>
  );
}
