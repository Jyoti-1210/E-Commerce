import { useContext, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const [movedId, setMovedId] = useState(null); // ✅ track moved item

  const handleMoveToCart = (product) => {
    addToCart(product);                // ✅ add to cart
    removeFromWishlist(product.id);    // ✅ remove from wishlist

    setMovedId(product.id);            // ✅ show feedback
    setTimeout(() => setMovedId(null), 1500);
  };

  if (wishlist.length === 0) {
    return <h3 className="text-center mt-4">Your wishlist is empty</h3>;
  }

  return (
    <div className="container mt-4">
      <h3>Your Wishlist ❤️</h3>

      <div className="row">
        {wishlist.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card p-3 text-center">

              <img
                src={item.image}
                alt={item.name}
                style={{ height: "150px", objectFit: "contain" }}
              />

              <h6 className="mt-2">{item.name}</h6>
              <p className="text-success">₹{item.price}</p>

              {/* ✅ MOVED MESSAGE */}
              {movedId === item.id && (
                <div className="text-success fw-bold mb-2">
                  Moved to Cart ✅
                </div>
              )}

              <button
                className="btn btn-dark w-100 mb-2"
                onClick={() => handleMoveToCart(item)}
              >
                Move to Cart
              </button>

              <button
                className="btn btn-outline-danger w-100"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;