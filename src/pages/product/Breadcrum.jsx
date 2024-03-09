const Breadcrum = () => {
  return (
    <div className="">
      <nav
        className="flex mt-5 mb-14 max-w-7xl mx-5 sm:mx-10 lg:mx-[80px] 3xl:mx-[200px]"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <p className="inline-flex items-center text-sm font-medium text-[#6B6B66] hover:text-[#090800] hover:underline">
              Home
            </p>
          </li>
          <li>
            <div className="flex items-center">
              {" / "}
              <p className="ms-1 text-sm font-medium text-[#6B6B66] hover:text-[#090800] hover:underline md:ms-2">
                Category
              </p>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              {" / "}
              <span className="ms-1 text-sm font-medium text-[#6B6B66] md:ms-2">
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
