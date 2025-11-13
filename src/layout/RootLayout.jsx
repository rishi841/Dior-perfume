import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className=""> 
        <Outlet />
      </main>
      </div>
    
  );
};

export default RootLayout;

