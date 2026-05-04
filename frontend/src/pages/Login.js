import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = form.email.trim().toLowerCase();

    try {
      const res = await loginUser(email, form.password);

      // redirect based on role
      if (res.user.role === "admin") {
        navigate("/admin");
      } else if (res.user.role === "seller") {
        navigate("/seller-dashboard");
      } else {
        navigate("/customer-dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card p-4 shadow-sm border-0">

        <h3 className="text-center mb-4">Login to Shoppyx</h3>

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          {/* PASSWORD */}
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register">Register here</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;