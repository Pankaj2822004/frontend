import axios from "axios";
require("dotenv").config({ path: "./" });
const API = axios.create({
  baseURL: process.env.REACT_APP_API_UR