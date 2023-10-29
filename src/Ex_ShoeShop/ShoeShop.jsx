import React from "react";
import data from "./data.json";
import ShoeItem from "./ShoeItem";

export default function ShoeShop() {
  return (
    <div className="container">
      <h1 className="text-center">Shoe Shop</h1>

      <div className="row">
        {data.map((product) => (
          <div key={product.id} className="col-4">
            <ShoeItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
