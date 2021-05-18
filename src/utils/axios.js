import axios from "axios";

const axiosInst = axios.create({
  baseURL: "https://api.nytimes.com/svc/mostpopular/v2",
});

export default axiosInst;
