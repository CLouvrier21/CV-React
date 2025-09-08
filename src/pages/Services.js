import { Container, Row, Col, Card } from "react-bootstrap";

export default function Services() {
  const services = [
    { title: "Développement Web", text: "Sites modernes et responsives." },
    { title: "Applications React", text: "Apps dynamiques avec React.js." },
    { title: "SEO & Optimisation", text: "Visibilité et performance." }
  ];

  return (
    <Container className="py-5">
      <h2>Mes Services</h2>
      <Row>
        {services.map((s, i) => (
          <Col md={4} key={i}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>{s.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}