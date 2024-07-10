import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GovBloodBankTable = () => {
  const { category } = useParams();
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/${category}`);
        const data = await response.json();
        setBloodBanks(data);
      } catch (error) {
        console.error("Error fetching blood bank data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)} Blood Banks
      </h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Blood Bank Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">First Registration Date</th>
            <th className="px-4 py-2">License No</th>
            <th className="px-4 py-2">From Date</th>
            <th className="px-4 py-2">To Date</th>
            <th className="px-4 py-2">Contact Person</th>
            <th className="px-4 py-2">Contact Person Email</th>
            <th className="px-4 py-2">Contact No</th>
            <th className="px-4 py-2">State</th>
            <th className="px-4 py-2">District</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Pincode</th>
          </tr>
        </thead>
        <tbody>
          {bloodBanks.map((bank) => (
            <tr key={bank._id}>
              <td className="border px-4 py-2">{bank.BloodBankName}</td>
              <td className="border px-4 py-2">{bank.category}</td>
              <td className="border px-4 py-2">{bank.firstRegistrationDate}</td>
              <td className="border px-4 py-2">{bank.LicenseNo}</td>
              <td className="border px-4 py-2">{bank.fromDate}</td>
              <td className="border px-4 py-2">{bank.ToDate}</td>
              <td className="border px-4 py-2">{bank.contactPerson}</td>
              <td className="border px-4 py-2">{bank.contactPersonEmail}</td>
              <td className="border px-4 py-2">{bank.contactNo}</td>
              <td className="border px-4 py-2">{bank.state}</td>
              <td className="border px-4 py-2">{bank.district}</td>
              <td className="border px-4 py-2">{bank.city}</td>
              <td className="border px-4 py-2">{bank.address}</td>
              <td className="border px-4 py-2">{bank.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GovBloodBankTable;
