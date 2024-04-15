import React, { useEffect } from "react";
import Offer from "../Offer/Offer";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../redux/auth/offerAuthSlice";
import "./Filter/Filter";
import Filter from "./Filter/Filter";

const Offers = () => {
  const { isLoading } = useSelector((state) => state.offers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
    dispatch(reset());
  }, []);

  useEffect(() => {});

  return (
    <>
      <h2 style={{ margin: "15px 0" }}>Oportunidades para ti</h2>
      <Filter />
      <div className="offers-container">
        {isLoading ? "Cargando..." : <Offer />}
      </div>
    </>
  );
};

export default Offers;
