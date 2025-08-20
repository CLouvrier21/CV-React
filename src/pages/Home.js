import React from "react";

const Home = () => {
  return (
    <section className="text-center py-5">
      <div className="bg-dark text-white p-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <h1>Bienvenue sur mon portfolio</h1>
        <h2>Je suis John DOE, développeur web</h2>
        <a href="/about" className="btn btn-primary mt-3">En savoir plus</a>
      </div>
    </section>
  );
};

export default Home;