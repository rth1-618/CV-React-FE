import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import logo from "../../images/grapple from srs1.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    // localStorage.removeItem("userInfo");
    dispatch(logout());
    history.push("/");
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid="md">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                className="d-inline-block align-top img-thumbnail"
                alt="logo"
                width={70}
                height={70}
              />

              <h2 className="d-inline-block align-center m-2 display-5">
                Grapple
              </h2>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="d-flex">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav className="m-auto">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Nav>
                <Nav.Link>
                  <Link
                    to="/myachs"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    Home
                  </Link>
                </Nav.Link>

                <NavDropdown title="User" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
