import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

function Cart() {

  const {
    cart,
    removeFromCart,
    addToCart,
    decreaseQty,
    moveToWishlist
  } = useContext(CartContext);

  const { addToWishlist } =
    useContext(WishlistContext);

  const navigate = useNavigate();

  const totalMRP = cart.reduce(
    (acc, i) =>
      acc + i.price * i.qty * 1.3,
    0
  );

  const total = cart.reduce(
    (acc, i) =>
      acc + i.price * i.qty,
    0
  );

  const discount =
    totalMRP - total;

  return (

    <div className="container mt-4">

      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-md-8">

          {cart.length === 0 && (

            <h4 className="text-center">
              Your cart is empty
            </h4>

          )}

          {cart.map((item) => (

            <div
              key={item._id}
              className="card mb-3 p-3"
            >

              <div className="d-flex">

                {/* IMAGE */}
                <img
                  src={
                    item.images &&
                    item.images.length > 0
                      ? item.images[0]
                      : "https://via.placeholder.com/120"
                  }
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain"
                  }}
                />

                {/* DETAILS */}
                <div className="ms-3 w-100">

                  <h5>{item.name}</h5>

                  <div className="mt-1">

                    <span className="text-success fw-bold">
                      ₹{item.price}
                    </span>

                  </div>

                  {/* QUANTITY CONTROLS */}
                  <div className="mt-3 d-flex align-items-center gap-2">

                    <span className="me-2">
                      Qty:
                    </span>

                    {/* ➖ */}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        decreaseQty(item._id)
                      }
                    >
                      -
                    </button>

                    {/* QTY */}
                    <span className="fw-bold">
                      {item.qty}
                    </span>

                    {/* ➕ */}
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        addToCart(item)
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* ACTIONS */}
                  <div className="mt-3 d-flex gap-3">

                    {/* SAVE */}
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        moveToWishlist(
                          item,
                          addToWishlist
                        )
                      }
                    >
                      Save ❤️
                    </button>

                    {/* REMOVE */}
                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT PANEL */}
        <div className="col-md-4">

          <div className="card p-3">

            <h5>PRICE DETAILS</h5>

            <div className="d-flex justify-content-between">

              <span>MRP</span>

              <span>
                ₹{Math.floor(totalMRP)}
              </span>

            </div>

            <div className="d-flex justify-content-between text-success">

              <span>Discount</span>

              <span>
                -₹{Math.floor(discount)}
              </span>

            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">

              <span>Total</span>

              <span>
                ₹{total}
              </span>

            </div>

            {/* CHECKOUT BUTTON */}
            <button
              className="btn btn-warning w-100 mt-3"
              onClick={() => {

                if (cart.length === 0) {

                  alert("Cart is empty");

                  return;

                }

                const savedAddress =
                  localStorage.getItem(
                    "address"
                  );

                if (savedAddress) {

                  navigate("/payment");

                } else {

                  navigate("/checkout");

                }

              }}
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Cart;