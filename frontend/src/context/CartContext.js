import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ ADD TO CART
  const addToCart = (product) => {

    setCart((prev) => {

      // ✅ USE _id
      const exist = prev.find(
        (item) => item._id === product._id
      );

      if (exist) {

        return prev.map((item) =>

          // ✅ USE _id
          item._id === product._id

            ? {
                ...item,
                qty: item.qty + 1
              }

            : item

        );

      } else {

        return [
          ...prev,
          {
            ...product,
            qty: 1
          }
        ];

      }

    });

  };

  // ✅ REMOVE FROM CART
  const removeFromCart = (id) => {

    setCart((prev) =>
      prev.filter(
        (item) => item._id !== id
      )
    );

  };

  // ✅ DECREASE QUANTITY
  const decreaseQty = (id) => {

    setCart((prev) =>

      prev
        .map((item) =>

          // ✅ USE _id
          item._id === id

            ? {
                ...item,
                qty: item.qty - 1
              }

            : item

        )

        .filter((item) => item.qty > 0)

    );

  };

  // ✅ MOVE TO WISHLIST
  const moveToWishlist = (
    product,
    addToWishlistCallback
  ) => {

    if (
      typeof addToWishlistCallback ===
      "function"
    ) {

      addToWishlistCallback(product);

      // ✅ USE _id
      removeFromCart(product._id);

    }

  };

  return (

    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        decreaseQty,
        moveToWishlist,
      }}
    >

      {children}

    </CartContext.Provider>

  );

};