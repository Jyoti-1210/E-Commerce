import {
  useContext,
  useState,
  useEffect
} from "react";

import {
  ProductContext
} from "../context/ProductContext";

import {
  OrderContext
} from "../context/OrderContext";

import {
  AuthContext
} from "../context/AuthContext";

import {
  useNavigate
} from "react-router-dom";

function SellerDashboard() {

  const navigate = useNavigate();

  // ✅ AUTH
  const { currentUser } = useContext(AuthContext);

  // ✅ PROTECT ROUTE
  useEffect(() => {
    if (!currentUser || currentUser.role !== "seller") {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // ✅ SAFE PRODUCTS
  const {
    products = [],
    addProduct,
    removeProduct,
    editProduct
  } = useContext(ProductContext);

  // ✅ SAFE ORDERS
  const { orders = [] } = useContext(OrderContext);

  const [editingId, setEditingId] = useState(null);

  // ✅ ADD PRODUCT FORM
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    images: [],
  });

  // ✅ EDIT FORM
  const [editForm, setEditForm] = useState({
    _id: "",
    name: "",
    price: "",
    category: "",
    description: "",
    stock: true,
  });

  // ✅ ADD PRODUCT
  const handleAdd = async (e) => {
    e.preventDefault();

    await addProduct({
      ...form,
      price: Number(form.price),
      stock: true,
    });

    alert("Product Added");

    setForm({
      name: "",
      price: "",
      category: "",
      description: "",
      images: [],
    });
  };

  // ✅ START EDIT
  const handleEdit = (product) => {
    setEditingId(product._id);
    setEditForm({ ...product });
  };

  // ✅ SAVE EDIT
  const handleSave = async () => {
    await editProduct(editForm._id, {
      ...editForm,
      price: Number(editForm.price),
    });

    alert("Product Updated");
    setEditingId(null);
  };

  // ✅ SAFE REVENUE FIX
  const revenue = (orders || []).reduce((total, order) => {

    const items = order?.items || [];

    const orderTotal = items.reduce((sum, item) => {
      return sum + (item.price || 0) * (item.qty || 1);
    }, 0);

    return total + orderTotal;

  }, 0);

  return (

    <div className="container mt-4">

      <h2>Seller Dashboard</h2>

      {/* ✅ USER INFO */}
      <div className="alert alert-light border">
        Logged in as:
        <strong> {currentUser?.name}</strong>
      </div>

      {/* ✅ REVENUE BUTTON */}
      <button
        className="btn btn-dark mb-3"
        onClick={() => navigate("/revenue")}
      >
        View Revenue Report
      </button>

      {/* ✅ REVENUE CARD */}
      <div className="card p-3 mb-4 bg-light">
        <h4>Total Revenue: ₹{revenue}</h4>
      </div>

      {/* ✅ ADD PRODUCT */}
      <div className="card p-3 mb-4">

        <h4>Add Product</h4>

        <form onSubmit={handleAdd}>

          <input
            className="form-control mb-2"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Price"
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            required
          />

          {/* CATEGORY */}
          <select
            className="form-control mb-2"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            required
          >

            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="mobiles">Mobiles</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
            <option value="appliances">Appliances</option>
            <option value="toys">Toys</option>
            <option value="food">Food & Health</option>
            <option value="auto">Auto & Accessories</option>
            <option value="sports">Sports</option>
            <option value="books">Books & Stationery</option>
            <option value="furniture">Furniture</option>

          </select>

          {/* IMAGE */}
          <input
            type="file"
            multiple
            className="form-control mb-2"
            onChange={(e) =>
              setForm({
                ...form,
                images: [...e.target.files],
              })
            }
          />

          <textarea
            className="form-control mb-2"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <button className="btn btn-success">
            Add Product
          </button>

        </form>

      </div>

      {/* ✅ PRODUCT LIST */}
      <div className="card p-3">

        <h4>Your Products</h4>

        {(products || []).map((p) => (

          <div
            key={p._id}
            className="border p-3 mb-3 rounded"
          >

            {editingId !== p._id ? (

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-flex gap-3">

                  <img
                    src={p.images?.[0]}
                    alt={p.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain"
                    }}
                  />

                  <div>

                    <strong>{p.name}</strong><br />

                    ₹{p.price}<br />

                    <span className="badge bg-primary">
                      {p.category}
                    </span><br />

                    <span
                      className={`badge mt-2 ${
                        p.stock ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {p.stock ? "In Stock" : "Out of Stock"}
                    </span>

                    <p className="mt-2 mb-0">
                      {p.description}
                    </p>

                  </div>

                </div>

                <div>

                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(p)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(p._id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            ) : (

              <div>

                <input
                  className="form-control mb-2"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      name: e.target.value
                    })
                  }
                />

                <input
                  className="form-control mb-2"
                  type="number"
                  value={editForm.price}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      price: e.target.value
                    })
                  }
                />

                <select
                  className="form-control mb-2"
                  value={editForm.category}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      category: e.target.value
                    })
                  }
                >
                  <option value="electronics">Electronics</option>
                  <option value="mobiles">Mobiles</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home</option>
                  <option value="beauty">Beauty</option>
                  <option value="appliances">Appliances</option>
                  <option value="toys">Toys</option>
                  <option value="food">Food & Health</option>
                  <option value="auto">Auto & Accessories</option>
                  <option value="sports">Sports</option>
                  <option value="books">Books & Stationery</option>
                  <option value="furniture">Furniture</option>
                </select>

                <textarea
                  className="form-control mb-2"
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      description: e.target.value
                    })
                  }
                />

                <div className="d-flex gap-2">

                  <button
                    className="btn btn-success"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>

                  <button
                    className="btn btn-secondary"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>

  );

}

export default SellerDashboard;