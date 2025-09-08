import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Header.css";


export default function Header() {
return (
<Navbar bg="dark" expand="lg" variant="dark" sticky="top">
<Container>
<Navbar.Brand as={Link} to="/">John DOE</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ms-auto text-uppercase">
<Nav.Link as={Link} to="/">Accueil</Nav.Link>
<Nav.Link as={Link} to="/about">À propos</Nav.Link>
<Nav.Link as={Link} to="/services">Services</Nav.Link>
<Nav.Link as={Link} to="/portfolio">Réalisations</Nav.Link>
<Nav.Link as={Link} to="/blog">Blog</Nav.Link>
<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
<Nav.Link as={Link} to="/legal">Mentions légales</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
);
}