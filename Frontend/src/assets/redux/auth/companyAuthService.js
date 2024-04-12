import axios  from "axios";
//import authService from "./talentAuthService";
const API_URL = "http://localhost:8080"

const registerCompany = async (userData) => {
    const res = await axios.post(`${API_URL}/companies`, userData);
    console.log('ha llegado a companyAuthService');
    return res.data;
  };
  
  const loginCompany = async (userData) => {
    const res = await axios.post(`${API_URL}/companies/login`, userData);
  
    if (res.data) {
      const lastToken = res.data.tokens[res.data.tokens.length - 1];
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(lastToken));
    }
    return res.data;
  };
  const logoutCompany = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const logoutURL = API_URL + `/companies/logout`;
  
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
    registerCompany,
    loginCompany,
    logoutCompany,
  };

export default authService