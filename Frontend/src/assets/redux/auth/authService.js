import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (userData) => {
  const res = await axios.post(`${API_URL}/users/`, userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(`${API_URL}/users/login`, userData);

  if (res.data) {
    const lastToken = res.data.tokens[res.data.tokens.length - 1];
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(lastToken));
  }
  return res.data;
};
const logout = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const logoutURL = API_URL + `/users/logout`;

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
  login,
  register,
  logout,
};
export default authService;