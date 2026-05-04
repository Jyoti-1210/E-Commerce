import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CustomersList() {
  const { users = [] } = useContext(AuthContext);

  const navigate = useNavigate();

  // ✅ only customers
  const customers = users.filter(
    (user) => user.role === "customer"
  );

  return (
    <div className="container mt-4">

      <h3 className="text-center mb-4">
        All Customers
      </h3>

      {customers.length === 0 ? (
        <h5 className="text-center">
          No customers found
        </h5>
      ) : (
        <div className="row">

          {customers.map((user, index) => (
            <div key={index} className="col-md-4 mb-3">

              <div
                className="card p-3 shadow-sm"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate(`/admin/customers/${user.email}`)
                }
              >

                <h5>{user.name}</h5>

                <p>
                  <strong>Email:</strong> {user.email}
                </p>

                <p>
                  <strong>Mobile:</strong> {user.mobile}
                </p>

                <span className="badge bg-primary">
                  Customer
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default CustomersList;