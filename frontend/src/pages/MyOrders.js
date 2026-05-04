import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function MyOrders() {

  const [orders,
    setOrders] =
    useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders =
    async () => {

      try {

        const res =
          await axios.get(
            "http://localhost:5000/api/orders"
          );

        setOrders(res.data);

      }

      catch (error) {

        console.log(error);

      }

    };

  return (

    <div className="container mt-4">

      <h2>
        My Orders
      </h2>

      {orders.length === 0 && (
        <h5>
          No Orders Found
        </h5>
      )}

      {orders.map((order) => (

        <div
          key={order._id}
          className="card p-3 mb-3"
        >

          <h5>
            Order ID:
            {order._id}
          </h5>

          <p>
            Status:
            {" "}
            {order.orderStatus}
          </p>

          <p>
            Payment:
            {" "}
            {order.paymentMethod}
          </p>

          <p>
            Total:
            ₹{order.totalAmount}
          </p>

          <hr />

          {order.products.map(
            (item, index) => (

              <div key={index}>

                <strong>
                  {item.name}
                </strong>

                <p>
                  Qty:
                  {item.quantity}
                </p>

              </div>

            )
          )}

        </div>

      ))}

    </div>

  );

}

export default MyOrders;
