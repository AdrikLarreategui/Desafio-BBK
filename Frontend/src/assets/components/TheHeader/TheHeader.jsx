import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { logoutTalent } from "../../redux/auth/talentAuthSlice";
import { logoutCompany } from "../../redux/auth/companyAuthSlice";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

const logo = "/images/LOGO_BBK_Talent_Job.png";
const defaultProfileImage = "/images/profile-pic.JPG";

import "./TheHeader.css";
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

  const profileNavImage = () => {
    let user;
    if (talentUser) {
      user = talentUser;
    } else if (companyUser) {
      user = companyUser;
    }
    console.log(user.profileImg);
    return user.profileImg ? user.profileImg : defaultProfileImage;
  };

  // const isAdmin = user?.role === 'admin'
  // const [hover, setHover] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(false);
  const isLoggedIn = !!talentUser || !!companyUser;

  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="140"
            className="d-inline-block align-center"
            alt="BBK Talent Job logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-center"
          style={{ width: "90px" }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="navigationBarMain"
        >
          <Nav>
            {isLoggedIn ? (
              <>
                {talentUser && (
                  <>
                    <Nav.Link className="text-center" as={Link} to="/profile">
                      <div
                        className="text-center"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="navImageContainer">
                          <img
                            src={profileNavImage()}
                            className="d-inline-block align-center"
                            alt="profile-img"
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        Profile
                      </div>
                    </Nav.Link>

                    <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                    <NavDropdown
                      className="text-center"
                      title="Recursos"
                      id="navbarScrollingDropdown"
                    >
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
                      className="text-center"
                      title="Career Assistant"
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item as={Link} to="/offers">
                        Descubre ofertas
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/">
                        Revisión CV
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/">
                        Entrevista career
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/offers">
                      Descubre ofertas
                    </Nav.Link>
                  </>
                )}

                {companyUser && (
                  <>
                    <Nav.Link className="text-center" as={Link} to="/profile">
                      <div
                        className="text-center"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="navImageContainer">
                          <img
                            src={profileNavImage()}
                            className="d-inline-block align-center"
                            alt="profile-img"
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        Profile
                      </div>
                    </Nav.Link>
                    <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                    <Nav.Link as={Link} to="/company/createOffer">
                      Post Offer
                    </Nav.Link>
                    <Nav.Link as={Link} to="/company/discover-talents">
                      Descubrir talento
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

                  <NavDropdown.Item
                    as={Link}
                    to={talentUser ? "/profile" : "/talent/register"}
                  >
                    {talentUser ? "Profile" : "Inscríbete"}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Organizaciones"
                  id="navbarScrollingDropdown"
                >
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

                {!isLoggedIn && (
                  <Nav className="ml-auto">
                    <Nav.Link className="navText" as={Link} to="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link className="navText" as={Link} to="/register">
                      Register
                    </Nav.Link>
                  </Nav>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default TheHeader;
