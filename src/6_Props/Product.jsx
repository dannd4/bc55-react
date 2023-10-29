import React from "react";

export default function Product({ data, onSelect }) {
  return (
    <div className="alert alert-primary">
      <h3>Name: {data.name}</h3>
      <p>Brand: {data.brand}</p>
      <p>Price: {data.price}</p>
      <button className="btn btn-success" onClick={() => onSelect(data)}>Select</button>
    </div>
  );
}
