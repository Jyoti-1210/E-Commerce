import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";

function AddProduct() {

  const { addProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      name,
      price: Number(price),
      seller: user.email
    });

    setName("");
    setPrice("");
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Price"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;