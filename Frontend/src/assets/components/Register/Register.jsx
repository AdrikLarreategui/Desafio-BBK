import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      console.log("success");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
    if (isError) {
      console.log("error");
    }
    dispatch(reset());
  }, [isSuccess, isError]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form", formData);
    dispatch(register(formData));
  };

  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="name"
          ></input>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
