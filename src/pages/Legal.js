import { Container, Accordion } from "react-bootstrap";

export default function Legal() {
  return (
    <Container className="py-5">
      <h2>Mentions légales</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>John DOE — Développeur web</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur du site</Accordion.Header>
          <Accordion.Body>GitHub Pages</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>Images libres de droits provenant de <a href="https://pixabay.com" target="_blank" rel="noreferrer noopener">Pixabay</a>.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <meta name="robots" content="noindex" />
    </Container>
  );
}