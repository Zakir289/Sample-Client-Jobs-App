import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.jsonbin.io/",
});

export default instance;
