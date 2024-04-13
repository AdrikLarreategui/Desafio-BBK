import axios from "axios";

const API_URL = "http://localhost:3000";

const registerTalent = async (userData) => {
  const res = await axios.post(`${API_URL}/talents/`, userData);
  return res.data;
};

const loginTalent = async (userData) => {
  const res = await axios.post(`${API_URL}/talents/login`, userData);

  if (res.data) {
    const lastToken = res.data.tokens[res.data.tokens.length - 1];
    localStorage.setItem("talentUser", JSON.stringify(res.data.user));
    localStorage.setItem("talentToken", JSON.stringify(lastToken));
  }
  return res.data;
};
const logoutTalent = async () => {
  const talentToken = JSON.parse(localStorage.getItem("talentToken"));
  const logoutURL = API_URL + `/talents/logout`;

  const res = await axios.delete(logoutURL, {
    headers: {
      authorization: talentToken,
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