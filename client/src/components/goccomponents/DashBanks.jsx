import React from "react";
import { useNavigate } from "react-router-dom";

const DashBanks = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/bloodbank-table/${category}`);
  };

  return (
    <div className="gov-dash flex flex-wrap justify-center gap-5 relative w-full h-[40vh] -bottom-24">
      <div
        className="divs w-[400px] h-[29vh] flex flex-col justify-center items-center rounded-lg bg-gray-300 hover:shadow-lg hover:shadow-red-500 cursor-pointer"
        onClick={() => handleCategoryClick("government")}
      >
        <i className="fa-regular fa-hospital text-3xl"></i>
        <h2>Government Blood Banks</h2>
        <h3>123</h3>
      </div>
      <div
        className="divs w-[400px] h-[29vh] flex flex-col justify-center items-center rounded-lg bg-gray-300 hover:shadow-lg hover:shadow-red-500 cursor-pointer"
        onClick={() => handleCategoryClick("redcross")}
      >
        <i className="fa-solid fa-person-circle-plus text-3xl"></i>
        <h2>Red-Cross Blood Banks</h2>
        <h3>9284</h3>
      </div>
      <div
        className="divs w-[400px] h-[29vh] flex flex-col justify-center items-center rounded-lg bg-gray-300 hover:shadow-lg hover:shadow-red-500 cursor-pointer"
        onClick={() => handleCategoryClick("public")}
      >
        <i className="fa-regular fa-hospital text-3xl"></i>
        <h2>Public Blood Banks</h2>
        <h3>9284</h3>
      </div>
      <div
        className="divs w-[400px] h-[29vh] flex flex-col justify-center items-center rounded-lg bg-gray-300 hover:shadow-lg hover:shadow-red-500 cursor-pointer"
        onClick={() => handleCategoryClick("voluntary")}
      >
        <i className="fa-solid fa-house-chimney-medical text-3xl"></i>
        <h2>Voluntary Blood Banks</h2>
        <h3>9284</h3>
      </div>
    </div>
  );
};

export default DashBanks;
