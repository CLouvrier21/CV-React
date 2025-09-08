import "../styles/Home.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import GitHubProfile from "../components/GithubProfile.js";

export default function Home() {
  return (
    <>
      <section className="home d-flex flex-column justify-content-center align-items-center text-light">
        <div className="home-content">
          <h1>Bienvenue sur mon Portfolio</h1>
          <h2>Je suis John DOE, développeur web</h2>
          <a href="#about" className="btn btn-primary mt-3">
            En savoir plus
          </a>
        </div>
      </section>

      <section>
        <Container id="about" className="py-5">
          <Row>
            <Col md={4}>
              <img
                src="/john.jpg"
                alt="John DOE"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={8}>
              <h2>À propos de moi</h2>
              <p>
                Développeur passionné par la création de sites modernes et
                performants.
              </p>
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
          {}
          <GitHubProfile username="github-john-doe" />
        </Container>
      </section>
    </>
  );
}