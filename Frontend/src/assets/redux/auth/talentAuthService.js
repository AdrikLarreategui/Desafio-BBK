import axios from "axios";

const API_URL = "http://localhost:8080";

const registerTalent = async (userData) => {
  const res = await axios.post(`${API_URL}/talents/`, userData);
  return res.data;
};

const loginTalent = async (userData) => {
  const res = await axios.post(`${API_URL}/talents/login`, userData);

  if (res.data) {
    const lastToken = res.data.tokens[res.data.tokens.length - 1];
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(lastToken));
  }
  return res.data;
};
const logoutTalent = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const logoutURL = API_URL + `/talents/logout`;

  const res = await axios.delete(logoutURL, {
    headers: {
      authorization: token,
    },
  });

  if (res.data) {
    localStorage.clear();
  }
  return res.data;
};

const authService = {
  loginTalent,
  registerTalent,
  logoutTalent,
};
export default authService;