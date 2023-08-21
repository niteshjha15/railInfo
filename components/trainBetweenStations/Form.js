"use client"
import { stationlabels } from '@/utils/stations'
import { DatePicker} from '@mui/lab'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'


function Form() {
    return (
        <div>
            <Autocomplete
                disablePortal
                options={stationlabels}
                sx={{ width: 300 }}
                onChange={(e, value, reason) => console.log(e, value, reason)}
                renderInput={(params) => <TextField

                    {...params} label="From Station"
                />}
            />
            <Autocomplete
                disablePortal
                options={stationlabels}
                sx={{ width: 300 }}
                onChange={(e, value, reason) => console.log(e, value, reason)}
                renderInput={(params) => <TextField

                    {...params} label="To Station"
                />}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
        </div>
    )
}

export default Form