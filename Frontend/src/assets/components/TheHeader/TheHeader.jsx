import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { logout } from "../../redux/auth/authSlice";

const TheHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { talent } = useSelector((state) => state.talentAuth);

  const [text, setText] = useState("");

  const onLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    navigate("/login");
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
    }
  };

  // const isAdmin = user?.role === 'admin'

  return (
    <nav>
      <Link to="/">Home |</Link>
      {talent ? (
        <>
          <Link to="/profile">Profile |</Link>
          <Link onClick={onLogout}>Logout | </Link>

          {/* {isAdmin && <Link to="/admin">Admin Panel | </Link>} */}

          <input
            onKeyUp={handleChange}
            placeholder="Enter the title of the post "
            name="text"
          />
        </>
      ) : (
        <>
          <Link to="/login">Login |</Link>
          <Link to="/register">Register |</Link>
        </>
      )}
    </nav>
  );
};

export default TheHeader;
