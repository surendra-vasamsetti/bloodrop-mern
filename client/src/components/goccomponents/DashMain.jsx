import React from "react";
import { Link } from "react-router-dom";

const DashMain = () => {
  return (
    <div className="gov-dash flex flex-wrap justify-center gap-5 relative w-full h-[40vh] -bottom-24">
      <Link
        to="/banks"
        className="divs w-[400px] h-[29vh] flex flex-col justify-center items-center rounded-lg bg-gray-300 hover:shadow-lg hover:shadow-red-500"
      >
        <i className="fa-regular fa-hospital text-3xl"></i>
        <h2>TOTAL BLOOD BANKS</h2>
        <h3>123</h3>
      </Link>
      <div className="divs w-[400px] h-[29vh] flex flex-col justify-center items-center rounded-lg bg-gray-300 hover:shadow-lg hover:shadow-red-500">
        <i className="fa-solid fa-person-circle-plus text-3xl"></i>
        <h2>TOTAL DONORS</h2>
        <h3>9284</h3>
      </div>
      <div className="divs w-[400px] h-[29vh] flex flex-col justify-center items-center rounded-lg bg-gray-300 hover:shadow-lg hover:shadow-red-500">
        <i className="fa-regular fa-hospital text-3xl"></i>
        <h2>TOTAL REGISTERED</h2>
        <h3>9284</h3>
      </div>
      <div className="divs w-[400px] h-[29vh] flex flex-col justify-center items-center rounded-lg bg-gray-300 hover:shadow-lg hover:shadow-red-500">
        <i className="fa-solid fa-house-chimney-medical text-3xl"></i>
        <h2>THALASSEMIA</h2>
        <h3>9284</h3>
      </div>
    </div>
  );
};

export default DashMain;
