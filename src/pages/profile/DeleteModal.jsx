import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export default function DeleteModal({ showModal, cancelOption, index }) {
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
                <Dialog.Panel className="w-[283px] h-[276px] sm:w-[523px] sm:h-[203px] transform overflow-hidden rounded-lg bg-white p-3 text-left align-middle shadow-xl transition-all">
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
                  <div className="flex items-center justify-center mt-4">
                    <div className="w-[283px] h-[196px] sm:w-[523px] sm:h-[103px] flex flex-col items-center justify-center gap-[30px] text-center">
                      <div className="w-[243px] h-[48px] sm:w-[443px] sm:h-[24px]">
                        Are you sure you want to delete this address?
                      </div>
                      <div className="w-[243px] h-[118px] sm:w-[285px] sm:h-[49px] flex items-center justify-between flex-col sm:flex-row">
                        <button className="w-[243px] sm:w-[130px] h-[49px] flex items-center justify-center bg-[#E2A856] text-white rounded-md cursor-pointer">
                          YES
                        </button>
                        <div
                          className="w-[243px] sm:w-[130px] h-[49px] flex items-center justify-center text-[#E2A856] bg-white rounded-md border-2 cursor-pointer border-[#E2A856]"
                          onClick={closeModal}
                        >
                          NO
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
