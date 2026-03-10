import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const API = "https://worksheet-catalogue.mashupstack.com/products";

  useEffect(() => {
    axios.get(API + "/" + id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const updateProduct = (e) => {
    e.preventDefault();

    axios.put(API + "/" + id, product).then(() => {
      navigate("/");
    });
  };

  return (
    <form onSubmit={updateProduct}>

      <input
        name="name"
        value={product.name}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <input
        name="price"
        value={product.price}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <input
        name="category"
        value={product.category}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <input
        name="quantity"
        value={product.quantity}
        className="form-control mb-2"
        onChange={handleChange}
      />

      <button className="btn btn-primary">
        Update Product
      </button>

    </form>
  );
}

export default EditProduct;