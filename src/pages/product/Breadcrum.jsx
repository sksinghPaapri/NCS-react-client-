const Breadcrum = () => {
  return (
    <div className="">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex mt-[2px]">
            <p className="inline-flex text-[12px] font-medium text-[#6B6B66] hover:text-[#090800] hover:underline">
              Home
            </p>
          </li>
          <li>
            <div className="flex">
              {" / "}
              <p className="mt-[2px] ms-1 text-[12px] font-medium text-[#6B6B66] hover:text-[#090800] hover:underline md:ms-2">
                Category
              </p>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex">
              {" / "}
              <span className="mt-[2px] ms-1 text-[12px] font-medium text-[#6B6B66] md:ms-2 flex justify-center">
                Holiday 2023 Release Collections
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrum;
