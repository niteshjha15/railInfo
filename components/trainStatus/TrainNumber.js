"use client";
import { getStatus } from "@/utils/getTrainStatus";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import TrainTimeLine from "./TrainTimeLine";
import AtSource from "./AtSource";
import { dates } from "@/constants/trainStatusDate";

function TrainNumber() {
  const [trainNumber, setTrainNumber] = useState("");
  const [trainData, setTrainData] = useState(null);
  const [date, setDate] = useState(0);

  const getTrainStatus = async () => {
    const res = await getStatus(trainNumber, date);
    if (res.status === 200) {
      console.log({ res });
      setTrainData(res?.data?.data);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };
  return (
    <div className="flex flex-column justify-center p-5">
      <section
        style={{
          flexDirection: "column !important",
        }}
        className="flex flex-column align-center gap-4"
      >
        <div className="flex flex-column align-center gap-4">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Train Number"
            variant="outlined"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
          />
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="select-date">Select Date</InputLabel>
            <Select
              labelId="select-date"
              id="select-date"
              value={date}
              label="Date"
              onChange={handleChange}
            >
              {dates?.map((day) => (
                <MenuItem key={day?.value} value={day.value}>{day.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button onClick={getTrainStatus} variant="outlined">
          Check
        </Button>
        <br />
        <section>
          {trainData && trainData?.at_src ? (
            <AtSource trainData={trainData} />
          ) : trainData && !trainData?.at_src ? (
            <TrainTimeLine trainData={trainData} />
          ) : null}
        </section>
      </section>
    </div>
  );
}

export default TrainNumber;
