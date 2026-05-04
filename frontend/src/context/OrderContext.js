import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("orders");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ✅ UPDATED PLACE ORDER (SUPPORT BOTH FORMATS)
  const placeOrder = (data, addressParam) => {

    let newOrder;

    // 🟢 OLD FORMAT → placeOrder(cartItems, address)
    if (Array.isArray(data)) {

      if (data.length === 0) return;

      newOrder = {
        id: Date.now(),
        items: [...data], // keep structure
        address: addressParam || {},
        createdAt: new Date().toLocaleString(),
      };
    }

    // 🟢 NEW FORMAT → placeOrder(orderData)
    else if (typeof data === "object") {

      if (!data.items || data.items.length === 0) return;

      newOrder = {
        id: Date.now(),
        items: [...data.items], // ✅ FIXED
        address: data.address || {},
        total: data.total || 0,
        paymentMethod: data.paymentMethod || "N/A",
        createdAt: data.createdAt || new Date().toLocaleString(),
      };
    }

    else {
      return;
    }

    console.log("ORDER SAVED:", newOrder); // ✅ DEBUG

    setOrders((prev) => [newOrder, ...prev]);
  };

  const cancelOrder = (id) => {
    setOrders((prev) =>
      prev.filter((order) => order.id !== id)
    );
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder, cancelOrder }}>
      {children}
    </OrderContext.Provider>
  );
};