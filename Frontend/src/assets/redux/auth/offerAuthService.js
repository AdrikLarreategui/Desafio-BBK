import axios from "axios";
//import authService from "./talentAuthService";
const API_URL = "http://localhost:8080/offers";

const getAll = async () => {
  try {
    const res = await axios.get(`${API_URL}/`);
    return res.data;
  } catch (error) {
    res.send(error);
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
    const token = JSON.parse(localStorage.getItem("token"));
    const { id } = offerData;
    const res = await axios.put(`${API_URL}/id/${id}`, offerData, {
      headers: {
        authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    res.send(error);
  }
};

const deleteOffer = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(`${API_URL}/id/${id}`, {
      headers: {
        authorization: token,
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
};

export default authService;
