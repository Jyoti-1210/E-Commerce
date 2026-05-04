import { useContext, useEffect } from "react";
import { OrderContext } from "../context/OrderContext";

function Orders() {

  const { orders, cancelOrder } = useContext(OrderContext);

  // ✅ SAFE ORDERS
  const safeOrders = Array.isArray(orders) ? orders : [];

  // ✅ DEBUG (helps you verify data is coming)
  useEffect(() => {
    console.log("Orders Data:", orders);
  }, [orders]);

  return (
    <div className="container mt-4">

      <h2 className="mb-4">My Orders</h2>

      {safeOrders.length === 0 ? (
        <p>No orders yet</p>
      ) : (

        safeOrders.map((order) => {

          // ✅ SAFE ITEMS
          const items = Array.isArray(order?.items)
            ? order.items
            : [];

          // ✅ SAFE TOTAL CALCULATION
          const total = items.reduce(
            (sum, item) =>
              sum +
              (Number(item.price) || 0) *
              (item.qty || item.quantity || 1),
            0
          );

          return (
            <div
              key={order.id}
              className="card p-3 mb-4 shadow-sm"
            >

              {/* HEADER */}
              <div className="d-flex justify-content-between mb-2">

                <strong>
                  Order ID: {order.id}
                </strong>

                <span className="text-muted">
                  {order.createdAt}
                </span>

              </div>

              <hr />

              {/* PRODUCTS */}
              {items.length === 0 ? (

                <p>No product details available</p>

              ) : (

                items.map((item, index) => (

                  <div
                    key={item.id || item._id || index}
                    className="d-flex align-items-center border rounded p-2 mb-3"
                  >

                    {/* IMAGE */}
                    <img
                      src={
                        item?.images?.[0] ||
                        "https://via.placeholder.com/100"
                      }
                      alt={item?.name || "product"}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                      }}
                    />

                    {/* DETAILS */}
                    <div className="ms-3 flex-grow-1">

                      <h6 className="fw-bold mb-1">
                        {item?.name || "No Name"}
                      </h6>

                      <p className="mb-1 text-muted">
                        {item?.description || "No description"}
                      </p>

                      <small>
                        Qty:{" "}
                        {item?.qty ||
                          item?.quantity ||
                          1}
                      </small>

                    </div>

                    {/* PRICE */}
                    <strong>
                      ₹{Number(item?.price) || 0}
                    </strong>

                  </div>

                ))

              )}

              {/* ADDRESS */}
              {order?.address && (
                <div className="border p-2 mb-2 bg-light rounded">

                  <strong>Delivery Address:</strong>

                  <p className="mb-1">
                    {order.address?.name} (
                    {order.address?.mobile})
                  </p>

                  <p className="mb-1">
                    {order.address?.address1},{" "}
                    {order.address?.address2}
                  </p>

                  <p className="mb-0">
                    {order.address?.state} -{" "}
                    {order.address?.pincode}
                  </p>

                </div>
              )}

              {/* TOTAL */}
              <div className="d-flex justify-content-between mt-2">

                <strong>
                  Total: ₹{total}
                </strong>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    cancelOrder(order.id)
                  }
                >
                  Cancel Order
                </button>

              </div>

            </div>
          );

        })

      )}

    </div>
  );
}

export default Orders;