import { useContext, useState } from "react";

import axios from "axios";

import { AddressContext } from "../context/AddressContext";

import { useNavigate } from "react-router-dom";

function Checkout() {

  const {
    addresses,
    addAddress,
    deleteAddress,
    selectedAddress,
    setSelectedAddress
  } = useContext(AddressContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({

    name: "",

    mobile: "",

    address1: "",

    address2: "",

    state: "",

    pincode: ""

  });

  // =========================
  // ADD ADDRESS
  // =========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // ✅ SAVE TO FRONTEND CONTEXT
      addAddress(form);

      // ✅ SAVE TO BACKEND
      await axios.post(
        "http://localhost:5000/api/address",
        form
      );

      alert("Address Added ✅");

      setForm({

        name: "",

        mobile: "",

        address1: "",

        address2: "",

        state: "",

        pincode: ""

      });

    }

    catch (error) {

      console.log(error);

      alert("Failed to save address");

    }

  };

  return (

    <div className="container mt-4">

      <h3>
        Select Delivery Address
      </h3>

      {/* ADDRESS LIST */}

      {addresses.map((addr) => (

        <div
          key={addr.id}
          className="card p-3 mb-2"
        >

          <input
            type="radio"

            checked={
              selectedAddress?.id ===
              addr.id
            }

            onChange={() =>
              setSelectedAddress(addr)
            }
          />

          <div>

            <strong>
              {addr.name}
            </strong>

            ({addr.mobile})

            <br />

            {addr.address1},
            {addr.address2}

            <br />

            {addr.state} -
            {addr.pincode}

          </div>

          <button
            className="btn btn-danger btn-sm mt-2"

            onClick={() =>
              deleteAddress(addr.id)
            }
          >

            Delete

          </button>

        </div>

      ))}

      {/* ADD ADDRESS */}

      <div className="card p-3 mt-4">

        <h5>
          Add New Address
        </h5>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-2"

            placeholder="Name"

            value={form.name}

            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }

            required
          />

          <input
            className="form-control mb-2"

            placeholder="Mobile"

            value={form.mobile}

            onChange={(e) =>
              setForm({
                ...form,
                mobile: e.target.value
              })
            }

            required
          />

          <input
            className="form-control mb-2"

            placeholder="Address Line 1"

            value={form.address1}

            onChange={(e) =>
              setForm({
                ...form,
                address1: e.target.value
              })
            }

            required
          />

          <input
            className="form-control mb-2"

            placeholder="Address Line 2"

            value={form.address2}

            onChange={(e) =>
              setForm({
                ...form,
                address2: e.target.value
              })
            }
          />

          <input
            className="form-control mb-2"

            placeholder="State"

            value={form.state}

            onChange={(e) =>
              setForm({
                ...form,
                state: e.target.value
              })
            }

            required
          />

          <input
            className="form-control mb-2"

            placeholder="Pincode"

            value={form.pincode}

            onChange={(e) =>
              setForm({
                ...form,
                pincode: e.target.value
              })
            }

            required
          />

          <button className="btn btn-primary w-100">

            Add Address

          </button>

        </form>

      </div>

      {/* CONTINUE BUTTON */}

      <button
        className="btn btn-success w-100 mt-3"

        onClick={() => {

          if (!selectedAddress) {

            alert(
              "Please select an address"
            );

            return;

          }

          // ✅ OLD FUNCTIONALITY RESTORED
          navigate("/payment");

        }}
      >

        Continue to Payment

      </button>

    </div>

  );

}

export default Checkout;
