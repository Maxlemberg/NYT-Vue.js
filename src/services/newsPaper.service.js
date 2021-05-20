import axiosInst from "../utils/axios";

export const getPopularNews = async () => {
  const res = await axiosInst.get("/emailed/1.json?api-key=");
  return res.data.results;
};
