import React from "react";

const Portfolio = () => {
  return (
    <section>
      <h2>Mes réalisations</h2>
      <div className="row">
        {[1, 2, 3].map((proj) => (
          <div key={proj} className="col-md-4 mb-3">
            <div className="card">
              <img src={`https://via.placeholder.com/300x200?text=Projet+${proj}`} className="card-img-top" alt={`Projet ${proj}`} />
              <div className="card-body">
                <h5 className="card-title">Projet {proj}</h5>
                <p className="card-text">Description du projet {proj}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;