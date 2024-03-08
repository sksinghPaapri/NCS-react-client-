import React, { useState } from "react";
import { Link } from "react-router-dom";

const regionsAndCustomersData = {
  regions: ["Region 1", "Region 2", "Region 3"],
  customers: ["Customer A", "Customer B", "Customer C"],
};

export default function RegionCustomers() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleCustomerChange = (event) => {
    setSelectedCustomer(event.target.value);
  };

  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Regions & Customers
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            <a href="#" className="font-medium">
              Please select a region and a customer you would like to place
              orders for below.
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-4  sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="region"
                  className="block text-sm font-bold text-gray-700 "
                >
                  Region*
                </label>
                <div className="mt-1">
                  <select
                    id="region"
                    name="region"
                    value={selectedRegion}
                    onChange={handleRegionChange}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                  >
                    <option value="">Select a region</option>
                    {regionsAndCustomersData.regions.map((region, index) => (
                      <option key={index} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="customer"
                  className="block text-sm font-bold text-gray-700"
                >
                  Customers*
                </label>
                <div className="mt-1">
                  <select
                    id="customer"
                    name="customer"
                    value={selectedCustomer}
                    onChange={handleCustomerChange}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                  >
                    <option value="">Select a customer</option>
                    {regionsAndCustomersData.customers.map(
                      (customer, index) => (
                        <option key={index} value={customer}>
                          {customer}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="cursor-pointer">
                <Link to={"/"}>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-300 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    SUBMIT
                  </button>
                </Link>
              </div>

              <div className="flex flex-col items-center">
                <span className="flex justify-center text-[#6B6B66] cursor-pointer">
                  <Link to={"/login"}>Return to sign in</Link>
                </span>
              </div>
            </form>

            <div className="mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
