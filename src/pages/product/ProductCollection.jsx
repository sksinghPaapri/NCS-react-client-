import Banner from "../../assets/CollectionPage/Banner.svg";
import Breadcrum from "./Breadcrum";
import Pagination from "./Pagination";

import CollectionCategory from "./CollectionCategory";

const ProductCollection = () => {
  return (
    <>
      <div style={{ fontFamily: "Open Sans" }}>
        {/* top banner  */}
        <div className=" bg-white">
          <img
            src={Banner}
            alt="Image"
            className="object-cover w-full h-[235px] sm:h-[257px] lg:h-[288px]"
          />
        </div>
        {/* Holiday 2023 Release Collection  */}
        <div className="mx-5 sm:mx-10 lg:mx-[80px] 3xl:mx-[200px] mt-[60px] sm:mt-[80px] lg:mt-[100px] max-w-7xl">
          <p className="text-[28px] sm:text-[32px] font-bold wrap text-start">
            Holiday 2023 Release collections
          </p>
        </div>

        {/* Breadcrums */}
        <Breadcrum></Breadcrum>

        {/* collection category */}
        <div className="mt-[60px] sm:mt-[80px] lg:mt-[100px]">
          <CollectionCategory />
        </div>

        {/* pagination */}
        <div className="grid grid-cols-1 gap-x-9 gap-y-10 md:grid-cols-4">
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCollection;
