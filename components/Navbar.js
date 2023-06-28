"use client";
import React from "react";
import TrainIcon from "@mui/icons-material/Train";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <nav className="flex items-center justify-between h-16 bg-slate-400">
      <div className="flex items-center  gap-5">
        <TrainIcon
          sx={{
            fontSize: "3rem",
            cursor: "pointer",
          }}
        />
        <p className="font-medium">Rail Info</p>
      </div>
      <div className="flex p-5">
        <MenuIcon
          sx={{
            fontSize: "2rem",
            cursor: "pointer",
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
