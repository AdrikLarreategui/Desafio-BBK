import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { logoutTalent } from "../../redux/auth/talentAuthSlice";
import { logoutCompany } from "../../redux/auth/companyAuthSlice";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TheHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { talent } = useSelector((state) => state.talentAuth);
  //  const { company } = useSelector((state) => state.companyAuth)

  const [text, setText] = useState("");

  const onLogout = (event) => {
    event.preventDefault();
    dispatch(logoutTalent()) || dispatch(logoutCompany());
    navigate("/login");
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
    }
  };

  // const isAdmin = user?.role === 'admin'
  const [hover, setHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <ul>
          <Link to="/">Home </Link>
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
              <li
                onMouseEnter={() => setActiveIndex(0)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <h3>Talento</h3>
                {activeIndex === 0 && (
                  <div>
                    <h5> ¿Por qué BBK Talent Job ?</h5>
                    <p>
                      En la actualidad, BBK ejecuta la mayor obra social del
                      Estado en inversión por habitante, con un presupuesto
                      anual cercano a los 35 millones de euros.
                    </p>
                    <br />
                    <h5>
                      <Link to="/offers">
                        Descubre ofertas (No existe el componente aún)
                      </Link>
                    </h5>

                    {talent ? (
                      <Link to="/profile">Profile</Link>
                    ) : (
                      <Link to="/register">Inscríbete</Link>
                    )}
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => setActiveIndex(1)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <a href="">Organizaciones</a>
                <div>
                  {activeIndex === 1 && (
                    <div>
                      <h5> por q Talent Job pa organizaciones?</h5>

                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quo, totam deserunt. Aut aspernatur assumenda unde
                        explicabo ipsa doloremque perferendis quas! Maxime
                        inventore corrupti aliquam ad. Voluptas odio libero ut
                        est?
                      </p>

                      {/* Habrá una página de empresas ficticias que estan apuntadas 
Pendiente de crear el componente companies(o organizations) */}
                      <Link to="/companies">
                        Explora perfiles(PENDIENTE CREAR PERFILES DE COMPAÑIAS)
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li
                onMouseEnter={() => setActiveIndex(2)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <a href="">Recursos</a>
                <div>
                  {activeIndex === 2 && (
                    <div>
                      <a href="/">Eventos</a>
                      <Link to="/">Guías</Link>
                      <Link to="/">Cursos</Link>
                      <Link to="/">Articulos</Link>
                    </div>
                  )}
                </div>
              </li>
              <li
                onMouseEnter={() => setActiveIndex(3)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <a href="/careerAssistant">Career Assistant</a>
                <div>
                  {activeIndex === 3 && (
                    <div>
                      <a href=""> Revision cv </a>

                      <a href="">Entrevista career</a>
                    </div>
                  )}
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TheHeader;
