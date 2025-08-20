import React from "react";

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Téléphone</label>
          <input type="tel" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Sujet</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;