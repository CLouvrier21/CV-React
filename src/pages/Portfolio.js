import { Container, Row, Col, Card } from "react-bootstrap";

export default function Portfolio() {
  const projects = [
    { title: "Fresh-Food", img: "/p1.jpg" },
    { title: "Restaurant", img: "/p2.jpg" },
    { title: "Espace bien-être", img: "/p3.jpg" }
  ];

  return (
    <Container className="py-5">
      <h2>Mes Réalisations</h2>
      <Row>
        {projects.map((p, i) => (
          <Col md={4} key={i}>
            <Card className="mb-4">
              <Card.Img variant="top" src={p.img} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>Description du projet.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}