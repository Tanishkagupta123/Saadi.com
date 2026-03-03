import React from "react";

const Home = () => {
  return (
<div
  className="relative h-[700px] w-full bg-cover bg-no-repeat"
  style={{
    backgroundImage: "url('/nsaadi.jpg')",
    backgroundPosition: "center 30%"
  }}
>
  <img src="/shaadi_logo.svg" alt="couple" />
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Navbar Space Fix */}
      <div className="relative z-10">

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-white px-6 pt-80">

          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Welcome to the World's No.1 Matchmaking Service
          </h1>

          <p className="text-xl mb-10">
            Photo-Matches via Email. Join Free!
          </p>

         {/* Search Box */}
<div className="bg-black/20 backdrop-blur-md p-6 flex flex-wrap gap-4 items-end justify-start text-white">

  {/* Looking For */}
  <div className="flex flex-col">
    <label className="text-sm mb-1">I'm looking for a</label>
    <select className="px-15 py-2 rounded-md text-gray-600 bg-amber-50">
      <option>Woman</option>
      <option>Man</option>
    </select>
  </div>

  {/* Age From */}
  <div className="flex flex-col">
    <label className="text-sm mb-1">aged</label>
    <select className="px-10 py-2 rounded-md text-gray-600 bg-amber-50">
      <option>22</option>
      <option>23</option>
      <option>24</option>
      <option>25</option>

      <option>26</option>

      <option>27</option>

      <option>28</option>
    </select>
  </div>

  {/* To */}
  <div className="flex flex-col">
    <label className="text-sm mb-1 invisible">to</label>
    <select className="px-10 py-2 rounded-md text-gray-600 bg-amber-50">
      <option>27</option>
      <option>28</option>
      <option>29</option>
      <option>30</option>

      <option>31</option>
      <option>32</option>

      <option>33</option>


    </select>
  </div>

  {/* Religion */}
  <div className="flex flex-col">
    <label className="text-sm mb-1">Of religion</label>
    <select className="px-10 py-2 rounded-md text-gray-600 bg-amber-50">
      <option>Select Religion</option>
    </select>
  </div>

  {/* Mother Tongue */}
  <div className="flex flex-col">
    <label className="text-sm mb-1">and mother tongue</label>
    <select className="px-22 py-2 rounded-md text-gray-600 bg-amber-50">
      <option>Hindi</option>
      <option>Marathi</option>

      <option>Punjabi</option>

      <option>Bengali</option>

      <option>Gujarati</option>

      <option>Urdu</option>
      <option>Telegu</option>

      <option>Kannada</option>
      <option>English</option>
      <option>Tamil</option>




    </select>
  </div>

  {/* Button */}
  <div className="flex flex-col">
    <label className="invisible mb-1">Button</label>
    <button className="bg-sky-500 hover:bg-sky-600 px-8 py-2 rounded-md text-white font-medium">
      Let's Begin
    </button>
  </div>

</div>
        </div>
      </div>

    <div className="bg-gray-100 py-20">

  {/* Heading */}
  <h1 className="text-center text-red-500 text-5xl font-normal mb-20">
    Find your Special Someone
  </h1>

  {/* 3 Steps Section */}
  <div className="flex justify-center gap-32 text-center">

    {/* Step 1 */}
    <div className="flex flex-col items-center">
      <div className="h-40 w-40 bg-teal-500 rounded-full flex items-center justify-center text-white text-3xl">
        ✏️
      </div>

      <div className="-mt-6 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-red-500 font-bold">
        1
      </div>

      <h2 className="text-teal-600 text-2xl mt-6">Sign Up</h2>
      <p className="text-gray-600 mt-2 w-64">
        Register for free & put up your Matrimony Profile
      </p>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center">
      <div className="h-40 w-40 bg-teal-500 rounded-full flex items-center justify-center text-white text-3xl">
        ✔️
      </div>

      <div className="-mt-6 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-red-500 font-bold">
        2
      </div>

      <h2 className="text-teal-600 text-2xl mt-6">Connect</h2>
      <p className="text-gray-600 mt-2 w-64">
        Select & Connect with Matches you like
      </p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center">
      <div className="h-40 w-40 bg-teal-500 rounded-full flex items-center justify-center text-white text-3xl">
        💬
      </div>

      <div className="-mt-6 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-red-500 font-bold">
        3
      </div>

      <h2 className="text-teal-600 text-2xl mt-6">Interact</h2>
      <p className="text-gray-600 mt-2 w-64">
        Become a Premium Member & Start a Conversation
      </p>
    </div>

  </div>
</div>

<div className="bg-gray-100 py-20">

  {/* Heading */}
  <h1 className="text-center text-red-500 text-5xl font-normal mb-16">
    6 Million Matches & Counting
  </h1>

  {/* Cards Section */}
  <div className="flex justify-center gap-10 px-10">

    {/* Card 1 */}
    <div className="w-80 bg-white shadow-lg rounded-md overflow-hidden">
      
      <img 
        src="/couple1.jpg" 
        alt="couple"
        className="w-full h-80 object-cover"/>

      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Payal & Geetesh
        </h2>

        <p className="text-gray-600 text-sm">
          I'm very glad that I found the love of my life here.
          I've got the person exactly I wanted.
        </p>
      </div>

    </div>


    {/* Card 2 */}
    <div className="w-80 bg-white shadow-lg rounded-md overflow-hidden">
      
      <img 
        src="/couple2.jpg" 
        alt="couple"
        className="w-full h-80 object-cover"
      />

      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Parth & Saheli
        </h2>

        <p className="text-gray-600 text-sm">
          From strangers to partners, everything changed beautifully.
        </p>
      </div>

    </div>


    {/* Card 3 */}
    <div className="w-80 bg-white shadow-lg rounded-md overflow-hidden">
      
      <img 
        src="/couple3.jpg" 
        alt="couple"
        className="w-full h-80 object-cover" />

      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Karthikeyan & Shanmugapriya
        </h2>

        <p className="text-gray-600 text-sm">
          What started as a simple chat turned into a lifelong bond.
        </p>
      </div>

    </div>

  </div>

</div>


    </div>
  );
};

export default Home;