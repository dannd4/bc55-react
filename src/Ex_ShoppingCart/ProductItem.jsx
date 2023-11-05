import React from "react";

export default function ProductItem({ product, onSelect, onAddToCart }) {
  return (
    <div className="card">
      <img
        className="card-img"
        src={product.img}
        alt={product.name}
        height={400}
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button onClick={() => onSelect(product)} className="btn btn-success">
          Xem Chi Tiết
        </button>
        <button
          onClick={() => onAddToCart(product)}
          className="btn btn-danger ms-2"
        >
          Thêm Giỏ Hàng
        </button>
      </div>
    </div>
  );
}
