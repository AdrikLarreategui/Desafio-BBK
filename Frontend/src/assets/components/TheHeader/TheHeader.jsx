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
  const { user: talentUser } = useSelector((state) => state.talentAuth);
  const { user: companyUser } = useSelector((state) => state.companyAuth);

  const [text, setText] = useState("");

  const onLogout = (event) => {
    event.preventDefault();
    // (talentUser && logoutTalent()) || companyUser(dispatch(logoutCompany()));

    dispatch(logoutTalent()) && dispatch(logoutCompany());

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
  const isLoggedIn = !!talentUser || !!companyUser;

  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          BBK Talent Job
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {isLoggedIn ? (
              <>
                {talentUser && (
                  <>
                    <Nav.Link as={Link} to="/profile">
                      Perfil
                    </Nav.Link>
                    <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                  <NavDropdown title="Recursos" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/">
                    Eventos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Guías
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Cursos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Artículos
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                title="Career Assistant"
                id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item as={Link} to="/">
                    Revisión de CV gratuita
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Entrevista con Career Assistant
                  </NavDropdown.Item>
                </NavDropdown>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Buscar ofertas"
                    className="mr-sm-2"
                    onKeyUp={handleChange}
                  />
                    </Form>
                  </>
                )}

                {companyUser && (
                  <>
                    <Nav.Link as={Link} to="/company/profile">
                      Perfil de la organización
                    </Nav.Link>
                    <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                    <Nav.Link as={Link} to="/company/createOffer">
                      Crear oferta de trabajo
                    </Nav.Link>
                    <Nav.Link as={Link} to="/company/discover-talents">
                      Descubrir talento disponible
                    </Nav.Link>
                  </>
                )}
              </>
            ) : (
              <>
                <NavDropdown title="Talento" id="navbarScrollingDropdown">
                  <NavDropdown.ItemText>
                    ¿Por qué BBK Talent Job?
                  </NavDropdown.ItemText>
                  <NavDropdown.Item as={Link} to="/offers">
                    Descubre ofertas
                  </NavDropdown.Item>
                  {/* {<NavDropdown.Item >
                  href={user ? "/talent/offers}
                  {</NavDropdown.Item>} */}
                  <NavDropdown.Item
                    as={Link}
                    to={talentUser ? "/profile" : "/talent/register"}
                  >
                    {talentUser ? "Profile" : "Inscríbete"}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Organizaciones" id="navbarScrollingDropdown">
                  <NavDropdown.ItemText>
                    ¿Por qué elegir BBK Talent Job para organizaciones?
                  </NavDropdown.ItemText>
                  <NavDropdown.Item as={Link} to="/companies">
                    Explora perfiles
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={companyUser ? "/profile" : "/company/register"}
                  >
                    {companyUser ? "Profile" : "Inscríbete"}
                  </NavDropdown.Item>

                    </NavDropdown>
                  
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default TheHeader;