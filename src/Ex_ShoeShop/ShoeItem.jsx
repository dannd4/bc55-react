import React from "react";

export default function ShoeItem({ product }) {
  return (
    <div className="card">
      <img className="card-img" src={product.image} alt={product.name} />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button className="btn btn-dark">Add to cart</button>
      </div>
    </div>
  );
}
