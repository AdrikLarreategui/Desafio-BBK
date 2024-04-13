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
  const { user } = useSelector((state) => state.talentAuth);
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
  // const [hover, setHover] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(false);

  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">BBK Talent Job</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {user ? (
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Buscar ofertas"
                    className="mr-sm-2"
                    onKeyUp={handleChange}
                  />
                </Form>
              </>
            ) : (
              <>
                <NavDropdown title="Talento" id="navbarScrollingDropdown">
                  <NavDropdown.ItemText>
                    ¿Por qué BBK Talent Job?
                  </NavDropdown.ItemText>
                  <NavDropdown.Item href="/offers">
                    Descubre las ofertas disponibles
                  </NavDropdown.Item>
                  {/* {<NavDropdown.Item >
                  href={user ? "/alent/offers}
                  {</NavDropdown.Item>} */}
                  <NavDropdown.Item
                    href={user ? "/profile" : "/talent/register"}
                  >
                    {user ? "Profile" : "Inscríbete"}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Organizaciones"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.ItemText>
                    ¿Por qué elegir BBK Talent Job para oganizaciones?
                  </NavDropdown.ItemText>
                  <NavDropdown.Item href="/companies">
                    Explora los perfiles disponibles
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Recursos" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/">Eventos</NavDropdown.Item>
                  <NavDropdown.Item href="/">Guías</NavDropdown.Item>
                  <NavDropdown.Item href="/">Cursos</NavDropdown.Item>
                  <NavDropdown.Item href="/">Artículos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Career Assistant"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/">Revisión de tu CV</NavDropdown.Item>
                  <NavDropdown.Item href="/">
                    Entrevista con Career Asistant
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default TheHeader;
