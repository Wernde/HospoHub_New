import React from "react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/start-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <img
          src="/Logo-HospoHub.png"
          alt="HospoHUB Logo"
          className="w-72 md:w-96 drop-shadow-lg"
        />
        <div className="mt-12 flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
          <button
            onClick={() => navigate("/login")}
            aria-label="Navigate to sign-in page"
            className="px-8 py-3 border border-white rounded-md text-lg text-white hover:bg-white hover:text-black transition-colors"
          >
            SIGN IN
          </button>
          <button
            onClick={() => navigate("/hospohouse")}
            aria-label="Navigate to HospoHouse page"
            className="px-8 py-3 border border-white rounded-md text-lg text-white hover:bg-white hover:text-black transition-colors"
          >
            HOSPOHOUSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;