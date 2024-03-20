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
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center my-[80px] sm:my-[100px]"
    >
      <div className="w-[280px] h-[446px] sm:w-[624px] sm:h-[396px] xl:w-[1160] 2xl:w-[1608] flex flex-col justify-center items-center gap-10">
        {/* top headings */}
        <div className="w-[280px] h-[122px] sm:w-[624px] sm:h-[72px] xl:w-[1160] 2xl:w-[1608] flex flex-col items-center justify-center gap-[10px]">
          <h2 className="w-[280px] h-[76px] sm:w-[624px] sm:h-[44px] xl:w-[1160] 2xl:w-[1608] text-center text-[28px] sm:text-[32px] font-bold text-gray-900 tracking-wider sm:tracking-normal">
            Regions & Customers
          </h2>
          <p className="w-[280px] h-[36px] sm:w-[624px] sm:h-[18px] xl:w-[1160] 2xl:w-[1608] text-center text-[12px] text-gray-600 ">
            Please select a region and a customer you would like to place orders
            for below.
          </p>
        </div>

        <div className="w-[280px] h-[284px] sm:w-[320px] flex flex-col justify-center items-center">
          <div className="w-[280px] h-[172px] sm:w-[320px] flex flex-col items-center justify-center gap-5">
            {/* region drop down */}
            <div className="w-[280px] h-[76px] sm:w-[320px] flex flex-col items-center justify-between">
              <label
                htmlFor="region"
                className="block text-[14px] font-bold text-gray-700 h-[21px] text-start w-[280px] sm:w-[320px]"
              >
                Region*
              </label>
              <div className="h-[45px]">
                <select
                  id="region"
                  name="region"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  className="w-[280px] sm:w-[320px] appearance-none rounded relative block px-3 py-2 border text-gray-900 focus:outline-none focus:z-10 sm:text-[14px]"
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

            {/* customer dropdown */}
            <div className="w-[280px] h-[76px] sm:w-[320px] flex flex-col justify-between">
              <label
                htmlFor="customer"
                className="block text-[14px] font-bold text-gray-700 h-[21px] w-[280px] sm:w-[320px]"
              >
                Customers*
              </label>
              <div className="h-[45px]">
                <select
                  id="customer"
                  name="customer"
                  value={selectedCustomer}
                  onChange={handleCustomerChange}
                  className="w-[280px] sm:w-[320px] placeholder:text-gray-100 appearance-none rounded-md relative block px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:z-10 sm:text-[14px]"
                >
                  <option value="">Select a customer</option>
                  {regionsAndCustomersData.customers.map((customer, index) => (
                    <option key={index} value={customer}>
                      {customer}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-[30px] w-[290px] sm:w-[320px] h-[82px] flex flex-col items-center justify-between">
            {/* button */}
            <div className="w-[280px] h-[49px] sm:w-[320px] flex items-center justify-center">
              <Link to={"/retailerRegistrationComplete"}>
                <button
                  type="submit"
                  className="w-[280px] h-[49px] sm:w-[320px] uppercase text-base font-semibold cursor-pointer rounded text-white bg-[#E2A856]"
                >
                  Submit
                </button>
              </Link>
            </div>

            {/*return to login */}
            <div className="flex text-nowrap justify-center text-[#6B6B66] text-center cursor-pointer text-[12px] h-[18px]">
              <Link to={"/login"}>Return to sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
