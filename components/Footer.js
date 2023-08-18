"use client"
import React from 'react'
import TrainIcon from "@mui/icons-material/Train";
import baseStyles from "./menu.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <div className={`h-80 bg-zinc-700 px-20 ${baseStyles.footerWrap}`}>
            <div className="flex items-center  gap-5 pt-5">
                <TrainIcon
                    sx={{
                        fontSize: "3rem",
                        cursor: "pointer",
                        color:"white"
                    }}
                />
                <p className='text-5xl text-white '>RailInfo</p>
            </div>
        </div>
    )
}

export default Footer