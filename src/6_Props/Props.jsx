import React from "react";
import Profile from "./Profile";
import Card from "./Card";
import Button from "./Button";
import Product from "./Product";

export default function Props() {
  const products = [
    { id: 1, name: "Iphone 15", brand: "Apple", price: 1500 },
    { id: 2, name: "Samsung S23", brand: "Samsung", price: 1300 },
    { id: 3, name: "Xiaomi 14", brand: "Xiaomi", price: 900 },
  ];

  const handleClick = () => {
    alert("Clicked");
  };

  const handleSelectProduct = (product) => {
    alert(product.name);
  };

  return (
    <div>
      <h1>Props</h1>

      <Profile name="Bob" email="bob@gmail.com" age={18} isAdmin />
      <Profile name="John" email="john@gmail.com" age={20} />

      <Card
        title="Welcome"
        footer={<button className="btn btn-primary">Send Message</button>}
      >
        <h1>Hello React</h1>
      </Card>

      <Card
        title="Profile"
        footer={<button className="btn btn-success">Details</button>}
      >
        <Profile name="Alice" email="alice@gmail.com" age={18} />
      </Card>

      <hr />

      <Button variant="primary" onClick={handleClick}>
        Submit
      </Button>

      <hr />

      {products.map((product) => (
        <Product
          key={product.id}
          data={product}
          onSelect={handleSelectProduct}
        />
      ))}
    </div>
  );
}
