import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../redux/auth/talentAuthSlice";

const LoginTalent = () => {
  const navigate = useNavigate();
  const { isError, isSuccess } = useSelector((state) => state.talentAuth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log("error");
    }
    if (isSuccess) {
      console.log("success");
      setTimeout(() => {
        navigate("/");
      });
    }

    dispatch(reset());
  }, [isError, isSuccess]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={onChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginTalent;
