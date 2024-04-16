import axios from "axios";

const API_URL = "http://localhost:8080";

const registerTalent = async (userData) => {
  const res = await axios.post(`${API_URL}/talents/`, userData);
  return res.data;
};

const updateTalent = async(userData) =>{
  const res = await axios.put(`${API_URL}/talents/update/${id}`, userData, 
{
    headers: {
      authorization: talentToken,
    },
  })
  return res.data
}

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

const updateTalentImg = async (formData) => {
  const talentToken = JSON.parse(localStorage.getItem("talentToken"));
  const updateImg = API_URL + `/uploads/image`;

  const res = await axios.put(updateImg, formData, {
    headers: {
      authorization: talentToken,
    },
  });
  console.log(res.data.file.path);
  return res.data.file.path;
};

const authService = {
  loginTalent,
  registerTalent,
  logoutTalent,
  updateTalent,
  updateTalentImg,
};
export default authService;
