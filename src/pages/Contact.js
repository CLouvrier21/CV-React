import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section style={{backgroundImage:"url('/bg-contact.jpg')", backgroundSize:"cover", position:"relative"}}>
      <div style={{backgroundColor:"rgba(30,30,30,0.5)", position:"absolute", top:0, left:0, width:"100%", height:"100%"}}></div>
      <Container style={{position:"relative", zIndex:2}} className="py-5 text-light">
        <Row>
          <Col md={6}>
            <h2>Contactez-moi</h2>
            <Form>
              <Form.Group className="mb-3"><Form.Control type="text" placeholder="Nom" required /></Form.Group>
              <Form.Group className="mb-3"><Form.Control type="email" placeholder="Email" required /></Form.Group>
              <Form.Group className="mb-3"><Form.Control type="tel" placeholder="Téléphone" required /></Form.Group>
              <Form.Group className="mb-3"><Form.Control type="text" placeholder="Sujet" required /></Form.Group>
              <Form.Group className="mb-3"><Form.Control as="textarea" rows={4} placeholder="Message" required /></Form.Group>
              <Button type="submit">Envoyer</Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Mes coordonnées</h3>
            <p>123 rue Exemple, 75000 Paris</p>
            <p>Tél : +33 6 12 34 56 78</p>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999184153888!2d2.292292615674222!3d48.85837307928765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fef6b63fbb7%3A0x123456789abcdef!2sParis!5e0!3m2!1sfr!2sfr!4v1630000000000"
              width="100%"
              height="250"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}