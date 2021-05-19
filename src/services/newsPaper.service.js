import axiosInst from "../utils/axios";

export const getPopularNews = async () => {
  const res = await axiosInst.get(
    "/emailed/1.json?api-key=qEWrF4j6524sPNQ6iqGmfJqzGrxSJnwa"
  );
  return res.data.results;
};
