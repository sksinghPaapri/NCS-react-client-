import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../assets/ProductPage/ProductCard.svg";

export default function Modal({ showModal, cancelOption, index, item }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    cancelOption();
  }

  useEffect(() => {
    if (showModal) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [showModal]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[240px] h-[446px] sm:w-[620px] sm:h-[403px] xl:w-[800px] xl:h-[520px] transform overflow-hidden rounded-[10px] bg-white text-left align-middle shadow-xl transition-all">
                  <span
                    className="flex items-center justify-end cursor-pointer me-[12px] mt-[12px] sm:me-[17px] sm:mt-[14px] xl:me-[18px] xl:mt-[18px]"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#9D9C99]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  {/* modal body */}
                  {/* <div className="px-[40px] pb-[29px] pt-[5px] sm:px-[67px] sm:pb-[60.5px] sm:pt-[35px] xl:px-[92.5px] xl:pb-[67.5px] xl:pt-[40px] flex items-center justify-center"> */}
                  <div className="px-[40px] pb-[19px] sm:px-[67px] sm:pb-[40.5px] sm:pt-[22px] xl:px-[92.5px] xl:pt-[25px] xl:pb-0 flex items-center justify-center">
                    <div
                      className="w-[160px] h-[388px] sm:w-[486px] sm:h-[281px] lg:w-[615px] lg:h-[381px] flex flex-col sm:flex-row items-center justify-between gap-[20px] sm:gap-[50px] xl:gap-[60px]"
                      style={{ fontFamily: "Open Sans" }}
                    >
                      {/* section 1 Image */}
                      <div className="w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] xl:w-[380px] xl:h-[380px]">
                        <img
                          src={ProductCard}
                          // src={item?.name}
                          alt="Product"
                          className="object-cover w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] xl:w-[380px] xl:h-[380px]"
                        />
                      </div>
                      {/* section 2 content */}
                      <div className="w-[160px] h-[208px] sm:w-[156px] sm:h-[281px] xl:w-[175px] xl:h-[381px] flex flex-col gap-[12px] sm:gap-[20px] xl:gap-[40px]">
                        {/* design name */}
                        <div className="w-[160px] h-[47px] sm:w-[156px] sm:h-[59px] lg:w-[175px] xl:h-[64px] gap-[5px] flex flex-col justify-between">
                          <div className="w-[160px] h-[15px] sm:w-[156px] sm:h-[21px] xl:w-[175px] flex justify-between">
                            <div>
                              <p className="text-[10px] sm:text-[12px] text-[#9D9C99]">
                                Design Name
                              </p>
                            </div>
                            <div className="">
                              <p className=" text-[10px] sm:text-[12px] text-[#9D9C99]">
                                Color
                              </p>
                            </div>
                          </div>
                          <p className="w-[160px] h-[27px] sm:w-[104px] sm:h-[33px] xl:w-[121px] xl:h-[38px] text-[18px] sm:text-[24px] xl:text-[28px] font-semibold text-black text-nowrap">
                            27024-44
                          </p>
                        </div>
                        {/* price */}
                        <div className="w-[76px] h-[27px] sm:w-[95px] sm:h-[33px]">
                          <p className="text-[18px] sm:text-[24px] text-black text-nowrap">
                            $8.95{" "}
                            <span className="text-[#9D9C99] text-[16px] sm:text-[18px]">
                              / m
                            </span>
                          </p>
                        </div>
                        {/* details */}
                        <div className="text-[12px] sm:text-[14px] xl:text-[16px] w-[137px] h-[110px] sm:w-[156px] sm:h-[149px] xl:w-[175px] xl:h-[204px] text-black flex flex-col gap-[5px] sm:gap-[20px]">
                          <p className="font-bold w-[42px] h-[18px] sm:w-[49px] sm:h-[21px] xl:w-[56px] xl:h-[24px]">
                            Details
                          </p>
                          <div className="w-[137px] h-[87px] sm:w-[156px] sm:h-[108px] xl:w-[175px] xl:h-[160px] flex flex-col items-center gap-[5px] sm:gap-[8px] xl:gap-[10px]">
                            <div className="w-[136px] h-[18px] sm:w-[156px] sm:h-[21px] xl:w-[175px] xl:h-[24px] flex items-center justify-between">
                              <p>Details :</p>
                              <p>Lorem ipsum</p>
                            </div>
                            <div className="w-[136px] h-[18px] sm:w-[156px] sm:h-[21px] xl:w-[175px] xl:h-[24px] flex items-center justify-between">
                              <p>Details :</p>
                              <p>Lorem ipsum</p>
                            </div>
                            <div className="w-[136px] h-[18px] sm:w-[156px] sm:h-[21px] xl:w-[175px] xl:h-[24px] flex items-center justify-between">
                              <p>Details :</p>
                              <p>Lorem ipsum</p>
                            </div>
                            <div className="w-[136px] h-[18px] sm:w-[156px] sm:h-[21px] xl:w-[175px] xl:h-[24px] flex items-center justify-between">
                              <p>Details :</p>
                              <p>Lorem ipsum</p>
                            </div>
                            <div className="hidden w-[136px] h-[18px] sm:w-[156px] sm:h-[21px] xl:w-[175px] xl:h-[24px] xl:flex items-center justify-between">
                              <p>Details :</p>
                              <p>Lorem ipsum</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
