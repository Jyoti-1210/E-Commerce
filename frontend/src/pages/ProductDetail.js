import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { ReviewContext } from "../context/ReviewContext";

function ProductDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { products } =
    useContext(ProductContext);

  const {
    cart,
    addToCart,
    decreaseQty
  } = useContext(CartContext);

  const { addToWishlist } =
    useContext(WishlistContext);

  const { reviews, addReview } =
    useContext(ReviewContext);

  // ✅ FIXED FOR MONGODB
  const product = products.find(
    (p) => p._id === id
  );

  const [text, setText] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const [added, setAdded] =
    useState(false);

  if (!product) {

    return (
      <h3 className="text-center mt-5">
        Product not found
      </h3>
    );

  }

  // ✅ FIXED
  const productReviews =
    reviews[product._id] || [];

  // ✅ FIXED
  const similarProducts =
    products.filter(
      (p) =>
        p.category === product.category &&
        p._id !== product._id
    );

  // ✅ FIXED
  const cartItem = cart.find(
    (item) => item._id === product._id
  );

  const handleAddToCart = () => {

    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);

  };

  const handleReview = () => {

    if (!text) return;

    // ✅ FIXED
    addReview(product._id, {
      text,
      rating,
      date: new Date().toLocaleString()
    });

    setText("");

  };

  return (

    <div className="container py-4">

      <div className="row">

        {/* IMAGE */}
        <div className="col-md-5">

          <div className="card p-3 border-0 shadow-sm">

            <img
              src={
                product.images &&
                product.images.length > 0
                  ? product.images[0]
                  : "https://via.placeholder.com/300"
              }
              alt={product.name}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "contain"
              }}
            />

          </div>

        </div>

        {/* DETAILS */}
        <div className="col-md-7">

          <div className="card p-4 border-0 shadow-sm">

            <h3>{product.name}</h3>

            <h4 className="text-success">
              ₹{product.price}
            </h4>

            <p>{product.description}</p>

            <div className="mt-3">

              {product.stock ? (

                <span className="text-success fw-bold">
                  In Stock
                </span>

              ) : (

                <span className="text-danger fw-bold">
                  Out of Stock
                </span>

              )}

            </div>

            <div className="mt-4 d-flex gap-3 flex-wrap align-items-center">

              {/* 🛒 CART */}
              {!cartItem ? (

                <button
                  className="btn btn-warning"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>

              ) : (

                <div className="d-flex align-items-center gap-2">

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      decreaseQty(product._id)
                    }
                  >
                    -
                  </button>

                  <span className="fw-bold">
                    {cartItem.qty}
                  </span>

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

                <div className="text-success fw-bold">
                  Added to Cart ✅
                </div>

              )}

              {/* ⚡ BUY NOW */}
              <button
                className="btn btn-success"
                onClick={() => {

                  addToCart(product);

                  navigate("/checkout");

                }}
              >
                Buy Now
              </button>

              {/* ❤️ WISHLIST */}
              <button
                className="btn btn-outline-danger"
                onClick={() =>
                  addToWishlist(product)
                }
              >
                ❤️ Wishlist
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ⭐ REVIEWS */}
      <div className="mt-5">

        <div className="card p-4 border-0 shadow-sm">

          <h4>Reviews</h4>

          {/* ADD REVIEW */}
          <div className="card p-3 mb-3 mt-3">

            <select
              className="form-control mb-2"
              value={rating}
              onChange={(e) =>
                setRating(e.target.value)
              }
            >

              {[5, 4, 3, 2, 1].map((n) => (

                <option
                  key={n}
                  value={n}
                >
                  {n} ⭐
                </option>

              ))}

            </select>

            <textarea
              className="form-control mb-2"
              placeholder="Write your review..."
              value={text}
              onChange={(e) =>
                setText(e.target.value)
              }
            />

            <button
              className="btn btn-primary"
              onClick={handleReview}
            >
              Submit Review
            </button>

          </div>

          {/* SHOW REVIEWS */}
          {productReviews.length === 0 && (
            <p>No reviews yet</p>
          )}

          {productReviews.map(
            (r, index) => (

              <div
                key={index}
                className="border rounded p-3 mb-2"
              >

                <strong>
                  {r.rating} ⭐
                </strong>

                <p className="mb-1">
                  {r.text}
                </p>

                <small>
                  {r.date}
                </small>

              </div>

            )
          )}

        </div>

      </div>

      {/* 🔥 SIMILAR PRODUCTS */}
      <div className="mt-5">

        <h4 className="mb-3">
          Similar Products
        </h4>

        <div className="row">

          {similarProducts
            .slice(0, 4)
            .map((p) => (

              <div
                key={p._id}
                className="col-md-3 mb-3"
                style={{
                  cursor: "pointer"
                }}
                onClick={() =>
                  navigate(
                    `/product/${p._id}`
                  )
                }
              >

                <div className="card p-2 shadow-sm border-0">

                  <img
                    src={
                      p.images &&
                      p.images.length > 0
                        ? p.images[0]
                        : "https://via.placeholder.com/150"
                    }
                    alt={p.name}
                    style={{
                      height: "150px",
                      objectFit:
                        "contain"
                    }}
                  />

                  <h6 className="mt-2">
                    {p.name}
                  </h6>

                  <span className="text-success fw-bold">
                    ₹{p.price}
                  </span>

                </div>

              </div>

            ))}

        </div>

      </div>

    </div>

  );

}

export default ProductDetail;