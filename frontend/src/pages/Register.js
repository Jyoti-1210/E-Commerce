import {
  useState,
  useContext
} from "react";

import {
  AuthContext
} from "../context/AuthContext";

import {
  useNavigate
} from "react-router-dom";

function Register() {

  const {
    registerUser
  } = useContext(AuthContext);

  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({

      name: "",
      email: "",
      password: "",
      role: "customer"

    });

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await registerUser(

          form.name,

          form.email
            .trim()
            .toLowerCase(),

          form.password,

          form.role
            .trim()
            .toLowerCase()

        );

        alert(
          "Registration Successful"
        );

        navigate("/login");

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
          "Registration Failed"
        );

      }

    };

  return (

    <div
      className="container mt-5"
      style={{
        maxWidth: "400px"
      }}
    >

      <div className="card p-4 shadow-sm border-0">

        <h3 className="text-center mb-4">
          Register on Shoppyxx
        </h3>

        <form
          onSubmit={
            handleSubmit
          }
        >

          {/* NAME */}
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name:
                  e.target.value
              })
            }
          />

          {/* EMAIL */}
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target.value
              })
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
              setForm({
                ...form,
                password:
                  e.target.value
              })
            }
          />

          {/* ROLE */}
          <select
            className="form-control mb-4"
            value={form.role}
            onChange={(e) =>
              setForm({
                ...form,
                role:
                  e.target.value
              })
            }
          >

            <option value="customer">
              Customer
            </option>

            <option value="seller">
              Seller
            </option>

          </select>

          {/* BUTTON */}
          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Register
          </button>

        </form>

      </div>

    </div>

  );

}

export default Register;