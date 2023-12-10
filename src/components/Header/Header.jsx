import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Weather from "../Weather/Weather";
import DateTime from "../DateTime/DateTime";
import { Image, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import ToolTip from "../ToolTip/ToolTip";

const Header = () => {
  const homePath = window.location.pathname === "/all-news";
  const techPath = window.location.pathname === "/business-news";
  const sourcesPath = window.location.pathname === "/sources";

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="navbar-container">
        <Weather />
        <NavItem>
          <Nav className="me-auto navLinks">
            <Link to="/">
              <ToolTip id="t1" title="Back To Home">
                <Image src="../../../favicon.ico" className="brandLogo" />
              </ToolTip>
            </Link>
            <Nav.Link href="/all-news" className={homePath && "active"}>
              ALL-NEWS
            </Nav.Link>
            <Nav.Link href="/business-news" className={techPath && "active"}>
              BUSINESS_NEWS
            </Nav.Link>
            <Nav.Link href="/sources" className={sourcesPath && "active"}>
              SOURCES
            </Nav.Link>
          </Nav>
        </NavItem>
        <DateTime />
      </Container>
    </Navbar>
  );
};

export default Header;
