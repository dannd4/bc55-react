import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, onSelect, onAddToCart }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-4">
          <ProductItem
            product={product}
            onSelect={onSelect}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </div>
  );
}
