import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { mainSvg } from "./assets";


const MainSection = () => {
  return (
    <section className="bg-light p-5" class="main-body">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col className="text-center me-5">
            <h2 className="mb-4" class="hero-heading">
            Unleash Your Potential with <span class="spans">SkillMastery</span>
            </h2>
            <p className="lead">
            Experience education reimagined, where learning becomes an immersive and interactive adventure, empowering you every step of the way.
            </p>
            <LinkContainer to="/register">
              <Button>Get Started</Button>
            </LinkContainer>
          </Col>
          <Col className="d-none d-md-block">
            <Image fluid src={mainSvg} alt="Online Education | Classroom App" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainSection;
