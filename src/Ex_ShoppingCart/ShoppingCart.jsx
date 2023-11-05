import { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

export default function ShoppingCart() {
  // state quản lý trạng thái sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);
  // state quản lý trạng thái ẩn/hiện của modal giỏ hàng
  const [isOpen, setIsOpen] = useState(false);
  // state quản lý danh sách sản phẩm được thêm vào giỏ hàng
  const [carts, setCarts] = useState([]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const index = carts.findIndex((cart) => cart.id === product.id);

    if (index !== -1) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      const newCarts = [...carts];
      newCarts[index].quantity++;
      setCarts(newCarts);
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProductFromCart = (productId) => {
    const newCarts = carts.filter((cart) => cart.id !== productId);
    setCarts(newCarts);
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Bài tập giỏ hàng</h1>

      <div className="text-end mb-2">
        <button onClick={() => setIsOpen(true)} className="btn btn-danger">
          Giỏ Hàng
        </button>
      </div>

      <ProductList
        products={data}
        onSelect={handleSelectProduct}
        onAddToCart={handleAddToCart}
      />

      <hr />

      <ProductDetails product={selectedProduct} />

      <Cart
        carts={carts}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onRemoveProduct={handleRemoveProductFromCart}
      />
    </div>
  );
}
