import React, { useState, useEffect } from "react";
import { vasos as data } from "../vasos";

function Cards() {
  const [vasos, setVasos] = useState([]);

  useEffect(() => {
    setVasos(data);
  }, []);

  return (
    <div className="row">
      {vasos.map((vaso) => (
        <div className="card mb-3" style={{ maxWidth: "540px" }} key={vaso._id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={vaso.image}
                className="img-fluid rounded-start"
                alt={vaso.title}
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"><strong>{vaso.title}</strong></h5>
                <p className="card-text">{vaso.description}</p>
                <p className="card-text">
                <strong className="text-body-secondary">Tradicional: ${vaso.price[0].tradicional}</strong>
                <strong className="text-body-secondary">Sin lo: ${vaso.price[0].tradicional}</strong>
                <strong className="text-body-secondary">Tradicional: ${vaso.price[0].tradicional}</strong>
              </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
