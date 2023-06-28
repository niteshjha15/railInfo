import { default as axios } from "axios";

export const reqInstance = axios.create({
  headers: {
    "X-RapidAPI-Key": `bc548a37d4msh267e4118ee7bf5bp186cecjsnb3bf34f3388f`,
    "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
  },
});
