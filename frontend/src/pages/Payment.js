import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import { AddressContext } from "../context/AddressContext";
import { useNavigate } from "react-router-dom";

function Payment() {

  const { cart, setCart } = useContext(CartContext);
  const { placeOrder } = useContext(OrderContext);
  const { selectedAddress } = useContext(AddressContext);

  const navigate = useNavigate();

  const [method, setMethod] = useState("card");

  // ❌ BLOCK IF NO ADDRESS
  if (!selectedAddress) {
    alert("Please select a delivery address first!");
    navigate("/checkout");
    return null;
  }

  // ✅ SAFE CART
  const safeCart = Array.isArray(cart) ? cart : [];

  // ✅ NORMALIZE CART ITEMS (🔥 IMPORTANT FIX)
  const normalizedCart = safeCart.map((item) => ({
    id: item.id || Date.now() + Math.random(),
    name: item.name || "Product",
    price: Number(item.price) || 0,
    qty: item.qty || item.quantity || 1,
    description: item.description || "",
    brand: item.brand || "",
    images: Array.isArray(item.images) ? item.images : [],
  }));

  // ✅ CALCULATIONS
  const totalMRP = normalizedCart.reduce(
    (acc, i) => acc + i.price * i.qty * 1.3,
    0
  );

  const total = normalizedCart.reduce(
    (acc, i) => acc + i.price * i.qty,
    0
  );

  const discount = totalMRP - total;
  const fees = 7;

  // ✅ PLACE ORDER
  const handlePayment = () => {

    if (normalizedCart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    // ✅ FORCE CLEAN STRUCTURE (🔥 CRITICAL FIX)
    const orderData = {
      items: normalizedCart,              // ALWAYS ARRAY ✅
      total: total + fees,
      address: selectedAddress || {},
      paymentMethod: method,
      createdAt: new Date().toISOString(),
    };

    placeOrder(orderData);

    // ✅ CLEAR CART
    setCart([]);

    alert("Payment Successful 🎉");

    navigate("/orders");
  };

  return (

    <div className="container mt-4">

      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-md-8">

          <div className="card p-3 shadow-sm">

            <h4>Complete Payment</h4>

            {/* ✅ ADDRESS */}
            <div className="border p-3 mb-3 bg-light rounded">

              <h6 className="fw-bold">Deliver To:</h6>

              <p className="mb-1">
                <strong>{selectedAddress.name}</strong> ({selectedAddress.mobile})
              </p>

              <p className="mb-1">
                {selectedAddress.address1}
                {selectedAddress.address2 && `, ${selectedAddress.address2}`}
              </p>

              <p className="mb-0">
                {selectedAddress.state} - {selectedAddress.pincode}
              </p>

            </div>

            {/* ✅ PRODUCTS */}
            <div className="mb-4">

              <h5 className="fw-bold mb-3">Order Summary</h5>

              {normalizedCart.map((item) => (

                <div
                  key={item.id}
                  className="d-flex align-items-center border rounded p-2 mb-3"
                >

                  <img
                    src={item.images?.[0] || "https://via.placeholder.com/120"}
                    alt={item.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="ms-3 flex-grow-1">

                    <h6 className="fw-bold">{item.name}</h6>

                    <p className="text-muted mb-1">
                      {item.description}
                    </p>

                    <p className="mb-1">
                      Brand: {item.brand}
                    </p>

                    <p className="mb-1">
                      Quantity: {item.qty}
                    </p>

                  </div>

                  <h5 className="fw-bold">
                    ₹{item.price}
                  </h5>

                </div>

              ))}

            </div>

            {/* PAYMENT OPTIONS */}
            <div className="mt-3">

              <div
                className={`p-2 mb-2 border rounded ${method === "card" ? "bg-light" : ""}`}
                onClick={() => setMethod("card")}
                style={{ cursor: "pointer" }}
              >
                💳 Credit / Debit Card
              </div>

              <div
                className={`p-2 mb-2 border rounded ${method === "upi" ? "bg-light" : ""}`}
                onClick={() => setMethod("upi")}
                style={{ cursor: "pointer" }}
              >
                📱 UPI
              </div>

              <div
                className={`p-2 mb-2 border rounded ${method === "cod" ? "bg-light" : ""}`}
                onClick={() => setMethod("cod")}
                style={{ cursor: "pointer" }}
              >
                🚚 Cash on Delivery
              </div>

            </div>

            {/* CARD FORM */}
            {method === "card" && (
              <div className="mt-3">
                <input className="form-control mb-2" placeholder="Card Number" />
                <div className="d-flex gap-2">
                  <input className="form-control" placeholder="MM / YY" />
                  <input className="form-control" placeholder="CVV" />
                </div>
              </div>
            )}

            {/* UPI */}
            {method === "upi" && (
              <input className="form-control mt-3" placeholder="Enter UPI ID" />
            )}

            {/* PAY BUTTON */}
            <button
              className="btn btn-warning w-100 mt-4"
              onClick={handlePayment}
            >
              Pay ₹{Math.floor(total + fees)}
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-4">

          <div className="card p-3 shadow-sm">

            <h5>Price Details</h5>

            <div className="d-flex justify-content-between">
              <span>MRP</span>
              <span>₹{Math.floor(totalMRP)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Fees</span>
              <span>₹{fees}</span>
            </div>

            <div className="d-flex justify-content-between text-success">
              <span>Discount</span>
              <span>-₹{Math.floor(discount)}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{Math.floor(total + fees)}</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Payment;