import axios from "axios";
//import authService from "./talentAuthService";
const API_URL = "http://localhost:8080/offers";

const getAll = async () => {
  try {
    const res = await axios.get(`${API_URL}/getAll`);
    return res.data.posts;
  } catch (error) {
    res.send(error);
  }
};
const getAllFilter = async (filterData) => {
  try {
    // Construct the query string
    const queryString = Object.keys(filterData)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(filterData[key])}`
      )
      .join("&");

    const res = await axios.get(`${API_URL}/getAll?${queryString}`);
    return res.data.posts;
  } catch (error) {
    console.error(error);
  }
};
const createOffer = async (offerData) => {
  try {
    const companyToken = JSON.parse(localStorage.getItem("companyToken"));
    const res = await axios.post(`${API_URL}/`, offerData, {
      headers: { authorization: companyToken },
    });
    return res.data;
  } catch (error) {
    res.send(error);
  }
};

const updateOffer = async (offerData) => {
  try {
    const companyToken = JSON.parse(localStorage.getItem("companyToken"));
    const { id } = offerData;
    const res = await axios.put(`${API_URL}/id/${id}`, offerData, {
      headers: {
        authorization: companyToken,
      },
    });
    return res.data;
  } catch (error) {
    res.send(error);
  }
};

const deleteOffer = async (id) => {
  try {
    const companyToken = JSON.parse(localStorage.getItem("companyToken"));
    const res = await axios.delete(`${API_URL}/id/${id}`, {
      headers: {
        authorization: companyToken,
      },
    });
    return res.data;
  } catch (error) {
    res.send(error);
  }
};

const likeOffer = async () => {
  try {
    const like = await axios.put(`${API_URL}/like/${id}`);
    return res.like;
  } catch (error) {
    console.log(error);
  }
};

const unlikeOffer = async () => {
  try {
    const unlike = await axios.put(`${API_URL}/unlike/${id}`);
    return res.unlike;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  getAll,
  createOffer,
  updateOffer,
  deleteOffer,
  likeOffer,
  unlikeOffer,
  getAllFilter,
};

export default authService;
