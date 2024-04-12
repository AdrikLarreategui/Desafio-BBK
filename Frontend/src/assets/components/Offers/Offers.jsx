import React, { useEffect } from "react";
import Offer from "../Offer/Offer";
import { useDispatch, useSelector } from "react-redux";
// import { getAll, reset } from "../../redux/posts/postsSlice"; RECORDAR CAMBIARLO
// import "./Posts.css";
// import CreatePost from "../CreatePost/CreatePost";

const Offers = () => {
  const { isLoading } = useSelector((state) => state.posts);
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