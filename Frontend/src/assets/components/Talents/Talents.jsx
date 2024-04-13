import React, { useEffect } from "react";
import TalentCard from "./TalentCard/TalentCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllTalents, reset } from "../../redux/talents/talentsSlice";

const Talents = () => {
  const { isLoading } = useSelector((state) => state.talentAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTalents());
    dispatch(reset());
  }, []);
  return (
    <>
      <div>Talents</div>
      {isLoading ? "Loading..." : <TalentCard />}
    </>
  );
};

export default Talents;
