import React from "react";

export default function LaptopItem() {
  return (
    <div className="card bg-light" style={{ width: 300 }}>
      <img
        className="card-img-top"
        src="./img/lt_macbook.png"
        alt="Card image"
        style={{ maxWidth: "100%", height: 250 }}
      />
      <div className="card-body text-center">
        <h4 className="card-title text-center">MACBOOK</h4>
        <p className="card-text">
          The MacBook is a brand of notebook computers manufactured by Apple Inc
        </p>
        <a href="#" className="btn btn-primary">
          Detail
        </a>
        <a href="#" className="btn btn-danger">
          Cart
        </a>
      </div>
    </div>
  );
}
