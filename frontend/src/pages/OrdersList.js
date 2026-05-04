import { useContext } from "react";

import { OrderContext } from "../context/OrderContext";

function OrdersList() {

  const { orders } = useContext(OrderContext);

  return (
    <div className="container mt-4">

      <h2 className="mb-4 text-center">
        All Orders
      </h2>

      {orders.length === 0 ? (
        <h5 className="text-center">
          No orders placed yet
        </h5>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="card shadow-sm mb-4 p-3"
          >

            <div className="d-flex justify-content-between mb-3">

              <div>
                <strong>Customer:</strong>{" "}
                {order.customerName}
              </div>

              <div>
                <strong>Date:</strong>{" "}
                {order.date}
              </div>

            </div>

            {order.items?.map((item) => (
              <div
                key={item.id}
                className="d-flex gap-3 border rounded p-2 mb-2 align-items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain"
                  }}
                />

                <div className="flex-grow-1">

                  <h5>{item.name}</h5>

                  <p className="mb-1">
                    {item.description}
                  </p>

                  <p className="mb-0">
                    ₹{item.price}
                  </p>

                </div>

                <div>
                  Qty: {item.qty}
                </div>

              </div>
            ))}

            <hr />

            <h5 className="text-end">
              Total: ₹{order.total}
            </h5>

          </div>
        ))
      )}

    </div>
  );
}

export default OrdersList;