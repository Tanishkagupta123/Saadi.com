import React, { useState } from "react";

const Signup = () => {

  const [showGender, setShowGender] = useState(false);
  const [profileType, setProfileType] = useState("");

  const handleClick = (type) => {
    setProfileType(type);

    if (type === "Myself" || type === "My Friend" || type === "My Relative") {
      setShowGender(true);
    } else {
      alert("Continue to next step");
    }
  };

  return (
    <div className="bg-white p-10 text-center">

      <h2 className="text-xl mb-6">This Profile is for</h2>

      <div className="flex flex-wrap gap-3 justify-center">

        <button onClick={()=>handleClick("Myself")} className="bg-gray-200 px-4 py-2 rounded-full">
          Myself
        </button>

        <button onClick={()=>handleClick("My Son")} className="bg-gray-200 px-4 py-2 rounded-full">
          My Son
        </button>

        <button onClick={()=>handleClick("My Daughter")} className="bg-gray-200 px-4 py-2 rounded-full">
          My Daughter
        </button>

        <button onClick={()=>handleClick("My Brother")} className="bg-gray-200 px-4 py-2 rounded-full">
          My Brother
        </button>

        <button onClick={()=>handleClick("My Sister")} className="bg-gray-200 px-4 py-2 rounded-full">
          My Sister
        </button>

        <button onClick={()=>handleClick("My Friend")} className="bg-gray-200 px-4 py-2 rounded-full">
          My Friend
        </button>

        <button onClick={()=>handleClick("My Relative")} className="bg-gray-200 px-4 py-2 rounded-full">
          My Relative
        </button>

      </div>

      {showGender && (
        <div className="mt-6">
          <h3 className="mb-3">Select Gender</h3>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-3">
            Male
          </button>

          <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
            Female
          </button>
        </div>
      )}

    </div>
  );
};

export default Signup;