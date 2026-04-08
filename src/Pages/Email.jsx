import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // 👈 yaha add

const Email = () => {

  const location = useLocation();
  const navigate = useNavigate(); // 👈 yaha add
  const data = location.state;   // previous data

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {

    if (!email || !mobile) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    if (mobile.length !== 10) {
      setError("Enter valid mobile number");
      return;
    }

    setError("");

    const finalData = {
      ...data,
      email,
      mobile
    };

    console.log("FINAL DATA 👉", finalData);

    navigate("/dashboard"); // 🔥 yahi main add kiya hai
  };
  

  return (
    <div className="bg-white p-10 text-center">

      <h2 className="text-xl font-semibold mb-6">
        Email & Mobile
      </h2>

      <p className="mb-2">
        {data?.firstName} {data?.lastName}
      </p>

      <div className="space-y-4">

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 w-64 rounded"
        />

        <div className="flex justify-center gap-2">
          <span className="border px-3 py-2 rounded">+91</span>

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              if (val.length <= 10) setMobile(val);
            }}
            className="border px-4 py-2 w-48 rounded"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="bg-teal-500 text-white px-8 py-3 rounded-full mt-6"
        >
          Submit
        </button>

      </div>

    </div>
  );
};

export default Email;
  