import React, { useState } from "react";

const DOB = () => {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  const [date,setDate] = useState("");
  const [month,setMonth] = useState("");
  const [year,setYear] = useState("");

  const [error,setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const d = Number(date);
    const m = Number(month);
    const y = Number(year);

    if(!firstName || !lastName || !d || !m || !y){
      setError("Please fill all fields");
      return;
    }

    if(m > 12 || m < 1){
      setError("Please enter valid DOB");
      return;
    }

    if(y < 1960 || y > 2004){
      setError("Please enter valid DOB");
      return;
    }

    const daysInMonth = new Date(y, m, 0).getDate();

    if(d > daysInMonth || d < 1){
      setError("Please enter valid DOB");
      return;
    }

    const today = new Date();
    const birthDate = new Date(y, m-1, d);

    let age = today.getFullYear() - birthDate.getFullYear();

    const mDiff = today.getMonth() - birthDate.getMonth();

    if(mDiff < 0 || (mDiff === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }

    if(age < 21){
      setError("Age must be at least 21 years");
      return;
    }

    setError("");
    console.log(firstName,lastName,date,month,year);
  };

  return (
    <div className="bg-white p-10 text-center">

      <h2 className="text-xl font-semibold mb-6">
        Basic Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        className="border px-4 py-2 w-64 rounded"
        />

        <br/>

        <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        className="border px-4 py-2 w-64 rounded"
        />

        <div className="flex gap-3 justify-center mt-4">

          <input
          type="text"
          placeholder="Date"
          value={date}
          maxLength={2}
          onChange={(e)=>{
            const val = e.target.value.replace(/\D/g,"");
            if(val.length <= 2) setDate(val);
          }}
          className="border px-3 py-2 w-20 rounded"
          />

          <input
          type="text"
          placeholder="Month"
          value={month}
          maxLength={2}
          onChange={(e)=>{
            const val = e.target.value.replace(/\D/g,"");
            if(val.length <= 2) setMonth(val);
          }}
          className="border px-3 py-2 w-24 rounded"
          />

          <input
          type="text"
          placeholder="Year"
          value={year}
          maxLength={4}
          onChange={(e)=>{
            const val = e.target.value.replace(/\D/g,"");
            if(val.length <= 4) setYear(val);
          }}
          className="border px-3 py-2 w-28 rounded"
          />

        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}

        <button className="bg-teal-500 text-white px-8 py-3 rounded-full mt-6">
          Continue
        </button>

      </form>

    </div>
  )
}

export default DOB;