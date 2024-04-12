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

// const getAll = async () => {
//   const res = await axios.get(API_URL + "/talent/getAll");
//   return res.data.talents;
// };
//PENDIENTE CREAR LA CARPETA TALENTS EN COMPONENTS


// const getById = async (_id) => {
//   const res = await axios.get(API_URL + "/talents/getAll?_id=" + _id);
//   console.log(`this is res.data.talents`, res.data.posts);
//   return res.data.posts[0];
// };
// const getTalentByTitle = async (talentTitle) => {
//   const res = await axios.get(API_URL + "/talents/getAll?title=" + talentTitle);
//   return res.data.posts;
// };

// const like = async (_id) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const res = await axios.put(
//     `${API_URL}/talents/like/${_id}`,
//     {},
//     {
//       headers: {
//         authorization: token,
//       },
//     }
//   );
//   return res.data.updatedTalent;
// };

// const create = async (talentData) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const res = await axios.talent(`${API_URL}/talents/`, postData, {
//     headers: {
//       authorization: token,
//     },
//   });
//   return res.data;
// };

// const talentsService = {

// };

const authService = {
  loginTalent,
  registerTalent,
  logoutTalent,
};
export default authService;
