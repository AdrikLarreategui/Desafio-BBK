import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginCompany } from "../../../redux/auth/companyAuthSlice";
const foto8 = "../images/foto8.jpg";
import "./LoginCompany.css";

const LoginCompany = () => {
  const navigate = useNavigate();
  // const { isError, isSuccess } = useSelector((state) => state.companyAuthSlice);

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

  // useEffect(() => {
  //   if (isError) {
  //     console.log("error");
  //   }
  //   if (isSuccess) {
  //     console.log("success");
  //     setTimeout(() => {
  //       navigate("/");
  //     });
  //   }

  //   dispatch(reset());
  // }, [isError, isSuccess]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Trying to log in");
    dispatch(loginCompany(formData));

    setTimeout(() => {
      navigate("/company/discover-talents");
    });
  };

  return (
    <>
      {/* <h2 className="lc">Login Company</h2> */}
      <section className="loginCompany">
        <article>
          <img src={foto8} alt="" />
        </article>
        <div>
          <h2 className="lt" style={{ paddingBottom: "40px" }}>
            Acceso de Organización
          </h2>
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
            <Link>¿No recuerdas tu contraseña?</Link>
            <button className="company" type="submit">
              Login
            </button>
          </form>
          <hr></hr>
          <p>
            No tienes cuenta? <Link to="/talent/register">¡Únete!</Link>
          </p>
          <p>
            <Link to="/talent/login">Accesso de Talentos </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginCompany;
