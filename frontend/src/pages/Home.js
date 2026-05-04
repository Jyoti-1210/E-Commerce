import { useContext, useState } from "react";

import { ProductContext } from "../context/ProductContext";

import { useLocation } from "react-router-dom";

import CategorySection from "../components/CategorySection";

function Home() {

  const { products } =
    useContext(ProductContext);

  const location =
    useLocation();

  // 🔍 SEARCH
  const query =
    new URLSearchParams(
      location.search
    );

  const search =
    query
      .get("search")
      ?.toLowerCase()
      ?.trim() || "";

  // 🎯 STATES
  const [
    selectedCategories,
    setSelectedCategories
  ] = useState([]);

  const [price, setPrice] =
    useState(300000);

  const [sort, setSort] =
    useState("");

  // ✅ MAIN CATEGORIES
  const categories = [

    "mobiles",

    "electronics",

    "beauty",

    "home",

    "appliances",

    "toys and baby",

    "auto accessories",

    "sports and fitness",

    "furniture",

    "food and health",

    "fashion",

  ];

  // ✅ CATEGORY CLICK
  const handleCategoryChange =
    (cat) => {

      if (
        selectedCategories.includes(
          cat
        )
      ) {

        setSelectedCategories(
          selectedCategories.filter(
            (c) => c !== cat
          )
        );

      }

      else {

        setSelectedCategories([
          ...selectedCategories,
          cat,
        ]);

      }

    };

  // ✅ FILTER PRODUCTS
  let filteredProducts =
    products

      // 🔍 SEARCH
      .filter((p) => {

        // ✅ SHOW ALL PRODUCTS
        if (!search) return true;

        // ✅ COMBINED SEARCH TEXT
        const searchableText = `

          ${p.name || ""}

          ${p.description || ""}

          ${p.subcategory || ""}

          ${p.brand || ""}

          ${p.category || ""}

        `
          .toLowerCase()
          .trim();

        return searchableText.includes(
          search
        );

      })

      // 📂 CATEGORY
      .filter((p) =>

        selectedCategories.length ===
        0

          ? true

          : selectedCategories.includes(

              p.category
                ?.trim()
                ?.toLowerCase()

            )

      )

      // 💰 PRICE
      .filter(
        (p) => p.price <= price
      );

  // ✅ SORT
  if (sort === "low") {

    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );

  }

  else if (sort === "high") {

    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );

  }

  // ✅ GROUP PRODUCTS
  const groupedProducts =
    filteredProducts.reduce(
      (acc, product) => {

        const category =
          product.category
            ?.trim()
            ?.toLowerCase()
          || "other";

        if (!acc[category]) {

          acc[category] = [];

        }

        acc[category].push(
          product
        );

        return acc;

      },

      {}
    );

  return (

    <div className="container-fluid px-3 mt-3">

      {/* 🔥 TOP CATEGORY BAR */}
      <div
        className="d-flex gap-4 overflow-auto mb-4 pb-2 bg-white p-3 shadow-sm rounded"
      >

        {categories.map((cat) => (

          <div
            key={cat}

            onClick={() =>
              handleCategoryChange(cat)
            }

            className="text-center"

            style={{

              cursor: "pointer",

              minWidth: "120px",

              borderBottom:
                selectedCategories.includes(
                  cat
                )
                  ? "3px solid #0d6efd"
                  : "none",

              paddingBottom: "5px",

            }}
          >

            <div
              style={{
                fontSize: "15px",
                fontWeight: "600",
                textTransform:
                  "capitalize",
              }}
            >

              {cat}

            </div>

          </div>

        ))}

      </div>

      <div className="row">

        {/* 🔥 FILTER PANEL */}
        <div className="col-md-2">

          <div className="card p-3 shadow-sm">

            <h5 className="fw-bold">
              Filters
            </h5>

            {/* 📂 CATEGORY */}
            <div className="mt-3">

              <strong>
                Categories
              </strong>

              {categories.map(
                (cat) => (

                  <div
                    key={cat}
                    className="mt-2"
                  >

                    <input
                      type="checkbox"

                      checked={selectedCategories.includes(
                        cat
                      )}

                      onChange={() =>
                        handleCategoryChange(
                          cat
                        )
                      }
                    />

                    <label className="ms-2 text-capitalize">

                      {cat}

                    </label>

                  </div>

                )
              )}

            </div>

            {/* 💰 PRICE */}
            <div className="mt-4">

              <strong>
                Max Price: ₹{price}
              </strong>

              <input
                type="range"

                min="100"

                max="300000"

                value={price}

                onChange={(e) =>
                  setPrice(
                    e.target.value
                  )
                }

                className="form-range"
              />

            </div>

            {/* 🔃 SORT */}
            <div className="mt-4">

              <strong>
                Sort By
              </strong>

              <select
                className="form-control mt-2"

                value={sort}

                onChange={(e) =>
                  setSort(
                    e.target.value
                  )
                }
              >

                <option value="">
                  None
                </option>

                <option value="low">
                  Price: Low to High
                </option>

                <option value="high">
                  Price: High to Low
                </option>

              </select>

            </div>

            {/* ❌ CLEAR */}
            <button
              className="btn btn-outline-danger mt-4 w-100"

              onClick={() => {

                setSelectedCategories(
                  []
                );

                setPrice(300000);

                setSort("");

              }}
            >

              Clear Filters

            </button>

          </div>

        </div>

        {/* 🛍️ PRODUCTS */}
        <div className="col-md-10">

          {filteredProducts.length ===
            0 && (
            <h4>
              No products found
            </h4>
          )}

          {/* ✅ CATEGORY SECTIONS */}
          {categories.map(
            (category) => {

              const categoryProducts =
                groupedProducts[
                  category
                ];

              if (
                !categoryProducts ||
                categoryProducts.length ===
                  0
              ) {

                return null;

              }

              return (

                <CategorySection
                  key={category}

                  title={category}

                  products={
                    categoryProducts
                  }
                />

              );

            }
          )}

        </div>

      </div>

    </div>

  );

}

export default Home;