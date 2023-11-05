import React from "react";

export default function Cart({ carts, isOpen, onClose, onRemoveProduct }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart) => (
                    <tr key={cart.id}>
                      <td>{cart.id}</td>
                      <td>
                        <img
                          src={cart.img}
                          alt={cart.name}
                          width={70}
                          height={70}
                        />
                      </td>
                      <td>{cart.name}</td>
                      <td>{cart.quantity}</td>
                      <td>{cart.price}</td>
                      <td>{cart.quantity * cart.price}</td>
                      <td>
                        <button
                          onClick={() => onRemoveProduct(cart.id)}
                          className="btn btn-danger"
                        >
                          Xoá
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}
