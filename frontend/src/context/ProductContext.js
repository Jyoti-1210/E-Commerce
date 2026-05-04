import {
  createContext,
  useEffect,
  useState
} from "react";

export const ProductContext =
  createContext();

export const ProductProvider = ({
  children
}) => {

  const [products, setProducts] =
    useState([]);

  // ✅ BACKEND URL
  const API =
    "http://localhost:5000/api/products";

  // ====================================
  // ✅ GET PRODUCTS
  // ====================================
  const fetchProducts = async () => {

    try {

      const res = await fetch(API);

      const data = await res.json();

      setProducts(Array.isArray(data) ? data : []);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  // ====================================
  // ✅ ADD PRODUCT
  // ====================================
  const addProduct = async (
    productData
  ) => {

    try {

      const formData = new FormData();

      formData.append(
        "name",
        productData.name
      );

      formData.append(
        "price",
        productData.price
      );

      formData.append(
        "category",
        productData.category
      );

      formData.append(
        "description",
        productData.description
      );

      formData.append(
        "stock",
        true
      );

      // ✅ MULTIPLE IMAGES
      for (
        let i = 0;
        i < productData.images.length;
        i++
      ) {

        formData.append(
          "images",
          productData.images[i]
        );

      }

      const res = await fetch(API, {

        method: "POST",

        body: formData,

      });

      const data =
        await res.json();

      // ✅ REFRESH PRODUCTS
      fetchProducts();

      return data;

    } catch (error) {

      console.log(error);

    }

  };

  // ====================================
  // ✅ DELETE PRODUCT
  // ====================================
  const removeProduct = async (
    id
  ) => {

    try {

      await fetch(
        `${API}/${id}`,
        {
          method: "DELETE",
        }
      );

      setProducts((prev) =>
        prev.filter(
          (p) => p._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  // ====================================
  // ✅ EDIT PRODUCT
  // ====================================
  const editProduct = async (
    id,
    updatedData
  ) => {

    try {

      const res = await fetch(
        `${API}/${id}`,
        {

          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            updatedData
          ),

        }
      );

      const data =
        await res.json();

      fetchProducts();

      return data;

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        editProduct,
        fetchProducts,
      }}
    >

      {children}

    </ProductContext.Provider>

  );

};