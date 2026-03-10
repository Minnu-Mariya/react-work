import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const API = "https://worksheet-catalogue.mashupstack.com/products";

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get(API).then((res) => {
      setProducts(res.data);
    });
  };

  const deleteProduct = (id) => {
    axios.delete(API + "/" + id).then(() => {
      getProducts();
    });
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Link to="/add" className="btn btn-primary mb-3">
        Add Product
      </Link>

      <input
        type="text"
        placeholder="Search product..."
        className="form-control mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>

              <td>
                <Link
                  to={`/edit/${item.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ProductList;