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
                <Dialog.Panel className="w-full max-w-3xl max-h-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div
                    className="flex items-center justify-end cursor-pointer"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  {/* modal body */}
                  <div className="flex items-center justify-center">
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center w-[160px] h-[388px] sm:w-[486px] sm:h-[281px] lg:w-[615px] lg:h-[381px] gap-5 sm:gap-44 lg:gap-56"
                      style={{ fontFamily: "Open Sans" }}
                    >
                      {/* section 1 Image */}
                      <div className="w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px]">
                        <img
                          src={ProductCard}
                          // src={item?.name}
                          alt="Product"
                          className="sm:object-cover w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px]"
                        />
                      </div>
                      {/* section 2 text */}
                      <div className="flex flex-col gap-3 sm:gap-5 lg:gap-10">
                        {/* design name */}
                        <div className="w-[160px] h-[47px] sm:w-[156px] sm:h-[59px] lg:w-[175px] lg:h-[64px]">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-[12px] text-gray-400">
                                Design Name
                              </p>
                            </div>
                            <div className="">
                              <p className="text-[12px] text-gray-400">Color</p>
                            </div>
                          </div>
                          <p className="mt-1 text-lg font-semibold">27024-44</p>
                        </div>
                        {/* price */}
                        <div className="w-[77px] h-[27px] sm:w-[96px] sm:h-[33px]">
                          <p className="text-lg">
                            $8.95 <span className="text-gray-400">/m</span>
                          </p>
                        </div>
                        {/* details */}
                        <div className="text-[12px] sm:text-[14px] w-[137px] h-[110px] sm:w-[156px] sm:h-[149px] lg:w-[175px] lg:h-[204px]">
                          <p className="font-bold">Details</p>
                          <div className="flex items-center justify-between">
                            <p>Details :</p>
                            <p>Lorem ipsum</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p>Details :</p>
                            <p>Lorem ipsum</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p>Details :</p>
                            <p>Lorem ipsum</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p>Details :</p>
                            <p>Lorem ipsum</p>
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
