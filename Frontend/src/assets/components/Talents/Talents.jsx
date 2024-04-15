import React, { useEffect } from "react";
import TalentCard from "./TalentCard/TalentCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllTalents, reset } from "../../redux/talents/talentsSlice";

const Talents = () => {
  const { user } = useSelector((state) => state.companyAuth);
  const { isLoading } = useSelector((state) => state.talentAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    user && dispatch(getAllTalents());
    dispatch(reset());
  }, [user]);
  return (
    <>
      <div>Talents</div>
      {user ? isLoading ? "Loading..." : <TalentCard /> : "Loading.."}
    </>
  );
};

export default Talents;
