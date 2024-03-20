import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const ShippingAddress = () => {
  // modalBox
  const [openModal, setOpenModal] = useState(null);
  const addressess = [
    {
      name: "CHRISTINA'S NORTHCOTT",
      address: "SHOP123 Fun Street Vaughan",
      city: "Ontario",
      country: "Canada",
      code: "000 000",
      defaultBillingAddress: true,
      defaultShippingAddress: true,
    },
    {
      name: "CHRISTINA'S NORTHCOTT",
      address: "SHOP123 Fun Street Vaughan",
      city: "Ontario",
      country: "Canada",
      code: "000 000",
      defaultBillingAddress: false,
      defaultShippingAddress: false,
    },
    {
      name: "CHRISTINA'S NORTHCOTT",
      address: "SHOP123 Fun Street Vaughan",
      city: "Ontario",
      country: "Canada",
      code: "000 000",
      defaultBillingAddress: false,
      defaultShippingAddress: false,
    },
  ];

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex items-center justify-center"
    >
      <div className="w-[320px] sm:w-[744px] xl:w-[1280px] 2x:w-[1728px] flex items-center justify-center">
        <div className="my-[80px] sm:my-[100px] w-[280px] sm:w-[624px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col items-center xl:flex-row xl:items-start gap-[60px] 2xl:gap-[100px]">
          {/* left side */}
          <div className="w-[280px] h-[258px] sm:w-[624px] xl:w-[280px] xl:h-[258px] flex flex-col gap-5">
            {/* heading */}
            <div className="w-[280px] h-[38px] sm:w-[624px] xl:w-[280px] text-center sm:text-start font-bold text-[28px]">
              Customer Profile
            </div>
            {/* horizontal line */}
            <hr className=" text-gray-500 bg-gray-500 h-1 w-[280px] sm:w-[624px] xl:w-[280px]" />
            {/* content */}
            <div className="w-[280px] h-[180px] flex flex-col sm:w-[624px] xl:w-[280px] bg-white">
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] xl:text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/customerProfile"}>
                  <p className="ms-[15px]">Personal Info</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] bg-[#F0EFEB] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/shippingAddress"}>
                  <p className="ms-[15px]">Shipping Addresses</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/profileChangePassword"}>
                  <p className="ms-[15px]">Change Password</p>
                </Link>
              </div>
              <div className=" w-[280px] h-[45px] sm:w-[624px] lg:w-[280px] text-[14px] text-center flex items-center cursor-pointer">
                <Link to={"/product-collection/communicationPreferences"}>
                  <p className="ms-[15px]"> Communication Preferences</p>
                </Link>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-[280px] h-[984px] sm:w-[624px] sm:h-[750px] xl:w-[820px] xl:h-[750px] 2xl:w-[940px] flex flex-col gap-[60px]">
            {/* Shipping Addresses */}
            <div className="w-[280px] sm:w-[624px] xl:w-[820px] flex flex-col gap-5">
              {/* heading */}
              <div className="w-[280px] h-[38px] font-bold text-[28px] text-center sm:text-start">
                Shipping Addresses
              </div>
              {/* horizontal line */}
              <hr className=" text-gray-500 bg-gray-500 h-[1px] w-[280px] sm:w-[624px] xl:w-[820px] 2xl:w-[940px]" />
              {/* content */}
              <div className="w-[280px] sm:w-[624px] xl:w-[820px] 2xl:w-[940px] gap-y-[20px] xl:gap-y-[30px] grid grid-cols-12 xl:grid-cols-12">
                {addressess.map((data, index) => (
                  <div
                    key={index}
                    className="w-[280px] h-[237px] sm:w-[309px] border-2 border-gray-300 rounded-md col-span-12 xl:col-span-5 flex flex-col p-[20px] justify-between"
                  >
                    {/* top section */}
                    <div className="w-[240px] text-[14px] h-[102px] sm:w-[269px] flex flex-col items-center justify-evenly">
                      <p className="w-[240px] h-[18px] sm:w-[269px]">
                        {data.name}
                      </p>
                      <p className="w-[240px] h-[18px] sm:w-[269px]">
                        {data.address}
                      </p>
                      <p className="w-[240px] h-[18px] sm:w-[269px]">
                        {data.city}
                      </p>
                      <p className="w-[240px] h-[18px] sm:w-[269px]">
                        {data.country}
                      </p>
                      <p className="w-[240px] h-[18px] sm:w-[269px]">
                        {data.code}
                      </p>
                    </div>
                    {/* bottom section */}
                    <div className="w-[240px] h-[55px] sm:w-[269px] flex items-center justify-between">
                      {/* left */}
                      <div className="w-[136px] h-[55px] flex flex-col justify-between text-[10px] font-bold">
                        {data?.defaultBillingAddress && (
                          <p className="w-[124px] h-[25px] bg-[#F0EFEB] flex items-center justify-center">
                            Default Billing Address
                          </p>
                        )}
                        {data?.defaultShippingAddress && (
                          <p className="w-[136px] h-[25px] bg-[#F0EFEB] flex items-center justify-center">
                            Default Shipping Address
                          </p>
                        )}
                      </div>
                      {/* right */}
                      <div className="w-[83px] h-[55px] text-[12px] flex items-end justify-between font-bold">
                        <Link to={"/product-collection/editShippingAddress"}>
                          <p className="w-[24px] h-[18px] text-[#E2A856]">
                            Edit
                          </p>
                        </Link>
                        <Link>
                          {/* modal */}
                          <div>
                            <DeleteModal
                              showModal={openModal === index}
                              cancelOption={() => setOpenModal(null)}
                              index={index + 1}
                            />
                          </div>
                          <div
                            onClick={() => {
                              setOpenModal(index);
                            }}
                          >
                            <p className="w-[49px] h-[18px] text-[#E2A856]">
                              Remove
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* button */}
              <div className="mt-[10px] w-full h-[49px] flex items-center justify-center sm:justify-start">
                <Link to={"/product-collection/addShippingAddress"}>
                  <button
                    className="w-[210px] h-[49px] uppercase text-center text-[16px] bg-[#E2A856] font-semibold text-white text-nowrap"
                    type="button"
                  >
                    add new address
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShippingAddress;
