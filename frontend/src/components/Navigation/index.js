import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../../contexts/authContext";
import AuthButtons from "./AuthButtons";
import ProfileButton from "./ProfileButton";
import brandLogo from "./assets/brand.png";


const Navigation = () => {
  const { isLoggin } = useContext(AuthContext);

  return (
    <Navbar bg="danger" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className="fw-bold">
            <h3 class="brand">SkillMastery</h3>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!isLoggin ? <AuthButtons /> : <ProfileButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
