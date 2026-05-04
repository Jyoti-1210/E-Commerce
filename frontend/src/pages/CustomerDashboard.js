import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function CustomerDashboard() {

  // ✅ FIX: use correct variable
  const { currentUser } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  // ✅ LOAD ORDERS
  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <div className="container mt-4">

      {/* TITLE */}
      <h2 className="mb-4">Customer Dashboard</h2>

      {/* USER INFO */}
      <div className="card p-4 mb-4">

        <h4>User Details</h4>

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

      {/* ORDERS */}
      <div className="card p-4">

        <h4 className="mb-3">My Orders</h4>

        {orders.length === 0 ? (

          <p>No orders yet</p>

        ) : (

          orders
            .slice()
            .reverse()
            .map((order) => {

              // ✅ FIX: support both old + new structure
              const products =
                order.products ||
                order.items ||
                [];

              return (
                <div
                  key={order.id}
                  className="border rounded p-3 mb-3"
                >

                  <h5>Order ID: {order.id}</h5>

                  <p>
                    {new Date(
                      order.createdAt || order.date
                    ).toLocaleString()}
                  </p>

                  {/* PRODUCTS */}
                  {products.length > 0 ? (

                    products.map((product, index) => (

                      <div
                        key={index}
                        className="d-flex gap-3 mb-3"
                      >

                        <img
                          src={
                            product?.images?.[0] ||
                            "https://via.placeholder.com/80"
                          }
                          alt={product.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />

                        <div>

                          <h6>{product.name}</h6>

                          <p className="mb-1">
                            {product.description}
                          </p>

                          <p className="mb-1">
                            Qty:{" "}
                            {product.qty ||
                              product.quantity ||
                              1}
                          </p>

                          <strong>
                            ₹{product.price}
                          </strong>

                        </div>

                      </div>

                    ))

                  ) : (

                    <p>No products found</p>

                  )}

                  {/* TOTAL */}
                  <h5 className="text-end">
                    Total: ₹
                    {order.total ||
                      products.reduce(
                        (sum, p) =>
                          sum +
                          p.price *
                            (p.qty ||
                              p.quantity ||
                              1),
                        0
                      )}
                  </h5>

                </div>
              );
            })

        )}

      </div>

    </div>
  );
}

export default CustomerDashboard;