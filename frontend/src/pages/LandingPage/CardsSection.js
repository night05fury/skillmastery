import {
  giveNote,
  lectureNotes,
  shareYourHomework,
  downloadExcel,
} from "./assets";
import MyCard from "./Card";
import { Container, Row } from "react-bootstrap";

const CardsSection = () => {
  return (
    <Container className="p-2">
      <Row className="g-4 mt-3 mx-3" xs={1} md={2} sm={2} lg={4}>
        <MyCard
          img={shareYourHomework}
          title="Personalized Learning Paths"
          text="Customized learning paths designed to match your skills, interests, and learning goals."
        />
        <MyCard
          img={downloadExcel}
          title="Automated Assessments and Feedback"
          text="Take automated assessments, receive instant feedback, and refine your skills to excel in your studies."
        />
        <MyCard
          img={giveNote}
          title="Certification and Achievement Badges"
          text="Earn completion certificates and showcase achievement badges to demonstrate your expertise."
        />
        <MyCard
          img={lectureNotes}
          title="Collaborative Discussion Forums"
          text="Join vibrant discussion forums to collaborate with fellow learners, share insights, and grow together."
        />
      </Row>
    </Container>
  );
};

export default CardsSection;
