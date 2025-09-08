import { Container, Row, Col, Card } from "react-bootstrap";

export default function Blog() {
  const articles = Array.from({ length: 6 }, (_, i) => ({ title: `Article ${i+1}`, text: "Introduction à l’article." }));

  return (
    <Container className="py-5">
      <h2>Mon Blog</h2>
      <Row>
        {articles.map((a, i) => (
          <Col md={4} key={i}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{a.title}</Card.Title>
                <Card.Text>{a.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}