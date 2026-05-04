import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import SellerDashboard from "./pages/SellerDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Payment from "./pages/Payment";
import Contact from "./pages/footerPages/Contact";
import About from "./pages/footerPages/About";
import Careers from "./pages/footerPages/Careers";
import Press from "./pages/footerPages/Press";
import Payments from "./pages/footerPages/Payments";
import Shipping from "./pages/footerPages/Shipping";
import Returns from "./pages/footerPages/Returns";
import FAQ from "./pages/footerPages/FAQ";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Terms from "./pages/footerPages/Terms";
import Privacy from "./pages/footerPages/Privacy";
import RevenueReport from "./pages/RevenueReport";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/AdminDashboard";
import CustomersList from "./pages/admin/CustomerLists";
import SellersList from "./pages/SellersList";
import OrdersList from "./pages/OrdersList";
import MyOrders from "./pages/MyOrders";
import { ReviewProvider } from "./context/ReviewContext";
import { AddressProvider } from "./context/AddressContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { OrderProvider } from "./context/OrderContext";
import { WishlistProvider } from "./context/WishlistContext";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <OrderProvider>
              <AddressProvider>
                <ReviewProvider>

              <BrowserRouter>

                {/* NAVBAR */}
                <Navbar />

                {/* ROUTES */}
                <Routes>

                  {/* PUBLIC ROUTES */}
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/customers" element={<CustomersList />} />
                  <Route path="/admin/sellers" element={<SellersList />} />
<Route path="/my-orders" element={<MyOrders />} />
<Route path="/admin/orders" element={<OrdersList />} />
<Route path="/about" element={<About />} />
<Route path="/careers" element={<Careers />} />
<Route path="/press" element={<Press />} />
<Route path="/revenue" element={<RevenueReport />} />
<Route path="/wishlist" element={<Wishlist />} />
<Route path="/payments" element={<Payments />} />
<Route path="/shipping" element={<Shipping />} />
<Route path="/returns" element={<Returns />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/profile" element={<Profile />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />

                  {/* CUSTOMER */}
                  <Route
                    path="/customer-dashboard"
                    element={
                      <ProtectedRoute role="customer">
                        <CustomerDashboard />
                      </ProtectedRoute>
                    }
                  />

                  {/* SELLER */}
                  <Route
                    path="/seller-dashboard"
                    element={
                      <ProtectedRoute role="seller">
                        <SellerDashboard />
                      </ProtectedRoute>
                    }
                  />

                </Routes>

                {/* FOOTER (ONLY HERE ✅) */}
                <Footer />

              </BrowserRouter>
              </ReviewProvider>
              </AddressProvider>

            </OrderProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;