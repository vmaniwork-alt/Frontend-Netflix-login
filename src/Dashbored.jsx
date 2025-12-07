import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


import Hero from "./assets/hero2.jpg";
import Recent1 from "./assets/recent1.jpeg";
import Recent2 from "./assets/recent2.jpg";
import Recent3 from "./assets/recent3.jpeg";
import Recent5 from "./assets/recent5.webp"
import Recent4 from "./assets/recent6.jpg";

import Recommend1 from "./assets/recommnd1.webp";
import Recommend2 from "./assets/recommnd2.jpg";
import Recommend3 from "./assets/recommnd3.jpeg";
import Recommend4 from "./assets/recommnd4.webp";
import Recommend5 from "./assets/recommnd5.webp";



const Dashbored = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className=" text-2xl md:text-3xl font-bold text-red-600">NETFLIX</h1>

        <div className=" gap-8 text-neutral-400 font-medium hidden md:flex">
          <p className="cursor-pointer">Movies</p>
          <p className="cursor-pointer">Series</p>
          <p className="cursor-pointer">TV Shows</p>
        </div>

        <div className="flex items-center gap-4">
          <FaSearch />
          <FaBell />
          <div className="border border-gray-500 rounded-full p-2">
            <FaUser />
          </div>
        </div>
      </nav>

      <section className="flex ">
        {/* SIDE MENU */}
        <div className="w-64 px-8 py-10 text-neutral-400 hidden md:block">
          <h2 className="mb-4 text-lg">MENU</h2>
          <div className="flex flex-col gap-3 font-medium">
            <p>Home</p>
            <p>Discovery</p>
            <p>Coming Soon</p>
            <p>Community</p>
          </div>

          <h2 className="mt-10 mb-4 text-lg">GENERAL</h2>
          <div className="flex flex-col gap-3 font-medium">
            <p>Settings</p>
            <p>Help</p>
          </div>

          <button
            className="mt-10 text-red-500 font-semibold"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-10  relative">
          {/* HERO */}
          <h1 className="text-2xl font-semibold mb-4">Trending Movies</h1>
          <img
            src={Hero}
            alt="Hero"
            loading="lazy"
            className="rounded-lg mb-10 md:max-w-4xl"
          />
          <div  className=" hidden md:block absolute rounded-3xl top-[210px] md:rounded-full  left-12 md:left-20  md:top-[550px] 
           px-2 py-1 md:px-4 md:py-2 font-medium md:font-semibold
           text-xs md:text-base
            hover:bg-red-500 hover:text-white  bg-white z-10 text-black">          
            <button 
         
          >Watch Now</button></div>


          {/* RECENTLY WATCHED */}
          <h2 className="text-xl font-semibold mb-6 ">Recently Watched</h2>
          <div className="flex gap-4 overflow-x-auto">
            <img src={Recent1} className="w-48 rounded-md" loading="lazy" />
            <img src={Recent2} className="w-48 rounded-md"  loading="lazy"/>
            <img src={Recent3} className="w-48 rounded-md"  loading="lazy"/>
            <img src={Recent4} className="w-48 rounded-md"  loading="lazy"/>
            <img src={Recent5} className="w-48 rounded-md" loading="lazy" />
          </div>
          {/* RECOMMEND MOVIES */}
           <h2 className="text-xl font-semibold mb-6 mt-4 ">Recommend Movies</h2>
          <div className="flex gap-4 overflow-x-auto">
            <img src={Recommend1} className="w-48 rounded-md" loading="lazy"/>
            <img src={Recommend2} className="w-48 rounded-md"  loading="lazy"/>
            <img src={Recommend3} className="w-48 rounded-md"  loading="lazy"/>
            <img src={Recommend4} className="w-48 rounded-md"  loading="lazy"/>
            <img src={Recommend5} className="w-48 rounded-md"  loading="lazy"/>
           
          </div>
        </div>
      </section>
      
      {/* FOOTER  */}
      <footer className="bg-[#191818]    py-10 space-y-5 p-2 md:px-36 ">
        <p className="text-white text-sm md:text-lg">
          Questions? Call 000-800-919-1743
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4  gap-3 text-gray-300 underline text-sm md:text-base">
          <a>FAQ</a>
          <a>Help Center</a>
          <a>Terms of Use</a>
          <a>Privacy</a>
          <a>Cookie Preferences</a>
          <a>Corporate Information</a>
        </div>

        <select className="bg-[#252424] text-white border md:px-2 md:py-1">
          <option>English</option>
        </select>
      </footer>
    </div>
  );
};

export default Dashbored;
