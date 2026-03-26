import React, {useContext} from "react";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context.jsx";

function Header() {
  const navigate = useNavigate();
  const {userData} = useContext(AppContext);
  return (
    <div className="flex flex-col items-center text-center text-gray-800">
      <img
        src={assets.header_img}
        alt=""
        className="w-36 h-36 rounded-full mb-4"
      />
      <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2">
        Hey, {userData? userData.name : "Developer"}!
        <img src={assets.hand_wave} className="w-8 aspect-square" alt="" />
      </h1>
      <h2 className="text-xl sm:text-3xl font-semibold mb-2">
        Welcome to our app
      </h2>
      <p className="mb-6 max-w-md">
        Let's satrt with a quick product tour and we will have you up
      </p>

      <button onClick={()=> navigate('/login')} className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all">
        Get Started
      </button>
    </div>
  );
}

export default Header;
