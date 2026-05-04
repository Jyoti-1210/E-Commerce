import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { ProductContext } from "../context/ProductContext";
import { OrderContext } from "../context/OrderContext";

function SellersList() {

  const { users } = useContext(AuthContext);
  const { products } = useContext(ProductContext);
  const { orders } = useContext(OrderContext);

  // ✅ only sellers
  const sellers = users.filter(
    (user) => user.role === "seller"
  );

  return (
    <div className="container mt-4">

      <h2 className="mb-4 text-center">
        All Sellers
      </h2>

      {sellers.length === 0 ? (
        <h5 className="text-center">
          No sellers found
        </h5>
      ) : (
        <div className="row">

          {sellers.map((seller, index) => {

            // seller products
            const sellerProducts = products.filter(
              (p) => p.sellerEmail === seller.email
            );

            // revenue
            const revenue = orders
              .filter((o) => o.sellerEmail === seller.email)
              .reduce((acc, order) => acc + order.total, 0);

            return (
              <div
                key={index}
                className="col-md-6 mb-4"
              >

                <div className="card shadow-sm p-3 h-100">

                  <h4>{seller.name}</h4>

                  <p>
                    <strong>Email:</strong> {seller.email}
                  </p>

                  <p>
                    <strong>Mobile:</strong> {seller.mobile}
                  </p>

                  <p>
                    <strong>Products Added:</strong>{" "}
                    {sellerProducts.length}
                  </p>

                  <p>
                    <strong>Revenue:</strong> ₹{revenue}
                  </p>

                  <hr />

                  <h5>Products Added</h5>

                  {sellerProducts.length === 0 ? (
                    <p>No products added</p>
                  ) : (
                    sellerProducts.map((product) => (
                      <div
                        key={product.id}
                        className="border rounded p-2 mb-2 d-flex gap-3 align-items-center"
                      >

                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "contain"
                          }}
                        />

                        <div>
                          <h6>{product.name}</h6>
                          <p className="mb-0">
                            ₹{product.price}
                          </p>
                        </div>

                      </div>
                    ))
                  )}

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default SellersList;