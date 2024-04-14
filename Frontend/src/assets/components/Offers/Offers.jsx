import React, { useEffect } from "react";
import Offer from "../Offer/Offer";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../redux/auth/offerAuthSlice"; 
// import "./Posts.css";
// import CreatePost from "../CreatePost/CreatePost"; RECORDAR CAMBIARLO

const Offers = () => {
  const { isLoading } = useSelector((state) => state.offers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
    dispatch(reset());
  }, []);

  return (
    <>
      <CreateOffer />
      <div className="offers-container">
        {isLoading ? "Cargando..." : <Offer />}
      </div>
    </>
  );
};

export default Offers