import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Religion = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state

  const [religion, setReligion] = useState("");
  const [community, setCommunity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = () => {

    if (!religion || !community || !country) {
      alert("Please fill all fields");
      return;
    }

    const finalData = {
      ...data,
      religion,
      community,
      country
    };

    navigate("/email", {
      state: finalData
    });
  };

  return (
    <div className="bg-white p-10 text-center">

      <h2 className="text-xl font-semibold mb-6">
        Religion Details
      </h2>

      <p>Name: {data?.firstName} {data?.lastName}</p>
      <p>DOB: {data?.date}-{data?.month}-{data?.year}</p>

      <div className="space-y-4 mt-4">

        <select onChange={(e) => setReligion(e.target.value)} className="border px-4 py-2 w-64 rounded">
          <option value="">Select Religion</option>
          <option>Hindu</option>
          <option>Muslim</option>
          <option>Christian</option>
          <option>Marathi</option>
          <option>Punjabi</option>
          <option>Sikh</option>
          <option>Buddhist</option>
          <option>Jain</option>

        </select>

        <select onChange={(e) => setCommunity(e.target.value)} className="border px-4 py-2 w-64 rounded">
          <option value="">Select Community</option>
          <option>Hindi</option>
          <option>Punjabi</option>
          <option>Bengali</option>
          <option>Urdu</option>
          <option>Marathi</option>
          <option>Gujarati</option>
          <option>Tamil</option>
          <option>Telugu</option>
          <option>Odia</option>
          <option>Assamese</option>
          <option>Sindhi</option>
          <option>Maithili</option>
          <option>Dogri</option>

        </select>
        

        <select onChange={(e) => setCountry(e.target.value)} className="border px-4 py-2 w-64 rounded">
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-teal-500 text-white px-8 py-3 rounded-full mt-6"
        >
          Continue
        </button>

      </div>

    </div>
  )
}

export default Religion;