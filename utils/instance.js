import { default as axios } from "axios";

export const reqInstance = axios.create({
  headers: {
    "X-RapidAPI-Key": `c5c623e29cmsh92fdb9df13296f2p17c2f5jsn9e96b9c23908`,
    "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
  },
});
