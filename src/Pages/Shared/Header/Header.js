import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
const Header = () => {
  const { user, logOut } = useAuth();
  // react animation
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#800080e" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });
  return (
    <>
      <Navbar
        bg="success"
        variant="danger"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <animated.div style={styles}>
            <Navbar.Brand as={HashLink} to="/home#home">
              TourBd
            </Navbar.Brand>{" "}
          </animated.div>
          <Navbar.Toggle variant="bg-danger" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#package">
              Package
            </Nav.Link>
            {user?.email ? (
              <>
                <NavDropdown title="Pages" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item>
                    <NavLink to="/myTour" className="text-decoration-none">
                      My Tour
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown title="Admin" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item>
                      <NavLink
                        to="/addPackage"
                        className="text-decoration-none"
                      >
                        Add Package
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/manageTour"
                        className="text-decoration-none"
                      >
                        Manage All Order
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <span className="ms-1  "></span>
                <NavDropdown
                  className="text-center"
                  title={
                    !user.photoURL == "" ? (
                      <Image
                        width={25}
                        height={25}
                        src={user.photoURL}
                        roundedCircle
                      />
                    ) : (
                      <i className="fas fa-user"></i>
                    )
                  }
                  id="offcanvasNavbarDropdown"
                >
                  <NavDropdown.Item>
                    <Image src={user.photoURL} alt="" roundedCircle />
                    <NavDropdown.Divider />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <h6>Manage your Account</h6>
                  </NavDropdown.Item>
                  <NavDropdown.ItemText>
                    <p>{user?.displayName}</p>
                  </NavDropdown.ItemText>
                  <NavDropdown.ItemText>
                    <small>{user?.email}</small>
                  </NavDropdown.ItemText>
                  <NavDropdown.Divider />
                  <Button onClick={logOut} variant="light">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </Button>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                <Button variant="light">
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                </Button>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
