import React from "react";

const Blog = () => {
  return (
    <section>
      <h2>Blog</h2>
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((a) => (
          <div key={a} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Article {a}</h5>
                <p className="card-text">Introduction à l'article {a}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
