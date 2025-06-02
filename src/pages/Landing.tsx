import React from "react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/start-bg.jpg)" }}
      />

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Container (logo + buttons) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Logo Image */}
        <img
          src="/Logo HospoHub.png"
          alt="HospoHUB Logo"
          className="w-72 md:w-96 drop-shadow-lg"
        />

        {/* Buttons below the logo */}
        <div className="mt-12 flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
          {/* SIGN IN Button */}
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 border border-white rounded-md text-lg text-white hover:bg-white hover:text-black transition"
          >
            SIGN IN
          </button>

          {/* HOSPOHOUSE Button */}
          <button
            onClick={() => navigate("/hospohouse")}
            className="px-8 py-3 border border-white rounded-md text-lg text-white hover:bg-white hover:text-black transition"
          >
            HOSPOHOUSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
