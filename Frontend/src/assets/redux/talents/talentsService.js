import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllTalents = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(API_URL + "/talents/getAll", {
    headers: {
      authorization: token,
    },
  });
  return res.data.users;
};

const authService = {
  getAllTalents,
};
export default authService;
