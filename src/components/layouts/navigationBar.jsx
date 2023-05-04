import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigation.css";

const NavigationBar = () => {
  const dataUser = JSON.parse(localStorage.getItem("user"));

  return (
    <Navbar variant="dark" className="navbar p-3" sticky="top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-semibold d-flex align-items-center"
        >
          <img
            src="/assets/logo/logo.png"
            alt=""
            width="40px"
            className="me-2"
          />
          VGame
        </Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
          <a href="#allgame" className="nav-link">
            All Games
          </a>
          <Link to="/released" className="nav-link">
            New Games
          </Link>
          <Link to={"/wishlist"} className="nav-link">
            Wishlist
          </Link>
          <div className="rounded ms-4">
            {!dataUser ? (
              <Link
                to={"/login"}
                className="text-white text-decoration-none fw-semibold"
              >
                Login
                <img
                  src="/assets/icon/loginArrow.svg"
                  alt=""
                  width="26px"
                  className="ms-2"
                />
              </Link>
            ) : !dataUser.username ? (
              <Link
                to={"/login"}
                className="text-white text-decoration-none fw-semibold"
              >
                Login
                <img
                  src="/assets/icon/loginArrow.svg"
                  alt=""
                  width="26px"
                  className="ms-2"
                />
              </Link>
            ) : (
              <Link
                to={"/profileUser"}
                className="d-flex align-items-center text-white text-decoration-none"
              >
                <img
                  src="/assets/Profile.svg"
                  alt=""
                  width="37px"
                  className="ms-1"
                />
                <span className="ms-2">{dataUser.username}</span>
              </Link>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
