import React from "react";

export default function ProductDetails({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-4">
        <h3>{product.name}</h3>
        <img src={product.img} alt={product.name} height={400} />
      </div>
      <div className="col-8">
        <h3>Thông tin sản phẩm</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Màn hình</td>
              <td>{product.display}</td>
            </tr>
            <tr>
              <td>Hệ điều hành</td>
              <td>{product.os}</td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>{product.camera}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{product.ram}</td>
            </tr>
            <tr>
              <td>ROM</td>
              <td>{product.rom}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
