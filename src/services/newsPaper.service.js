import axiosInst from "../utils/axios";

export const getPopularNews = () => {
  return axiosInst.get(
    "/emailed/1.json?api-key=qEWrF4j6524sPNQ6iqGmfJqzGrxSJnwa"
  );
};
