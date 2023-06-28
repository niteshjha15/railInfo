import axios from "axios";
import { reqInstance } from "./instance";

export const getStatus = (trainNumber, date = 0) => {
  return reqInstance.get(
    `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNumber}&startDay=${date}`
  );
};
