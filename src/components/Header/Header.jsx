import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Weather from "../Weather/Weather";
import DateTime from "../DateTime/DateTime";
import { Image, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import ToolTip from "../ToolTip/ToolTip";
import favicon from "../../../favicon.ico";

const Header = () => {
  const homePath = window.location.pathname === "/News/all-news";
  const sportsPath = window.location.pathname === "/News/sports-news";
  const sourcesPath = window.location.pathname === "/News/sources";

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="navbar-container">
        <Weather />
        <NavItem>
          <Nav className="me-auto navLinks">
            <Link to="/News/">
              <ToolTip id="t1" title="Back To Home">
                <Image src={favicon} className="brandLogo" />
              </ToolTip>
            </Link>
            <Link
              to="/News/all-news"
              className={`nav-link ${homePath && "active"}`}
            >
              BREAKING-NEWS
            </Link>
            <Link
              to="/News/sports-news"
              className={`nav-link ${sportsPath && "active"}`}
            >
              SPORTS
            </Link>
            <Link
              to="/News/sources"
              className={`nav-link ${sourcesPath && "active"}`}
            >
              SOURCES
            </Link>
          </Nav>
        </NavItem>
        <DateTime />
      </Container>
    </Navbar>
  );
};

export default Header;
