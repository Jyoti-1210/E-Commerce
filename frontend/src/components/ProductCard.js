import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const {
    cart,
    addToCart,
    decreaseQty
  } = useContext(CartContext);

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist
  } = useContext(WishlistContext);

  const navigate = useNavigate();

  const [added, setAdded] = useState(false);

  // ✅ USE _id INSTEAD OF id
  const cartItem = cart.find(
    (item) => item._id === product._id
  );

  // ✅ USE _id
  const inWishlist = wishlist.find(
    (item) => item._id === product._id
  );

  const mrp = Math.floor(product.price * 1.3);

  const discount = Math.floor(
    (1 - product.price / mrp) * 100
  );

  // ❤️ Wishlist
  const handleWishlist = (e) => {

    e.stopPropagation();

    if (inWishlist) {

      // ✅ USE _id
      removeFromWishlist(product._id);

    } else {

      addToWishlist(product);

    }

  };

  // 🛒 Add To Cart
  const handleAddToCart = (e) => {

    e.stopPropagation();

    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);

  };

  return (

    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

      <div
        className="card h-100 border-0 shadow-sm position-relative"
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "0.3s"
        }}
        // ✅ USE _id
        onClick={() =>
          navigate(`/product/${product._id}`)
        }
      >

        {/* ❤️ Wishlist */}
        <div
          onClick={handleWishlist}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            fontSize: "24px",
            zIndex: 10
          }}
        >
          {inWishlist ? "❤️" : "🤍"}
        </div>

        {/* 🖼 PRODUCT IMAGE */}
        <div
          className="d-flex align-items-center justify-content-center bg-light"
          style={{
            height: "230px",
            padding: "20px"
          }}
        >

          <img
            // ✅ SUPPORT MONGODB images ARRAY
            src={
              product.images && product.images.length > 0
                ? product.images[0]
                : "https://via.placeholder.com/200"
            }
            alt={product.name}
            style={{
              maxHeight: "180px",
              width: "100%",
              objectFit: "contain"
            }}
          />

        </div>

        {/* 📦 CARD BODY */}
        <div className="card-body d-flex flex-column">

          {/* PRODUCT NAME */}
          <h6
            className="fw-bold mb-2"
            style={{
              minHeight: "48px"
            }}
          >
            {product.name}
          </h6>

          {/* ⭐ REVIEWS */}
          <div
            className="mb-2"
            style={{
              minHeight: "28px"
            }}
          >
            ⭐⭐⭐⭐☆
            <span className="text-muted ms-1">
              (1,246)
            </span>
          </div>

          {/* 💰 PRICE */}
          <div
            className="mb-2"
            style={{
              minHeight: "55px"
            }}
          >

            <div className="d-flex align-items-center flex-wrap gap-2">

              <span className="text-success fw-bold fs-5">
                ₹{product.price}
              </span>

              <span className="text-muted text-decoration-line-through">
                ₹{mrp}
              </span>

              <span className="text-success">
                {discount}% off
              </span>

            </div>

          </div>

          {/* 📦 STOCK */}
          <div
            style={{
              minHeight: "45px"
            }}
          >

            {product.stock ? (

              <span className="badge bg-success w-100 py-2 fs-6">
                In Stock
              </span>

            ) : (

              <span className="badge bg-danger w-100 py-2 fs-6">
                Out of Stock
              </span>

            )}

          </div>

          {/* 🔘 BUTTON SECTION */}
          <div className="mt-auto">

            {/* 🔔 NOTIFY */}
            {!product.stock && (

              <button
                className="btn btn-warning w-100 mt-3 fw-semibold"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                Notify Me
              </button>

            )}

            {/* 🛒 CART */}
            {product.stock && (

              <div className="mt-3">

                {!cartItem ? (

                  <button
                    className="btn btn-dark w-100 fw-semibold"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>

                ) : (

                  <div
                    className="d-flex justify-content-center align-items-center gap-3"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                  >

                    {/* ➖ */}
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        decreaseQty(product._id)
                      }
                    >
                      -
                    </button>

                    {/* QUANTITY */}
                    <span className="fw-bold fs-5">
                      {cartItem.qty}
                    </span>

                    {/* ➕ */}
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      +
                    </button>

                  </div>

                )}

                {/* ✅ MESSAGE */}
                {added && (

                  <div className="text-success text-center fw-bold mt-2">
                    Added to Cart ✅
                  </div>

                )}

              </div>

            )}

            {/* ⚡ BUY NOW */}
            <button
              className="btn btn-success w-100 mt-3 fw-semibold"
              disabled={!product.stock}
              onClick={(e) => {

                e.stopPropagation();

                addToCart(product);

                navigate("/checkout");

              }}
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ProductCard;