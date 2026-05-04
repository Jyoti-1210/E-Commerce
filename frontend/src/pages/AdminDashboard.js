import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { OrderContext } from "../context/OrderContext";

function AdminDashboard() {

  const navigate = useNavigate();

  const { products } = useContext(ProductContext);
  const { cart } = useContext(CartContext);
  const { users = [] } = useContext(AuthContext);
  const { orders = [] } = useContext(OrderContext);

  // ✅ FILTER USERS
  const customers = users.filter(
    (u) => u.role === "customer"
  );

  const sellers = users.filter(
    (u) => u.role === "seller"
  );

  // ✅ TOTAL REVENUE
  const totalRevenue = orders.reduce(
    (acc, order) => acc + (order.total || 0),
    0
  );

  // ✅ RECENT ORDERS
  const recentOrders = orders.slice(-5).reverse();

  return (
    <div className="container mt-4 mb-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold">
            Admin Dashboard
          </h2>

          <p className="text-muted">
            Manage customers, sellers, products and orders
          </p>
        </div>

      </div>

      {/* ================= STATS ================= */}
      <div className="row g-4">

        {/* CUSTOMERS */}
        <div className="col-md-3">
          <div
            className="card shadow-sm border-0 p-4 text-center h-100"
            style={{ borderRadius: "15px" }}
          >

            <h5 className="text-muted">
              Customers
            </h5>

            <h2 className="fw-bold">
              {customers.length}
            </h2>

          </div>
        </div>

        {/* SELLERS */}
        <div className="col-md-3">
          <div
            className="card shadow-sm border-0 p-4 text-center h-100"
            style={{ borderRadius: "15px" }}
          >

            <h5 className="text-muted">
              Sellers
            </h5>

            <h2 className="fw-bold">
              {sellers.length}
            </h2>

          </div>
        </div>

        {/* ORDERS */}
        <div className="col-md-3">
          <div
            className="card shadow-sm border-0 p-4 text-center h-100"
            style={{ borderRadius: "15px" }}
          >

            <h5 className="text-muted">
              Orders
            </h5>

            <h2 className="fw-bold">
              {orders.length}
            </h2>

          </div>
        </div>

        {/* REVENUE */}
        <div className="col-md-3">
          <div
            className="card shadow-sm border-0 p-4 text-center h-100"
            style={{ borderRadius: "15px" }}
          >

            <h5 className="text-muted">
              Revenue
            </h5>

            <h2 className="fw-bold text-success">
              ₹{totalRevenue}
            </h2>

          </div>
        </div>

      </div>

      {/* ================= ACTION BUTTONS ================= */}
      <div className="mt-5 d-flex gap-3 flex-wrap">

        <button
          className="btn btn-primary px-4"
          onClick={() => navigate("/admin/customers")}
        >
          View Customers
        </button>

        <button
          className="btn btn-success px-4"
          onClick={() => navigate("/admin/sellers")}
        >
          View Sellers
        </button>

        <button
          className="btn btn-warning px-4"
          onClick={() => navigate("/admin/orders")}
        >
          View Orders
        </button>

      </div>

      {/* ================= INSIGHTS ================= */}
      <div className="mt-5">

        <div
          className="card shadow-sm border-0 p-4"
          style={{ borderRadius: "15px" }}
        >

          <h4 className="mb-3">
            Platform Insights
          </h4>

          <div className="row">

            <div className="col-md-4">
              <div className="border rounded p-3 text-center">
                <h6>Total Products</h6>
                <h3>{products.length}</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border rounded p-3 text-center">
                <h6>Active Users</h6>
                <h3>{users.length}</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border rounded p-3 text-center">
                <h6>Cart Items</h6>
                <h3>{cart.length}</h3>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================= RECENT ORDERS ================= */}
      <div className="mt-5">

        <div
          className="card shadow-sm border-0 p-4"
          style={{ borderRadius: "15px" }}
        >

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h4>
              Recent Orders
            </h4>

            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() => navigate("/admin/orders")}
            >
              View All
            </button>

          </div>

          {recentOrders.length === 0 ? (

            <p className="text-muted">
              No orders yet
            </p>

          ) : (

            recentOrders.map((order, index) => (

              <div
                key={index}
                className="border rounded p-3 mb-3"
              >

                <div className="d-flex justify-content-between">

                  <div>
                    <strong>
                      {order.customerName || "Customer"}
                    </strong>
                  </div>

                  <div>
                    ₹{order.total}
                  </div>

                </div>

                <small className="text-muted">
                  {order.date}
                </small>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;