import React from "react";

export default function RenderList() {
  const users = [
    { id: 1, name: "Alice", email: "alice@gmail.com" },
    { id: 2, name: "John", email: "john@gmail.com" },
    { id: 3, name: "Mark", email: "mark@gmail.com" },
  ];

  const products = [
    { id: 1, name: "Iphone 15", brand: "Apple" },
    { id: 2, name: "Samsung S23", brand: "Samsung" },
    { id: 3, name: "Xiaomi 14", brand: "Xiaomi" },
  ];

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <li key={user.id}>
          Name: {user.name} - Email: {user.email}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>RenderList</h1>

      <ul>{renderUsers()}</ul>

      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
