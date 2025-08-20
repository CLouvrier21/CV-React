import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-4 mt-5">
      <div className="container">
        <div className="row text-start">
          <div className="col-md-3">
            <h6>John DOE</h6>
            <p>123 rue du Code<br />75000 Paris<br />06 12 34 56 78</p>
            <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer">GitHub</a><br />
            <a href="https://linkedin.com/in/john-doe-dev" target="_blank" rel="noreferrer">LinkedIn</a><br />
            <a href="https://twitter.com/john_doe" target="_blank" rel="noreferrer">Twitter</a>
          </div>
          <div className="col-md-3">
            <h6>Navigation</h6>
            <p><a href="/about">À propos</a><br /><a href="/services">Services</a><br /><a href="/contact">Contact</a></p>
          </div>
          <div className="col-md-3">
            <h6>Réalisations</h6>
            <p><a href="/portfolio">Projet 1</a><br /><a href="/portfolio">Projet 2</a></p>
          </div>
          <div className="col-md-3">
            <h6>Articles</h6>
            <p><a href="/blog">Article 1</a><br /><a href="/blog">Article 2</a></p>
          </div>
        </div>
        <p className="mt-3">© 2025 John DOE — Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;