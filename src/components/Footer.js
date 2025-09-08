import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <h5>John DOE</h5>
            <p>
              123 rue Exemple<br />
              75000 Paris<br />
              +33 6 12 34 56 78
            </p>
            <p>
              <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer noopener">GitHub</a> |
              <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"> Twitter</a> |
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"> LinkedIn</a>
            </p>
          </Col>
          <Col md={3}>
            <h6>Navigation</h6>
            <ul className="footer-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Dernières réalisations</h6>
            <ul className="footer-links">
              <li>Projet 1</li>
              <li>Projet 2</li>
              <li>Projet 3</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Derniers articles</h6>
            <ul className="footer-links">
              <li>Article 1</li>
              <li>Article 2</li>
              <li>Article 3</li>
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          © {new Date().getFullYear()} John DOE — 
          <a href="#top" className="back-to-top">Haut de page</a>
        </div>
      </Container>
    </footer>
  );
}
