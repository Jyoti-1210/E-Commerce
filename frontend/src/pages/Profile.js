import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {

  // ✅ FIX: use correct auth variable
  const { currentUser, logout } =
    useContext(AuthContext);

  const [orders, setOrders] =
    useState([]);

  // ✅ LOAD ORDERS
  useEffect(() => {

    const savedOrders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    setOrders(savedOrders);

  }, []);

  return (

    <div className="container mt-4">

      {/* PAGE TITLE */}
      <h1 className="mb-4">
        My Profile
      </h1>

      {/* ========================= */}
      {/* USER DETAILS */}
      {/* ========================= */}

      <div className="card p-4 mb-4">

        <h2 className="mb-4">
          User Details
        </h2>

        <p>
          <strong>Name:</strong>{" "}
          {currentUser?.name || "N/A"}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {currentUser?.email || "N/A"}
        </p>

        <p>
          <strong>Role:</strong>{" "}
          {currentUser?.role || "N/A"}
        </p>

      </div>

      {/* ========================= */}
      {/* MY ORDERS */}
      {/* ========================= */}

      <div className="card p-4 mb-4">

        <h2 className="mb-4">
          My Orders
        </h2>

        {orders.length === 0 ? (

          <p>No orders yet</p>

        ) : (

          orders
            .slice()
            .reverse()
            .map((order) => {

              // ✅ FIX: support both structures
              const products =
                order.products ||
                order.items ||
                [];

              // ✅ SAFE TOTAL
              const total =
                order.total ||
                products.reduce(
                  (sum, p) =>
                    sum +
                    p.price *
                      (p.qty ||
                        p.quantity ||
                        1),
                  0
                );

              return (

                <div
                  key={order.id}
                  className="border rounded p-3 mb-4"
                >

                  {/* ORDER ID */}
                  <h5 className="fw-bold">
                    Order ID: {order.id}
                  </h5>

                  {/* DATE */}
                  <p className="text-muted">
                    {new Date(
                      order.createdAt ||
                      order.date
                    ).toLocaleString()}
                  </p>

                  {/* DELIVERY ADDRESS */}
                  {order.address && (

                    <div className="mb-3">

                      <h6 className="fw-bold">
                        Delivery Address
                      </h6>

                      <p className="mb-1">
                        <strong>
                          {order.address.name}
                        </strong>{" "}
                        ({order.address.mobile})
                      </p>

                      <p className="mb-1">
                        {order.address.address1},{" "}
                        {order.address.address2}
                      </p>

                      <p className="mb-0">
                        {order.address.state} -{" "}
                        {order.address.pincode}
                      </p>

                    </div>

                  )}

                  {/* PRODUCTS */}
                  <h6 className="fw-bold mb-3">
                    Ordered Products
                  </h6>

                  {products.length > 0 ? (

                    products.map(
                      (product, index) => (

                        <div
                          key={index}
                          className="d-flex gap-3 border rounded p-2 mb-3"
                        >

                          {/* IMAGE */}
                          <img
                            src={
                              product?.images?.[0] ||
                              "https://via.placeholder.com/100"
                            }
                            alt={product.name}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                          />

                          {/* DETAILS */}
                          <div>

                            <h6 className="fw-bold">
                              {product.name}
                            </h6>

                            <p className="mb-1 text-muted">
                              {product.description}
                            </p>

                            <p className="mb-1">
                              Brand: {product.brand}
                            </p>

                            <p className="mb-1">
                              Quantity:{" "}
                              {product.qty ||
                                product.quantity ||
                                1}
                            </p>

                            <h6 className="text-success">
                              ₹{product.price}
                            </h6>

                          </div>

                        </div>

                      )
                    )

                  ) : (

                    <p>
                      No product details available
                    </p>

                  )}

                  {/* TOTAL */}
                  <div className="text-end fw-bold fs-5">
                    Total: ₹{total}
                  </div>

                </div>

              );

            })

        )}

      </div>

      {/* LOGOUT BUTTON */}
      <button
        className="btn btn-danger"
        onClick={() => {

          localStorage.removeItem("user");

          logout();

          window.location.href = "/login";

        }}
      >
        Logout
      </button>

    </div>

  );
}

export default Profile;