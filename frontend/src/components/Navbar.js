import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  const { wishlist } =
    useContext(WishlistContext);

  const {
    currentUser,
    setCurrentUser
  } = useContext(AuthContext);

  const [search, setSearch] =
    useState("");

  const [open, setOpen] =
    useState(false);

  const navigate = useNavigate();

  const timeoutRef = useRef(null);

  const dropdownRef = useRef(null);

  // 🔍 SEARCH
  const handleSearch = (e) => {

    e.preventDefault();

    navigate(`/?search=${search}`);

  };

  // 🛒 TOTAL QTY
  const totalQty = cart.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  // ✅ DROPDOWN OPEN
  const handleEnter = () => {

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(true);

  };

  // ✅ DROPDOWN CLOSE
  const handleLeave = () => {

    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);

  };

  // ✅ CLICK TOGGLE
  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  // ✅ CLOSE ON OUTSIDE CLICK
  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  // ✅ NAVIGATION
  const goTo = (path) => {

    navigate(path);

    setOpen(false);

  };

  // ✅ LOGOUT
  const handleLogout = () => {

    localStorage.removeItem(
      "currentUser"
    );

    setCurrentUser(null);

    navigate("/login");

  };

  return (

    <nav className="navbar bg-white px-4 shadow-sm d-flex justify-content-between align-items-center">

      {/* LOGO */}
      <Link
        to="/"
        className="navbar-brand fw-bold text-primary"
      >
        Shoppyx
      </Link>

      {/* SEARCH */}
      <form
        className="d-flex w-50"
        onSubmit={handleSearch}
      >

        <input
          type="text"
          className="form-control me-2"
          placeholder="Search for Products, Brands and More"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button className="btn btn-primary">
          Search
        </button>

      </form>

      {/* RIGHT SIDE */}
      <div className="d-flex align-items-center gap-4">

        {/* ❤️ WISHLIST */}
        <div
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate("/wishlist")
          }
          className="position-relative"
        >

          ❤️ Wishlist

          {wishlist.length > 0 && (

            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">

              {wishlist.length}

            </span>

          )}

        </div>

        {/* 🛒 CART */}
        <div
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate("/cart")
          }
          className="position-relative"
        >

          🛒 Cart

          {totalQty > 0 && (

            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">

              {totalQty}

            </span>

          )}

        </div>

        {/* 👤 USER */}
        {!currentUser ? (

          <Link
            to="/login"
            className="btn btn-outline-primary"
          >
            Login
          </Link>

        ) : (

          <div
            className="position-relative"
            ref={dropdownRef}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >

            {/* PROFILE */}
            <div
              style={{ cursor: "pointer" }}
              onClick={toggleDropdown}
            >

              👤 {currentUser.name || "Account"}

            </div>

            {/* DROPDOWN */}
            {open && (

              <div
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{
                  position: "absolute",
                  top: "40px",
                  right: 0,
                  width: "260px",
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 20px rgba(0,0,0,0.15)",
                  zIndex: 9999,
                  padding: "10px 0"
                }}
              >

                {/* HEADER */}
                <div className="px-3 pb-2 border-bottom">

                  <strong>
                    Your Account
                  </strong>

                </div>

                {/* PROFILE */}
                <div
                  className="px-3 py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    goTo("/profile")
                  }
                >

                  👤 My Profile

                </div>

                {/* ORDERS */}
                <div
                  className="px-3 py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    goTo("/orders")
                  }
                >

                  📦 Orders

                </div>

                {/* WISHLIST */}
                <div
                  className="px-3 py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    goTo("/wishlist")
                  }
                >

                  ❤️ Wishlist

                </div>

                {/* CART */}
                <div
                  className="px-3 py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    goTo("/cart")
                  }
                >

                  🛒 Cart

                </div>

                {/* ADDRESS */}
                <div
                  className="px-3 py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    goTo("/checkout")
                  }
                >

                  📍 Saved Addresses

                </div>

                <hr className="my-1" />

                {/* LOGOUT */}
                <div
                  className="px-3 py-2 text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >

                  🚪 Logout

                </div>

              </div>

            )}

          </div>

        )}

      </div>

    </nav>

  );

}

export default Navbar;