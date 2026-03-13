import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [profileType, setProfileType] = useState("");
  const [gender, setGender] = useState("");

  const profileOptions = [
    "Myself",
    "My Son",
    "My Daughter",
    "My Brother",
    "My Sister",
    "My Friend",
    "My Relative"
  ];

  const showGender =
    profileType === "Myself" ||
    profileType === "My Friend" ||
    profileType === "My Relative";

  const handleContinue = () => {

    if (!profileType) {
      alert("Please select profile type");
      return;
    }

    if (showGender && !gender) {
      alert("Please select gender");
      return;
    }

    navigate("/DOB");   // next page
  };

  return (
    <div className="bg-white p-10 text-center">

      <h2 className="text-xl mb-6 font-semibold">
        This Profile is for
      </h2>

      <div className="flex flex-wrap gap-3 justify-center">

        {profileOptions.map((item) => (
          <button
            key={item}
            onClick={() => {
              setProfileType(item);
              setGender("");
            }}
            className={`px-4 py-2 rounded-full border
            ${profileType === item
                ? "bg-teal-500 text-white"
                : "bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}

      </div>


      {showGender && (
        <div className="mt-6">

          <h3 className="mb-3 font-medium">Select Gender</h3>

          <button
            onClick={() => setGender("Male")}
            className={`px-4 py-2 rounded-full mr-3
            ${gender === "Male"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
              }`}
          >
            Male
          </button>

          <button
            onClick={() => setGender("Female")}
            className={`px-4 py-2 rounded-full
            ${gender === "Female"
                ? "bg-pink-500 text-white"
                : "bg-gray-200"
              }`}
          >
            Female
          </button>

        </div>
      )}


      <div className="mt-8">
        <button
          onClick={handleContinue}
          className="bg-teal-500 text-white px-8 py-3 rounded-full"
        >
          Continue
        </button>
      </div>

    </div>
  );
};

export default Signup;