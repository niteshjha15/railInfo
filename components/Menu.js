"use client";

import { useState } from "react";
import VillaIcon from "@mui/icons-material/Villa";
import { TrainOutlined } from "@mui/icons-material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import NoteIcon from "@mui/icons-material/Note";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import MoneyIcon from "@mui/icons-material/Money";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import baseStyles from "./menu.module.css";

function Menu() {
  const [menus, setMenus] = useState([
    {
      name: "Search station",
      icon: (
        <VillaIcon
          sx={{
            fontSize: "5rem",
            color:"#FF8126"
          }}
        />
      ),
      target: "/searchStation",
    },
    {
      name: "Trains Between Stations",
      icon: (
        <CompareArrowsIcon
          sx={{
            fontSize: "5rem",
            color:"#FF8126"
          }}
        />
      ),
      target: "/trainsBetweenStation",
    },
    {
      name: "Trains Schedule",
      icon: (
        <HistoryToggleOffIcon
          sx={{
            fontSize: "5rem",
            color:"#FF8126"
          }}
        />
      ),
      target: "/trainSchedule",
    },
    {
      name: "Get PNR status",
      icon: (
        <NoteIcon
          sx={{
            fontSize: "5rem",
            color:"#FF8126"
          }}
        />
      ),
      target: "/pnrStatus",
    },
    {
      name: "Train Live Status",
      icon: (
        <LiveTvIcon
          sx={{
            fontSize: "5rem",
            color:"#FF8126"
          }}
        />
      ),
      target: "/trainLiveStatus",
    },
    {
      name: "Check Seat Availability",
      icon: (
        <AirlineSeatReclineExtraIcon
          sx={{
            fontSize: "5rem",
            color:"#FF8126"
          }}
        />
      ),
      target: "/seatAvailability",
    },
    {
      name: "Get Train Classes",
      icon: (
        <AirlineSeatFlatIcon
          sx={{
            fontSize: "5rem",
            color:"#FF8126"
          }}
        />
      ),
      target: "/trainClasses",
    },
    {
      name: "Get Fair",
      icon: (
        <MoneyIcon
          sx={{
            fontSize: "5rem",
            color:"#FF8126"
          }}
        />
      ),
      target: "/getFair",
    },
  ]);
  return (
    <main className={baseStyles.baseBox}>
      {menus.map((menu) => (
        <section key={menu.name}>
          <Link href={menu.target}>
            <Card className="flex justify-center cursor-pointer">
              <CardContent>
                <Typography variant="h5" className="text-center text-3xl sm:text-xl">
                  {menu.name}
                </Typography>
                <Box className="flex justify-center text-5xl">{menu.icon}</Box>
              </CardContent>
            </Card>
          </Link>
        </section>
      ))}
    </main>
  );
}

export default Menu;
