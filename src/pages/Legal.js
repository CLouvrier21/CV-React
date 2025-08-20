import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Legal = () => {
  return (
    <section>
      <h2>Mentions légales</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>John DOE - CEF - Paris</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur du site</Accordion.Header>
          <Accordion.Body>Vercel / GitHub Pages</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>Images : pixabay.com</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Legal;