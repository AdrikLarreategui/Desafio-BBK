import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllTalents = async () => {
  const companyToken = JSON.parse(localStorage.getItem("companyToken"));
  const res = await axios.get(API_URL + "/talents/getAll", {
    headers: {
      authorization: companyToken,
    },
  });
  return res.data.users;
};

const authService = {
  getAllTalents,
};
export default authService;
