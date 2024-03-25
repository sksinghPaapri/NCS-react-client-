import Banner from "../../assets/CollectionPage/Banner.svg";
import Breadcrum from "./Breadcrum";
import Pagination from "./Pagination";

import CollectionCategory from "./CollectionCategory";

const ProductCollection = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          style={{ fontFamily: "Open Sans" }}
          className="w-full flex flex-col items-center justify-center gap-[60px] sm:gap-[80px] xl:gap-[100px]"
          // className="w-[320px] sm:w-[768px] xl:w-[1280px] 2xl:w-[1728px] flex flex-col items-center justify-center gap-[60px] sm:gap-[80px] xl:gap-[100px]"
        >
          {/* top banner  */}
          <div className=" bg-white w-full h-[235px] sm:h-[257px] xl:h-[296px] flex items-center justify-center">
            {/* <div className=" bg-white w-[320px] h-[235px] sm:w-[768px] sm:h-[257px] xl:w-[1280px] xl:h-[296px] 2xl:w-[1728px] flex items-center justify-center"> */}
            <img
              src={Banner}
              alt="Image"
              className="object-cover w-full h-[235px] sm:h-[257px] xl:h-[296px]"
            />
          </div>

          {/* heading and breadcrums */}
          <div className="w-[320px] h-[114px] sm:w-[744px] sm:h-[82px] xl:w-[1280px] 2xl:w-[1320px] flex items-center justify-center">
            <div className="flex flex-col items-center sm:items-start justify-center gap-[20px] mx-[20px] sm:mx-[40px] xl:mx-[60px] 2xl:mx-0">
              {/* Heading  */}
              <div className="w-[280px] h-[76px] sm:w-[664px] sm:h-[44px] xl:w-[1160px] 2xl:w-[1320px]">
                <p className="text-[28px] sm:text-[32px] font-bold wrap text-start">
                  Holiday 2023 Release collections
                </p>
              </div>

              {/* Breadcrums */}
              <div className="w-full h-[18px]">
                <Breadcrum></Breadcrum>
              </div>
            </div>
          </div>

          {/*Main body */}
          <div className="w-[320px] sm:w-[744px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col items-center justify-center mb-[60px] sm:mb-[100px] gap-[60px]">
            {/* collection category */}
            <div className="w-[320px] sm:w-[744px] xl:w-[1160px] 2xl:w-[1320px]">
              <CollectionCategory />
            </div>

            {/* pagination */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 items-center justify-center">
              <div className="col-span-1"></div>
              <div className="col-span-3 grid grid-cols-subgrid items-center justify-center">
                <div className="col-start-1 sm:col-start-2">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCollection;
