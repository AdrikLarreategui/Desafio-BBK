import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Post = () => {
  const { talents } = useSelector((state) => state.talents);

  const dispatch = useDispatch();

  const talent = talents?.map((talent, index) => {
    return (
      <div key={talent._id}>
        <hr></hr>
        <h2>{talent.title}</h2>

        <div>
          <p>Nombre:{talent.name}</p>
          <p>Apellidos:{talent.surnames}</p>
        </div>
        <p>User ID: {talent._id}</p>
        <hr></hr>
      </div>
    );
  });

  return talent;
};

export default Post;
