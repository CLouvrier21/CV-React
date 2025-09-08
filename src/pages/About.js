import { Container, Row, Col, ProgressBar } from "react-bootstrap";

export default function About() {
  return (
    <Container id="about" className="py-5">
      <Row>
        <Col md={4}>
          <img src="/john.jpg" alt="John DOE" className="img-fluid rounded" />
        </Col>
        <Col md={8}>
          <h2>À propos de moi</h2>
          <p>Développeur passionné par la création de sites modernes et performants.</p>
          <h5>Compétences</h5>
          <p>HTML</p>
          <ProgressBar now={90} label="90%" />
          <p>CSS</p>
          <ProgressBar now={85} label="85%" />
          <p>JavaScript</p>
          <ProgressBar now={80} label="80%" />
          <p>React</p>
          <ProgressBar now={75} label="75%" />
        </Col>
      </Row>
    </Container>
  );
}