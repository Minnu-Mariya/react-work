import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const navigate = useNavigate();
  const API = "https://worksheet-catalogue.mashupstack.com/products";

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = (e) => {
    e.preventDefault();

    axios.post(API, product).then(() => {
      navigate("/");
    });
  };

  return (
    <form onSubmit={addProduct}>

      <input
        name="name"
        placeholder="Product Name"
        className="form-control mb-2"
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        className="form-control mb-2"
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        className="form-control mb-2"
        onChange={handleChange}
      />

      <input
        name="quantity"
        placeholder="Quantity"
        className="form-control mb-2"
        onChange={handleChange}
      />

      <button className="btn btn-success">
        Add Product
      </button>

    </form>
  );
}

export default AddProduct;