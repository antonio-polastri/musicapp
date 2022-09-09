import axios from "axios";
 
export const axiosReq = axios.create({
 // baseURL: "https://restapi.musicaggregator.eu/api/",//http://localhost:9999/api/",
  baseURL: "http://localhost:9999/api/",
  
});