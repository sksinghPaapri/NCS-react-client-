import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import PageBanner from "../../assets/ProductPage/Banner.png";
import ProductCard from "../../assets/ProductPage/ProductCard.svg";
import ProductCard1 from "../../assets/ProductPage/ProductCard1.svg";
import ProductCard2 from "../../assets/ProductPage/ProductCard2.svg";
import ProductCard3 from "../../assets/ProductPage/ProductCard3.svg";
import ProductCard4 from "../../assets/ProductPage/ProductCard4.svg";
import ProductCard5 from "../../assets/ProductPage/ProductCard5.svg";
import ProductCard6 from "../../assets/ProductPage/ProductCard6.svg";
import ProductCard7 from "../../assets/ProductPage/ProductCard7.svg";
import ProductCard8 from "../../assets/ProductPage/ProductCard8.svg";
import ProductCard9 from "../../assets/ProductPage/ProductCard9.svg";
import ProductCard10 from "../../assets/ProductPage/ProductCard10.svg";
import ProductCard11 from "../../assets/ProductPage/ProductCard11.svg";
import ProductCard12 from "../../assets/ProductPage/ProductCard12.svg";
import ProductCard13 from "../../assets/ProductPage/ProductCard13.svg";
import ProductCard14 from "../../assets/ProductPage/ProductCard14.svg";
import BigProduct1 from "../../assets/ProductPage/BigCard/BigProduct1.svg";
import BigProduct2 from "../../assets/ProductPage/BigCard/BigProduct2.svg";
import BigProduct3 from "../../assets/ProductPage/BigCard/BigProduct3.svg";
import multiBigImg from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg.svg";
import multiBigImg1 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg1.svg";
import multiBigImg2 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg2.svg";
import multiBigImg3 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg3.svg";
import multiBigImg4 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg4.svg";
import multiBigImg5 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg5.svg";
import multiBigImg6 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg6.svg";
import multiBigImg7 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg7.svg";
import multiBigImg8 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg8.svg";
import multiBigImg9 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg9.svg";
import multiBigImg10 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg10.svg";
import multiBigImg11 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg11.svg";
import multiBigImg12 from "../../assets/ProductPage/Multi/MultiBigSize/multiBigImg12.svg";
import multiNormalImg from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg.svg";
import multiNormalImg1 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg1.svg";
import multiNormalImg2 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg2.svg";
import multiNormalImg3 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg3.svg";
import multiNormalImg4 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg4.svg";
import multiNormalImg5 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg5.svg";
import multiNormalImg6 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg6.svg";
import multiNormalImg7 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg7.svg";
import multiNormalImg8 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg8.svg";
import multiNormalImg9 from "../../assets/ProductPage/Multi/MultiNormalSize/multiNormalImg9.svg";
import multiPatternImg from "../../assets/ProductPage/Multi/MultiPatternImg/multiPatternImg.svg";
import multiPatternImg1 from "../../assets/ProductPage/Multi/MultiPatternImg/multiPatternImg1.svg";
import multiPatternImg2 from "../../assets/ProductPage/Multi/MultiPatternImg/multiPatternImg2.svg";
import multiPatternImg3 from "../../assets/ProductPage/Multi/MultiPatternImg/multiPatternImg3.svg";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// for pattern card
const patternColorWay = [
  { name: ProductCard13 },
  { name: ProductCard14 },
  { name: multiPatternImg, "price per m": 8.95 },
  { name: multiPatternImg1, "price per m": 8.95 },
  { name: multiPatternImg2, "price per m": 8.95 },
  { name: multiPatternImg3, "price per m": 8.95 },
];

const ProductDetail = () => {
  // login or not login user
  const [login, setLogin] = useState(true);

  // modalBox
  const [openModal, setOpenModal] = useState(null);

  // COLORWAY DATA STARTS HERE
  // for color only
  const [normalCardSizeOnly, setNormalCardSizeOnly] = useState(false);
  const [bigAndNormalCardSize, setBigAndNormalCardSIze] = useState(false);
  const [multiPanel, setMultiPanel] = useState(false);

  const colorwayData = [
    {
      colorwayName: "Single Colorway",
      items: [
        // normalCard
        { name: ProductCard, "price per m": 8.95, isOverSized: false },
        { name: ProductCard1, "price per m": 8.95, isOverSized: false },
        { name: ProductCard2, "price per m": 8.95, isOverSized: false },
        { name: ProductCard3, "price per m": 8.95, isOverSized: false },
        { name: ProductCard4, "price per m": 8.95, isOverSized: false },
        { name: ProductCard5, "price per m": 8.95, isOverSized: false },
        { name: ProductCard6, "price per m": 8.95, isOverSized: false },
        { name: ProductCard7, "price per m": 8.95, isOverSized: false },
        { name: ProductCard8, "price per m": 8.95, isOverSized: false },
        { name: ProductCard9, "price per m": 8.95, isOverSized: false },
        { name: ProductCard10, "price per m": 8.95, isOverSized: false },
        { name: ProductCard11, "price per m": 8.95, isOverSized: false },
        { name: ProductCard12, "price per m": 8.95, isOverSized: false },
        // bigAndNormal BigCard
        { name: BigProduct1, "price per m": 8.95, isOverSized: true },
        { name: BigProduct2, "price per m": 8.95, isOverSized: true },
        { name: BigProduct3, "price per m": 8.95, isOverSized: true },
        // multi big card
        // { name: multiBigImg, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg1, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg2, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg3, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg4, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg5, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg6, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg7, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg8, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg9, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg10, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg11, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg12, "price per m": 8.95, isOverSized: true },
        // multi normal card
        // { name: multiNormalImg, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg1, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg2, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg3, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg4, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg5, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg6, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg7, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg8, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg9, "price per m": 8.95, isOverSized: false },
      ],
    },
    {
      colorwayName: "Double Colorway",
      items: [
        // normalCard
        { name: ProductCard, "price per m": 8.95, isOverSized: false },
        { name: ProductCard1, "price per m": 8.95, isOverSized: false },
        { name: ProductCard2, "price per m": 8.95, isOverSized: false },
        { name: ProductCard3, "price per m": 8.95, isOverSized: false },
        { name: ProductCard4, "price per m": 8.95, isOverSized: false },
        { name: ProductCard5, "price per m": 8.95, isOverSized: false },
        { name: ProductCard6, "price per m": 8.95, isOverSized: false },
        { name: ProductCard7, "price per m": 8.95, isOverSized: false },
        { name: ProductCard8, "price per m": 8.95, isOverSized: false },
        { name: ProductCard9, "price per m": 8.95, isOverSized: false },
        { name: ProductCard10, "price per m": 8.95, isOverSized: false },
        { name: ProductCard11, "price per m": 8.95, isOverSized: false },
        { name: ProductCard12, "price per m": 8.95, isOverSized: false },
        // // bigAndNormal BigCard
        { name: BigProduct1, "price per m": 8.95, isOverSized: true },
        { name: BigProduct2, "price per m": 8.95, isOverSized: true },
        { name: BigProduct3, "price per m": 8.95, isOverSized: true },
        // multi big card
        // { name: multiBigImg, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg1, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg2, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg3, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg4, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg5, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg6, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg7, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg8, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg9, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg10, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg11, "price per m": 8.95, isOverSized: true },
        // { name: multiBigImg12, "price per m": 8.95, isOverSized: true },
        // multi normal card
        // { name: multiNormalImg, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg1, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg2, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg3, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg4, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg5, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg6, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg7, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg8, "price per m": 8.95, isOverSized: false },
        // { name: multiNormalImg9, "price per m": 8.95, isOverSized: false },
      ],
    },
  ];

  const colorwayAllProductData =
    colorwayData &&
    colorwayData?.filter((item) => item.hasOwnProperty("colorwayName"));

  const filteredProductsByColorway = colorwayAllProductData.map((colorway) => {
    const filteredNormalCards = colorway.items.filter(
      (item) => !item.isOverSized
    );
    const filteredBigCards = colorway.items.filter((item) => item.isOverSized);

    return {
      colorwayName: colorway.colorwayName,
      filteredNormalCards: filteredNormalCards,
      filteredBigCards: filteredBigCards,
    };
  });

  // colorwaya data for all colorway
  useEffect(() => {
    filteredProductsByColorway.forEach((colorway) => {
      const filteredNormalCardFromColorwayData = colorway.filteredNormalCards;
      const filteredBigCardFromColorwayData = colorway.filteredBigCards;

      if (
        filteredNormalCardFromColorwayData.length > 0 &&
        filteredBigCardFromColorwayData.length == 0
      ) {
        setNormalCardSizeOnly(true);
        setBigAndNormalCardSIze(false);
        setMultiPanel(false);
      }
      if (
        filteredNormalCardFromColorwayData.length > 0 &&
        filteredBigCardFromColorwayData.length > 0 &&
        filteredNormalCardFromColorwayData.length >
          filteredBigCardFromColorwayData.length
      ) {
        setNormalCardSizeOnly(false);
        setBigAndNormalCardSIze(true);
        setMultiPanel(false);
      }
      if (
        filteredNormalCardFromColorwayData.length > 0 &&
        filteredBigCardFromColorwayData.length > 0 &&
        filteredNormalCardFromColorwayData.length <
          filteredBigCardFromColorwayData.length
      ) {
        setNormalCardSizeOnly(false);
        setBigAndNormalCardSIze(false);
        setMultiPanel(true);
      }
    });
  }, [filteredProductsByColorway]);

  // for all colorway card image hover
  const [isHovered, setIsHovered] = useState(
    Array(filteredProductsByColorway.filteredNormalCards).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
  };
  // COLORWAY DATA ENDS HERE

  // NON-COLORWAY DATA STARTS HERE

  // NON COLOR WAY DATA
  const nonColorwayData = [
    // normalCard
    { name: ProductCard, "price per m": 8.95, isOverSized: false },
    { name: ProductCard1, "price per m": 8.95, isOverSized: false },
    { name: ProductCard2, "price per m": 8.95, isOverSized: false },
    { name: ProductCard3, "price per m": 8.95, isOverSized: false },
    { name: ProductCard4, "price per m": 8.95, isOverSized: false },
    { name: ProductCard5, "price per m": 8.95, isOverSized: false },
    { name: ProductCard6, "price per m": 8.95, isOverSized: false },
    { name: ProductCard7, "price per m": 8.95, isOverSized: false },
    { name: ProductCard8, "price per m": 8.95, isOverSized: false },
    { name: ProductCard9, "price per m": 8.95, isOverSized: false },
    { name: ProductCard10, "price per m": 8.95, isOverSized: false },
    { name: ProductCard11, "price per m": 8.95, isOverSized: false },
    { name: ProductCard12, "price per m": 8.95, isOverSized: false },
    // bigAndNormal BigCard
    { name: BigProduct1, "price per m": 8.95, isOverSized: true },
    { name: BigProduct2, "price per m": 8.95, isOverSized: true },
    { name: BigProduct3, "price per m": 8.95, isOverSized: true },
    // multi big card
    { name: multiBigImg, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg1, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg2, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg3, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg4, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg5, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg6, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg7, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg8, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg9, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg10, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg11, "price per m": 8.95, isOverSized: true },
    { name: multiBigImg12, "price per m": 8.95, isOverSized: true },
    // multi normal card
    // { name: multiNormalImg, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg1, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg2, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg3, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg4, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg5, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg6, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg7, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg8, "price per m": 8.95, isOverSized: false },
    // { name: multiNormalImg9, "price per m": 8.95, isOverSized: false },
  ];

  // for noncolorway only
  const [nonColorwayNormalCardSizeOnly, setNonColorwayNormalCardSizeOnly] =
    useState(false);
  const [nonColorwayBigAndNormalCardSize, setNonColorwayBigAndNormalCardSIze] =
    useState(false);
  const [nonColorwayMultiPanel, setnonColorwayMultiPanel] = useState(false);

  const filteredNormalCardsNonColorway = nonColorwayData.filter(
    (item) => !item.isOverSized
  );
  const filteredBigCardsNonColorway = nonColorwayData.filter(
    (item) => item.isOverSized
  );

  // Noncolorway data
  useEffect(() => {
    if (
      filteredNormalCardsNonColorway.length > 0 &&
      filteredBigCardsNonColorway.length === 0
    ) {
      setNonColorwayNormalCardSizeOnly(true);
      setNonColorwayBigAndNormalCardSIze(false);
      setnonColorwayMultiPanel(false);
    }
    if (
      filteredNormalCardsNonColorway.length > 0 &&
      filteredBigCardsNonColorway.length > 0 &&
      filteredNormalCardsNonColorway.length > filteredBigCardsNonColorway.length
    ) {
      setNonColorwayNormalCardSizeOnly(false);
      setNonColorwayBigAndNormalCardSIze(true);
      setnonColorwayMultiPanel(false);
    }
    if (
      filteredNormalCardsNonColorway.length > 0 &&
      filteredBigCardsNonColorway.length > 0 &&
      filteredNormalCardsNonColorway.length < filteredBigCardsNonColorway.length
    ) {
      setNonColorwayNormalCardSizeOnly(false);
      setNonColorwayBigAndNormalCardSIze(false);
      setnonColorwayMultiPanel(true);
    }
  }, [filteredNormalCardsNonColorway, filteredBigCardsNonColorway]);

  // for all noncolorway card image hover
  const [isHoveredNonColorWayNormalCard, setIsHoveredNonColorWayNormalCard] =
    useState(Array(filteredNormalCardsNonColorway.length).fill(false));
  const [isHoveredNonColorWayBigCard, setIsHoveredNonColorWayBigCard] =
    useState(Array(filteredBigCardsNonColorway.length).fill(false));

  const handleMouseEnterNonColorWayNormalCard = (index) => {
    const updatedHoverState = [...isHoveredNonColorWayNormalCard];
    updatedHoverState[index] = true;
    setIsHoveredNonColorWayNormalCard(updatedHoverState);
  };

  const handleMouseLeaveNonColorWayNormalCard = (index) => {
    const updatedHoverState = [...isHoveredNonColorWayNormalCard];
    updatedHoverState[index] = false;
    setIsHoveredNonColorWayNormalCard(updatedHoverState);
  };
  const handleMouseEnterNonColorWayBigCard = (index) => {
    const updatedHoverState = [...isHoveredNonColorWayBigCard];
    updatedHoverState[index] = true;
    setIsHoveredNonColorWayBigCard(updatedHoverState);
  };

  const handleMouseLeaveNonColorWayBigCard = (index) => {
    const updatedHoverState = [...isHoveredNonColorWayBigCard];
    updatedHoverState[index] = false;
    setIsHoveredNonColorWayBigCard(updatedHoverState);
  };
  // NON-COLORWAY DATA ENDS HERE

  // pattern colorway popup view details
  const [patterncolorway, setPatterncolorway] = useState(
    Array(patternColorWay.length).fill(false)
  );

  const handlePatternColorwayMouseEnter = (index) => {
    const updatedHoverStates = [...patterncolorway];
    updatedHoverStates[index] = true;
    setPatterncolorway(updatedHoverStates);
  };
  const handlePatternColorwayMouseLeave = (index) => {
    const updatedHoverStates = [...patterncolorway];
    updatedHoverStates[index] = false;
    setPatterncolorway(updatedHoverStates);
  };

  return (
    <>
      <div
        className="bg-white flex flex-col items-center justify-center gap-[60px] sm:gap-20 xl:gap-[60px] mb-[60px] sm:mb-[100px]"
        style={{ fontFamily: "Open Sans" }}
      >
        {/* section 1 */}
        {/* top banner  */}
        <div className="w-full h-[235px] sm:h-[257px] xl:h-[296px]">
          <img
            src={PageBanner}
            alt="Image"
            className="object-cover h-[235px] sm:h-[257px] xl:h-[296px] w-full"
          />
        </div>
        {/* section 2 */}
        <div className="w-[320px] sm:w-[744px] h-[376px] sm:h-[222px] xl:w-[1160px] xl:h-[96px] 2xl:w-[1320px] grid grid-cols-1 xl:grid-cols-2 items-center justify-items-center xl:items-end xl:justify-items-start gap-10 xl:gap-0 ">
          <div className="w-[280px] h-[132px] sm:w-[539px] sm:h-[100px] xl:h-[96px] col-span-1 flex flex-col gap-[10px] lg:gap-2 text-center lg:text-left">
            <div className="text-[14px] hover:underline cursor-pointer">
              <Link to={"/"}>by Simon Treadwell</Link>
            </div>
            <div className="text-[28px] lg:text-[32px] font-bold">
              <p>'Twas The Night Before Christmas</p>
            </div>
            <div className="text-[14px]">
              <p>Coming to stores in June, 2024</p>
            </div>
          </div>

          <div className="xl:ms-[150px] 2xl:ms-52 w-[204px] h-[204px] sm:w-[448px] sm:h-[82px] xl:w-[428px] xl:h-[82px] flex flex-col sm:flex-row items-center justify-between lg:justify-end mx-auto gap-10 sm:gap-5 text-center">
            {/* product finder  */}
            <div className="text-center text-base font-bold flex flex-col gap-[15px]">
              <p className="text-left">Product Finder</p>

              {/*product finder dropdown input box */}
              <div className="w-[204px] h-[40px] bg-white">
                <Menu
                  as="div"
                  className=" relative flex justify-start text-left"
                >
                  <div>
                    <Menu.Button className="inline-flex w-[204px] h-[40px] items-center justify-between gap-x-1.5 bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sm">
                      <div className="text-[14px] text-[#9D9C99] font-semibold">
                        Find Retailers
                      </div>
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 mt-2 w-[204px] h-[40px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 bg-white">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/product-finder"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-[14px]"
                              )}
                            >
                              Online Retailers
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/product-finder"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-[14px]"
                              )}
                            >
                              In-Store Shopping
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/product-finder"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-[14px]"
                              )}
                            >
                              License
                            </Link>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-[14px]"
                                )}
                              >
                                International
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/*product finder Dropdown menu  */}
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-[14px] text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* fabric files */}
            <div className="flex flex-col gap-[15px]">
              <div className="text-base font-bold">
                <p className="text-left">Fabric Files</p>
              </div>
              <div className="flex justify-start w-[204px] h-[40px]">
                <button
                  type="button"
                  className=" text-white bg-[#E2A856] rounded-[4px] uppercase text-[14px] text-center mb-10 w-[204px] h-[40px] lg:tracking-tighter hover:bg-[#090800] font-semibold"
                >
                  Download fabric files
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div
          className={`${
            login
              ? "mx-auto bg-[#D9D2CB] w-[280px] h-[276px] sm:w-[664px] sm:h-[132px] xl:w-[1160px] xl:h-[114px] 2xl:w-[1320px] flex items-center justify-items-center text-center font-bold px-[30px] py-[40px] text-base"
              : "mx-auto bg-white w-[280px] h-[276px] sm:w-[664px] sm:h-[132px] xl:w-[1160px] xl:h-[114px] 2xl:w-[1320px] flex items-center justify-items-center text-center font-bold px-[30px] py-[40px] text-base"
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lectus arcu bibendum at varius
            pharetra vel. Semper quis lectus at volutpat diam ut.
          </p>
        </div>
        {/* section 4 */}
        {/* breadcrum */}
        <div className="w-[280px] h-[18px] sm:w-[664px] sm:h-[18px] xl:w-[1160px] 2xl:w-[1320px] flex justify-start">
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
        {/* products count and buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between w-[280px] h-[159px] sm:w-[664px] sm:h-[39px] xl:w-[1160px] 2xl:w-[1320px] gap-10 sm:gap-0 ">
          <div className="text-[14px] text-nowrap text-center sm:text-start w-[280px] sm:w-[78px] h-[39px] flex items-center justify-center sm:items-end">
            13 Products
          </div>
          {login && (
            <div className="w-[280px] h-[98px] sm:w-[478px] sm:h-[39px] flex flex-col sm:flex-row items-center justify-between">
              {/* buttons */}
              <div className="w-[184px] h-[39px] flex items-center justify-center">
                <button
                  type="button"
                  className=" text-white bg-[#E2A856] font-semibold rounded w-[184px] h-[39px] text-center hover:bg-[#090800] text-[14px]"
                >
                  Add Full Collection
                </button>
              </div>
              <div className="w-[274px] h-[39px] flex justify-center">
                <button
                  type="button"
                  className="hover:bg-[#090800] text-white bg-[#E2A856] font-semibold rounded w-[274px] h-[39px] text-center text-[14px]"
                >
                  Add Full Collection - Half Piece
                </button>
              </div>
            </div>
          )}
        </div>
        {/* section 5 */}
        {/* product section */}
        {/* horizontal line  */}
        <div className="mx-5 sm:mx-7 lg:mx-12 min-w-72 bg-[#CECECC] text-[#CECECC] h-[0.1rem] sm:w-[93vw] lg:w-[91vw] xl:w-[81vw] 2xl:w-[86vw] xl:mx-auto"></div>

        {/* COLORWAY PRODUCT FOR NORMAL , BIGANDNORMAL , MULTI CARD */}
        {filteredProductsByColorway.map((item, index) => {
          return (
            <div key={index}>
              <div className="mb-[60px] xl:mb-[40px] w-[280px] h-[96px] sm:w-[664px] sm:h-[96px] xl:w-[1160px] 2xl:w-[1320px] xl:h-[39px] grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-[30px] xl:gap-0 items-center justify-center xl:justify-between">
                <div className="col-span-1 hidden xl:flex h-[39px]"></div>
                <div className="col-span-1 h-[39px] flex items-center justify-center">
                  <p className="font-bold text-center text-[18px]">
                    {item?.colorwayName}
                  </p>
                </div>
                {login && (
                  <div className="flex justify-center xl:justify-end col-span-1 h-[39px]">
                    <div className="w-[280px] sm:w-[664px] xl:w-[223px] flex items-center justify-center">
                      <button
                        type="button"
                        className=" text-black bg-white border-2 border-black h-[39px] rounded-[4px] font-semibold text-center w-[223px] hover:bg-[#E2A856] hover:text-white hover:border-[#E2A856] text-[14px]"
                      >
                        Add This Colorway Only
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {normalCardSizeOnly && (
                <div className="w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid grid-cols-2 sm:grid-cols-3 mx-auto xl:grid-cols-5 justify-items-center grid-flow-row gap-x-[20px] sm:gap-x-[62px] xl:gap-x-[65px] 2xl:gap-x-[105px] gap-y-[40px]">
                  {item.filteredNormalCards?.map((item, index) => (
                    <div
                      key={index}
                      className={`w-[130px] ${
                        login
                          ? "h-[266px] sm:h-[326px]"
                          : "h-[216px] sm:h-[288px]"
                      }   sm:w-[180px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                    >
                      {/* modal */}
                      <div>
                        <Modal
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
                        <div className="flex flex-col gap-[15px] sm:gap-[20px]">
                          <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                          >
                            <img
                              src={item.name}
                              alt="Product"
                              className="h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] object-cover"
                            />
                            {isHovered[index] && (
                              <div className="absolute w-[130px] h-[43.33px] sm:w-[180px] sm:h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                                <span className="text-white">View Details</span>
                              </div>
                            )}
                          </div>

                          <div
                            className={`${
                              login
                                ? "h-[121px] sm:h-[126px]"
                                : "h-[71px] sm:h-[88px]"
                            } w-[130px]  sm:w-[180px] flex items-start justify-center`}
                          >
                            <div
                              className={`flex flex-col ${
                                login
                                  ? "h-[106px] sm:h-[126px]"
                                  : "h-[56px] sm:h-[68px]"
                              } w-[120px] sm:w-[180px] gap-[5px] sm:gap-[14px] items-center`}
                            >
                              <div className="w-[120px] h-[56px] sm:w-[160px] sm:h-[47px] flex flex-col items-center justify-between">
                                <div className="w-[120px] h-[15px] sm:h-[21px] sm:w-[160px] overflow-hidden text-nowrap flex items-center justify-between">
                                  <p className="w-[63px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99]">
                                    Design Name
                                  </p>
                                  <p className="w-[25px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99] text-end">
                                    Color
                                  </p>
                                </div>
                                <p className="font-semibold w-[120px] h-[36px] sm:h-[21px] sm:w-[160px] text-[12px] sm:text-[14px]">
                                  27025-10
                                </p>
                              </div>
                              {/* for log in user */}
                              {login && (
                                <div className="w-[120px] h-[45px] sm:w-[160px]">
                                  <div className="flex items-end justify-between">
                                    <div className="w-[42px] h-[39px] sm:w-[71px] sm:h-[27px] flex flex-col items-center justify-between sm:flex-row">
                                      <p className="text-[16px] sm:text-[18px] font-semibold w-[42px] h-[24px] sm:w-[47px] sm:h-[27px] flex items-center justify-center">
                                        ${item["price per m"]}
                                      </p>
                                      <span className="w-[16px] h-[15px] sm:w-[19px] sm:h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                        / m{" "}
                                      </span>
                                    </div>
                                    <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                      {/* quantity button */}

                                      <form className="w-[60px] h-[20px]">
                                        <label
                                          htmlFor="quantity-input"
                                          className="block text-[14px] font-medium text-gray-900"
                                        ></label>
                                        <div className="relative flex items-center w-[60px]">
                                          <button
                                            type="button"
                                            id="decrement-button"
                                            data-input-counter-decrement="quantity-input"
                                            className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                          >
                                            <svg
                                              className="w-[8px] h-[8px] text-black hover:text-white"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 18 2"
                                            >
                                              <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 1h16"
                                              />
                                            </svg>
                                          </button>
                                          <input
                                            type="text"
                                            id="quantity-input"
                                            data-input-counter
                                            aria-describedby="helper-text-explanation"
                                            className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                            placeholder="10"
                                          />
                                          <button
                                            type="button"
                                            id="increment-button"
                                            data-input-counter-increment="quantity-input"
                                            className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                          >
                                            <svg
                                              className="w-[8px] h-[8px] text-black hover:text-white"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 18 18"
                                            >
                                              <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 1v16M1 9h16"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </form>

                                      {/* add button */}
                                      <div className="w-[60px] h-[20px]">
                                        <button
                                          type="button"
                                          className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {bigAndNormalCardSize && (
                <div className="w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid xl:grid-cols-12 gap-[40px] 2xl:gap-[80px]">
                  {/* big card */}
                  <div className="xl:col-span-3">
                    <div className="h-auto w-[280px] sm:w-[540px] xl:w-[250px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 mx-auto justify-items-center grid-flow-row sm:gap-x-[40px] xl:gap-x-0 gap-y-[40px]">
                      {item.filteredBigCards?.map((item, index) => (
                        <div
                          key={index}
                          className={`${
                            login ? "h-[408px]" : "h-[358px]"
                          } w-[250px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                        >
                          <div>
                            <Modal
                              showModal={openModal === index}
                              cancelOption={() => setOpenModal(null)}
                              index={index + 1}
                              item={item}
                            />
                          </div>

                          <div
                            onClick={() => {
                              setOpenModal(index);
                            }}
                          >
                            <div
                              className={`w-[250px] ${
                                login ? "h-[408px]" : "h-[358px]"
                              } flex flex-col gap-[20px] border`}
                            >
                              <div
                                className="w-[250px] h-[250px] flex items-center justify-center border-b-[1px] border-[#CECECC] relative"
                                onMouseEnter={() =>
                                  handleMouseEnter(index + 1000)
                                }
                                onMouseLeave={() =>
                                  handleMouseLeave(index + 1000)
                                }
                              >
                                <img
                                  src={item.name}
                                  alt="Product"
                                  className="h-[230px] w-[230px] object-cover"
                                />
                                {isHovered[index + 1000] && (
                                  <div className="absolute w-[250px] h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                                    <span className="text-white">
                                      View Details
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div
                                className={`w-[250px] ${
                                  login ? "h-[138px]" : "h-[88px]"
                                } flex items-start justify-center`}
                              >
                                <div
                                  className={`flex flex-col ${
                                    login ? "h-[118px]" : "h-[68px]"
                                  } w-[230px] gap-[5px]`}
                                >
                                  <div className="w-[230px] h-[21px] flex justify-between">
                                    <p className="w-[112.5px] h-[21px] overflow-hidden text-nowrap text-[#9D9C99] text-[12px]">
                                      Design Name
                                    </p>
                                    <p className="w-[112.5px] h-[21px] text-[12px] overflow-hidden text-end text-nowrap text-[#9D9C99]">
                                      Color
                                    </p>
                                  </div>
                                  <p className="text-black text-[14px] font-semibold w-[230px] h-[42px]">
                                    DP27023-44
                                  </p>

                                  {login && (
                                    <div className="w-[230px] h-[45px]">
                                      <div className="flex items-end justify-between">
                                        <div className="w-[71px] h-[27px] flex items-center justify-between flex-row">
                                          <p className="text-[18px] font-semibold w-[47px] h-[27px] flex items-center justify-center">
                                            ${item["price per m"]}
                                          </p>
                                          <span className="w-[19px] h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                            / m{" "}
                                          </span>
                                        </div>
                                        <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                          {/* quantity button */}

                                          <form className="w-[60px] h-[20px]">
                                            <label
                                              htmlFor="quantity-input"
                                              className="block text-[14px] font-medium text-gray-900"
                                            ></label>
                                            <div className="relative flex items-center w-[60px]">
                                              <button
                                                type="button"
                                                id="decrement-button"
                                                data-input-counter-decrement="quantity-input"
                                                className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                              >
                                                <svg
                                                  className="w-[8px] h-[8px] text-black hover:text-white"
                                                  aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 18 2"
                                                >
                                                  <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 1h16"
                                                  />
                                                </svg>
                                              </button>
                                              <input
                                                type="text"
                                                id="quantity-input"
                                                data-input-counter
                                                aria-describedby="helper-text-explanation"
                                                className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                                placeholder="10"
                                              />
                                              <button
                                                type="button"
                                                id="increment-button"
                                                data-input-counter-increment="quantity-input"
                                                className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                              >
                                                <svg
                                                  className="w-[8px] h-[8px] text-black hover:text-white"
                                                  aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 18 18"
                                                >
                                                  <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 1v16M1 9h16"
                                                  />
                                                </svg>
                                              </button>
                                            </div>
                                          </form>

                                          {/* add button */}
                                          <div className="w-[60px] h-[20px]">
                                            <button
                                              type="button"
                                              className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                            >
                                              Add
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* normal card */}
                  <div className="xl:col-span-9">
                    <div className="h-auto w-[280px] sm:w-[664px] xl:w-[870px] 2xl:w-[990px] grid grid-cols-2 sm:grid-cols-3 mx-auto xl:grid-cols-4 justify-items-center gap-x-[20px] sm:gap-x-[62px] xl:gap-x-[50px] 2xl:gap-x-[90px] gap-y-[40px]">
                      {item.filteredNormalCards?.map((item, index) => (
                        <div
                          key={index}
                          className={`w-[130px] ${
                            login
                              ? "h-[266px] sm:h-[326px]"
                              : "h-[216px] sm:h-[288px]"
                          }   sm:w-[180px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                        >
                          {/* modal */}
                          <div>
                            <Modal
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
                            <div className="flex flex-col gap-[15px] sm:gap-[20px]">
                              <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                              >
                                <img
                                  src={item.name}
                                  alt="Product"
                                  className="h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] object-cover"
                                />
                                {isHovered[index] && (
                                  <div className="absolute w-[130px] h-[43.33px] sm:w-[180px] sm:h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                                    <span className="text-white">
                                      View Details
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div
                                className={`${
                                  login
                                    ? "h-[121px] sm:h-[126px]"
                                    : "h-[71px] sm:h-[88px]"
                                } w-[130px]  sm:w-[180px] flex items-start justify-center`}
                              >
                                <div
                                  className={`flex flex-col ${
                                    login
                                      ? "h-[106px] sm:h-[126px]"
                                      : "h-[56px] sm:h-[68px]"
                                  } w-[120px] sm:w-[180px] gap-[5px] sm:gap-[14px] items-center`}
                                >
                                  <div className="w-[120px] h-[56px] sm:w-[160px] sm:h-[47px] flex flex-col items-center justify-between">
                                    <div className="w-[120px] h-[15px] sm:h-[21px] sm:w-[160px] overflow-hidden text-nowrap flex items-center justify-between">
                                      <p className="w-[63px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99]">
                                        Design Name
                                      </p>
                                      <p className="w-[25px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99] text-end">
                                        Color
                                      </p>
                                    </div>
                                    <p className="font-semibold w-[120px] h-[36px] sm:h-[21px] sm:w-[160px] text-[12px] sm:text-[14px]">
                                      27025-10
                                    </p>
                                  </div>
                                  {/* for log in user */}
                                  {login && (
                                    <div className="w-[120px] h-[45px] sm:w-[160px]">
                                      <div className="flex items-end justify-between">
                                        <div className="w-[42px] h-[39px] sm:w-[71px] sm:h-[27px] flex flex-col items-center justify-between sm:flex-row">
                                          <p className="text-[16px] sm:text-[18px] font-semibold w-[42px] h-[24px] sm:w-[47px] sm:h-[27px] flex items-center justify-center">
                                            ${item["price per m"]}
                                          </p>
                                          <span className="w-[16px] h-[15px] sm:w-[19px] sm:h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                            / m{" "}
                                          </span>
                                        </div>
                                        <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                          {/* quantity button */}

                                          <form className="w-[60px] h-[20px]">
                                            <label
                                              htmlFor="quantity-input"
                                              className="block text-[14px] font-medium text-gray-900"
                                            ></label>
                                            <div className="relative flex items-center w-[60px]">
                                              <button
                                                type="button"
                                                id="decrement-button"
                                                data-input-counter-decrement="quantity-input"
                                                className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                              >
                                                <svg
                                                  className="w-[8px] h-[8px] text-black hover:text-white"
                                                  aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 18 2"
                                                >
                                                  <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 1h16"
                                                  />
                                                </svg>
                                              </button>
                                              <input
                                                type="text"
                                                id="quantity-input"
                                                data-input-counter
                                                aria-describedby="helper-text-explanation"
                                                className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                                placeholder="10"
                                              />
                                              <button
                                                type="button"
                                                id="increment-button"
                                                data-input-counter-increment="quantity-input"
                                                className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                              >
                                                <svg
                                                  className="w-[8px] h-[8px] text-black hover:text-white"
                                                  aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 18 18"
                                                >
                                                  <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 1v16M1 9h16"
                                                  />
                                                </svg>
                                              </button>
                                            </div>
                                          </form>

                                          {/* add button */}
                                          <div className="w-[60px] h-[20px]">
                                            <button
                                              type="button"
                                              className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                            >
                                              Add
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {multiPanel && (
                // <div className="w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid xl:grid-cols-12 gap-10 xl:gap-[48px] 2xl:gap-[85px]">
                <div className="w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col items-center justify-center gap-[40px]">
                  {/* Big card */}
                  {/* <div className="xl:col-span-3"> */}
                  <div className="h-auto w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-[62px] sm:gap-y-[40px] sm:gap-x-[62px] xl:gap-x-[53.5px] 2xl:gap-x-[106.5px] items-center justify-items-center sm:px-[51px] xl:px-0">
                    {item.filteredBigCards?.map((item, index) => (
                      <div
                        key={index}
                        className={`${
                          login ? "h-[558.51px]" : "h-[513.51px]"
                        } w-[250px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                      >
                        <div>
                          <Modal
                            showModal={openModal === index}
                            cancelOption={() => setOpenModal(null)}
                            index={index + 1}
                            item={item}
                          />
                        </div>

                        <div
                          onClick={() => {
                            setOpenModal(index);
                          }}
                        >
                          <div
                            className={`w-[250px] ${
                              login ? "h-[558.51px]" : "h-[513.51px]"
                            } flex flex-col gap-[20px] border`}
                          >
                            <div
                              className="relative w-[250px] h-[400.51px] flex items-center justify-center border-b-[1px] border-[#CECECC]  "
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={() => handleMouseLeave(index)}
                            >
                              <img
                                src={item.name}
                                alt="Product"
                                className="w-[230px] h-[380.51px] object-cover"
                              />
                              {isHovered[index] && (
                                <div className="absolute w-[250px] h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                                  <span className="text-white">
                                    View Details
                                  </span>
                                </div>
                              )}
                            </div>
                            <div
                              className={`w-[250px] ${
                                login ? "h-[138px]" : "h-[88px]"
                              } flex items-start justify-center`}
                            >
                              <div
                                className={`flex flex-col ${
                                  login ? "h-[118px]" : "h-[68px]"
                                } w-[230px] gap-[5px]`}
                              >
                                <div className="w-[230px] h-[21px] flex justify-between">
                                  <p className="w-[112.5px] h-[21px] overflow-hidden text-nowrap text-[#9D9C99] text-[12px]">
                                    Design Name
                                  </p>
                                  <p className="w-[112.5px] h-[21px] text-[12px] overflow-hidden text-end text-nowrap text-[#9D9C99]">
                                    Color
                                  </p>
                                </div>
                                <p className="text-black text-[14px] font-semibold w-[230px] h-[42px]">
                                  DP27023-44
                                </p>

                                {login && (
                                  <div className="w-[230px] h-[45px]">
                                    <div className="flex items-end justify-between">
                                      <div className="w-[71px] h-[27px] flex items-center justify-between flex-row">
                                        <p className="text-[18px] font-semibold w-[47px] h-[27px] flex items-center justify-center">
                                          ${item["price per m"]}
                                        </p>
                                        <span className="w-[19px] h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                          / m{" "}
                                        </span>
                                      </div>
                                      <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                        {/* quantity button */}

                                        <form className="w-[60px] h-[20px]">
                                          <label
                                            htmlFor="quantity-input"
                                            className="block text-[14px] font-medium text-gray-900"
                                          ></label>
                                          <div className="relative flex items-center w-[60px]">
                                            <button
                                              type="button"
                                              id="decrement-button"
                                              data-input-counter-decrement="quantity-input"
                                              className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                            >
                                              <svg
                                                className="w-[8px] h-[8px] text-black hover:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 18 2"
                                              >
                                                <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M1 1h16"
                                                />
                                              </svg>
                                            </button>
                                            <input
                                              type="text"
                                              id="quantity-input"
                                              data-input-counter
                                              aria-describedby="helper-text-explanation"
                                              className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                              placeholder="10"
                                            />
                                            <button
                                              type="button"
                                              id="increment-button"
                                              data-input-counter-increment="quantity-input"
                                              className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                            >
                                              <svg
                                                className="w-[8px] h-[8px] text-black hover:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 18 18"
                                              >
                                                <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M9 1v16M1 9h16"
                                                />
                                              </svg>
                                            </button>
                                          </div>
                                        </form>

                                        {/* add button */}
                                        <div className="w-[60px] h-[20px]">
                                          <button
                                            type="button"
                                            className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                          >
                                            Add
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* </div> */}
                  {/* normal card */}
                  {/* <div className="xl:col-span-9"> */}
                  <div className="h-auto w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid grid-cols-2 sm:grid-cols-3 mx-auto xl:grid-cols-5 justify-items-center grid-flow-row gap-y-[40px] gap-x-[20px] sm:gap-x-[22px] xl:gap-x-[55px] 2xl:gap-x-[90px] sm:px-[40px] xl:px-0">
                    {item.filteredNormalCards?.map((item, index) => (
                      <div
                        key={index}
                        className={`w-[130px] ${
                          login
                            ? "h-[266px] sm:h-[326px]"
                            : "h-[216px] sm:h-[288px]"
                        }   sm:w-[180px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                      >
                        {/* modal */}
                        <div>
                          <Modal
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
                          <div className="flex flex-col gap-[15px] sm:gap-[20px]">
                            <div
                              className="relative"
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={() => handleMouseLeave(index)}
                            >
                              <img
                                src={item.name}
                                alt="Product"
                                className="h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] object-cover"
                              />
                              {isHovered[index] && (
                                <div className="absolute w-[130px] h-[43.33px] sm:w-[180px] sm:h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                                  <span className="text-white">
                                    View Details
                                  </span>
                                </div>
                              )}
                            </div>

                            <div
                              className={`${
                                login
                                  ? "h-[121px] sm:h-[126px]"
                                  : "h-[71px] sm:h-[88px]"
                              } w-[130px]  sm:w-[180px] flex items-start justify-center`}
                            >
                              <div
                                className={`flex flex-col ${
                                  login
                                    ? "h-[106px] sm:h-[126px]"
                                    : "h-[56px] sm:h-[68px]"
                                } w-[120px] sm:w-[180px] gap-[5px] sm:gap-[14px] items-center`}
                              >
                                <div className="w-[120px] h-[56px] sm:w-[160px] sm:h-[47px] flex flex-col items-center justify-between">
                                  <div className="w-[120px] h-[15px] sm:h-[21px] sm:w-[160px] overflow-hidden text-nowrap flex items-center justify-between">
                                    <p className="w-[63px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99]">
                                      Design Name
                                    </p>
                                    <p className="w-[25px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99] text-end">
                                      Color
                                    </p>
                                  </div>
                                  <p className="font-semibold w-[120px] h-[36px] sm:h-[21px] sm:w-[160px] text-[12px] sm:text-[14px]">
                                    27025-10
                                  </p>
                                </div>
                                {/* for log in user */}
                                {login && (
                                  <div className="w-[120px] h-[45px] sm:w-[160px]">
                                    <div className="flex items-end justify-between">
                                      <div className="w-[42px] h-[39px] sm:w-[71px] sm:h-[27px] flex flex-col items-center justify-between sm:flex-row">
                                        <p className="text-[16px] sm:text-[18px] font-semibold w-[42px] h-[24px] sm:w-[47px] sm:h-[27px] flex items-center justify-center">
                                          ${item["price per m"]}
                                        </p>
                                        <span className="w-[16px] h-[15px] sm:w-[19px] sm:h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                          / m{" "}
                                        </span>
                                      </div>
                                      <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                        {/* quantity button */}

                                        <form className="w-[60px] h-[20px]">
                                          <label
                                            htmlFor="quantity-input"
                                            className="block text-[14px] font-medium text-gray-900"
                                          ></label>
                                          <div className="relative flex items-center w-[60px]">
                                            <button
                                              type="button"
                                              id="decrement-button"
                                              data-input-counter-decrement="quantity-input"
                                              className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                            >
                                              <svg
                                                className="w-[8px] h-[8px] text-black hover:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 18 2"
                                              >
                                                <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M1 1h16"
                                                />
                                              </svg>
                                            </button>
                                            <input
                                              type="text"
                                              id="quantity-input"
                                              data-input-counter
                                              aria-describedby="helper-text-explanation"
                                              className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                              placeholder="10"
                                            />
                                            <button
                                              type="button"
                                              id="increment-button"
                                              data-input-counter-increment="quantity-input"
                                              className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                            >
                                              <svg
                                                className="w-[8px] h-[8px] text-black hover:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 18 18"
                                              >
                                                <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M9 1v16M1 9h16"
                                                />
                                              </svg>
                                            </button>
                                          </div>
                                        </form>

                                        {/* add button */}
                                        <div className="w-[60px] h-[20px]">
                                          <button
                                            type="button"
                                            className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                          >
                                            Add
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                // </div>
              )}
            </div>
          );
        })}

        {/* NON-COLORWAY PRODUCT FOR NORMAL , BIGANDNORMAL , MULTI CARD */}
        <div className="mb-[40px] w-[280px] h-[96px] sm:w-[664px] sm:h-[96px] xl:w-[1160px] 2xl:w-[1320px] xl:h-[39px] grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-[30px] xl:gap-0 items-center justify-center xl:justify-between">
          <div className="col-span-1 hidden xl:flex h-[39px]"></div>
          <div className="col-span-1 h-[39px] flex items-center justify-center">
            <p className="font-bold text-center text-white"></p>
          </div>
        </div>

        {nonColorwayNormalCardSizeOnly && (
          <div className="-mt-[200px] xl:-mt-[100px] w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid grid-cols-2 sm:grid-cols-3 mx-auto xl:grid-cols-5 justify-items-center grid-flow-row gap-10">
            {filteredNormalCardsNonColorway?.map((item, index) => (
              <div
                key={index}
                className={`w-[130px] ${
                  login ? "h-[266px] sm:h-[326px]" : "h-[216px] sm:h-[288px]"
                }   sm:w-[180px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
              >
                {/* modal */}
                <div>
                  <Modal
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
                  <div className="flex flex-col gap-[15px] sm:gap-[20px]">
                    <div
                      className="relative"
                      onMouseEnter={() =>
                        handleMouseEnterNonColorWayNormalCard(index)
                      }
                      onMouseLeave={() =>
                        handleMouseLeaveNonColorWayNormalCard(index)
                      }
                    >
                      <img
                        src={item.name}
                        alt="Product"
                        className="h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] object-cover"
                      />
                      {isHoveredNonColorWayNormalCard[index] && (
                        <div className="absolute w-[130px] h-[43.33px] sm:w-[180px] sm:h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                          <span className="text-white">View Details</span>
                        </div>
                      )}
                    </div>
                    <div
                      className={`${
                        login
                          ? "h-[121px] sm:h-[126px]"
                          : "h-[71px] sm:h-[88px]"
                      } w-[130px]  sm:w-[180px] flex items-start justify-center`}
                    >
                      <div
                        className={`flex flex-col ${
                          login
                            ? "h-[106px] sm:h-[126px]"
                            : "h-[56px] sm:h-[68px]"
                        } w-[120px] sm:w-[180px] gap-[5px] sm:gap-[14px] items-center`}
                      >
                        <div className="w-[120px] h-[56px] sm:w-[160px] sm:h-[47px] flex flex-col items-center justify-between">
                          <div className="w-[120px] h-[15px] sm:h-[21px] sm:w-[160px] overflow-hidden text-nowrap flex items-center justify-between">
                            <p className="w-[63px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99]">
                              Design Name
                            </p>
                            <p className="w-[25px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99] text-end">
                              Color
                            </p>
                          </div>
                          <p className="font-semibold w-[120px] h-[36px] sm:h-[21px] sm:w-[160px] text-[12px] sm:text-[14px]">
                            27025-10
                          </p>
                        </div>
                        {/* for log in user */}
                        {login && (
                          <div className="w-[120px] h-[45px] sm:w-[160px]">
                            <div className="flex items-end justify-between">
                              <div className="w-[42px] h-[39px] sm:w-[71px] sm:h-[27px] flex flex-col items-center justify-between sm:flex-row">
                                <p className="text-[16px] sm:text-[18px] font-semibold w-[42px] h-[24px] sm:w-[47px] sm:h-[27px] flex items-center justify-center">
                                  ${item["price per m"]}
                                </p>
                                <span className="w-[16px] h-[15px] sm:w-[19px] sm:h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                  / m{" "}
                                </span>
                              </div>
                              <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                {/* quantity button */}

                                <form className="w-[60px] h-[20px]">
                                  <label
                                    htmlFor="quantity-input"
                                    className="block text-[14px] font-medium text-gray-900"
                                  ></label>
                                  <div className="relative flex items-center w-[60px]">
                                    <button
                                      type="button"
                                      id="decrement-button"
                                      data-input-counter-decrement="quantity-input"
                                      className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                    >
                                      <svg
                                        className="w-[8px] h-[8px] text-black hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 2"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 1h16"
                                        />
                                      </svg>
                                    </button>
                                    <input
                                      type="text"
                                      id="quantity-input"
                                      data-input-counter
                                      aria-describedby="helper-text-explanation"
                                      className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                      placeholder="10"
                                    />
                                    <button
                                      type="button"
                                      id="increment-button"
                                      data-input-counter-increment="quantity-input"
                                      className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                    >
                                      <svg
                                        className="w-[8px] h-[8px] text-black hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M9 1v16M1 9h16"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </form>

                                {/* add button */}
                                <div className="w-[60px] h-[20px]">
                                  <button
                                    type="button"
                                    className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                  >
                                    Add
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {nonColorwayBigAndNormalCardSize && (
          <div className="-mt-[200px] xl:-mt-[100px] w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid xl:grid-cols-12 gap-10 xl:gap-[48px] 2xl:gap-[85px]">
            {/* Big card */}
            <div className="xl:col-span-3">
              <div className="h-auto w-[280px] sm:w-[664px] xl:w-[250px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 mx-auto justify-items-center grid-flow-row gap-10">
                {filteredBigCardsNonColorway?.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      login ? "h-[408px]" : "h-[358px]"
                    } w-[250px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                  >
                    <div>
                      <Modal
                        showModal={openModal === index}
                        cancelOption={() => setOpenModal(null)}
                        index={index + 1}
                        item={item}
                      />
                    </div>

                    <div
                      onClick={() => {
                        setOpenModal(index);
                      }}
                    >
                      <div
                        className={`w-[250px] ${
                          login ? "h-[408px]" : "h-[358px]"
                        } flex flex-col gap-[20px] border`}
                      >
                        <div
                          className="w-[250px] h-[250px] flex items-center justify-center border-b-[1px] border-[#CECECC] relative"
                          onMouseEnter={() =>
                            handleMouseEnterNonColorWayBigCard(index)
                          }
                          onMouseLeave={() =>
                            handleMouseLeaveNonColorWayBigCard(index)
                          }
                        >
                          <img
                            src={item.name}
                            alt="Product"
                            className="h-[230px] w-[230px] object-cover"
                          />
                          {isHoveredNonColorWayBigCard[index] && (
                            <div className="absolute w-[250px] h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                              <span className="text-white">View Details</span>
                            </div>
                          )}
                        </div>
                        <div
                          className={`w-[250px] ${
                            login ? "h-[138px]" : "h-[88px]"
                          } flex items-start justify-center`}
                        >
                          <div
                            className={`flex flex-col ${
                              login ? "h-[118px]" : "h-[68px]"
                            } w-[230px] gap-[5px]`}
                          >
                            <div className="w-[230px] h-[21px] flex justify-between">
                              <p className="w-[112.5px] h-[21px] overflow-hidden text-nowrap text-[#9D9C99] text-[12px]">
                                Design Name
                              </p>
                              <p className="w-[112.5px] h-[21px] text-[12px] overflow-hidden text-end text-nowrap text-[#9D9C99]">
                                Color
                              </p>
                            </div>
                            <p className="text-black text-[14px] font-semibold w-[230px] h-[42px]">
                              DP27023-44
                            </p>

                            {login && (
                              <div className="w-[230px] h-[45px]">
                                <div className="flex items-end justify-between">
                                  <div className="w-[71px] h-[27px] flex items-center justify-between flex-row">
                                    <p className="text-[18px] font-semibold w-[47px] h-[27px] flex items-center justify-center">
                                      ${item["price per m"]}
                                    </p>
                                    <span className="w-[19px] h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                      / m{" "}
                                    </span>
                                  </div>
                                  <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                    {/* quantity button */}

                                    <form className="w-[60px] h-[20px]">
                                      <label
                                        htmlFor="quantity-input"
                                        className="block text-[14px] font-medium text-gray-900"
                                      ></label>
                                      <div className="relative flex items-center w-[60px]">
                                        <button
                                          type="button"
                                          id="decrement-button"
                                          data-input-counter-decrement="quantity-input"
                                          className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                        >
                                          <svg
                                            className="w-[8px] h-[8px] text-black hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M1 1h16"
                                            />
                                          </svg>
                                        </button>
                                        <input
                                          type="text"
                                          id="quantity-input"
                                          data-input-counter
                                          aria-describedby="helper-text-explanation"
                                          className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                          placeholder="10"
                                        />
                                        <button
                                          type="button"
                                          id="increment-button"
                                          data-input-counter-increment="quantity-input"
                                          className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                        >
                                          <svg
                                            className="w-[8px] h-[8px] text-black hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M9 1v16M1 9h16"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </form>

                                    {/* add button */}
                                    <div className="w-[60px] h-[20px]">
                                      <button
                                        type="button"
                                        className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* normal card */}
            <div className="xl:col-span-9">
              <div className="h-auto w-[280px] sm:w-[664px] xl:w-[870px] 2xl:w-[990px] grid grid-cols-2 sm:grid-cols-3 mx-auto xl:grid-cols-4 justify-items-center grid-flow-row gap-y-10 gap-x-2">
                {filteredNormalCardsNonColorway?.map((item, index) => (
                  <div
                    key={index}
                    className={`w-[130px] ${
                      login
                        ? "h-[266px] sm:h-[326px]"
                        : "h-[216px] sm:h-[288px]"
                    }   sm:w-[180px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                  >
                    {/* modal */}
                    <div>
                      <Modal
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
                      <div className="flex flex-col gap-[15px] sm:gap-[20px]">
                        <div
                          className="relative"
                          onMouseEnter={() =>
                            handleMouseEnterNonColorWayNormalCard(index)
                          }
                          onMouseLeave={() =>
                            handleMouseLeaveNonColorWayNormalCard(index)
                          }
                        >
                          <img
                            src={item.name}
                            alt="Product"
                            className="h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] object-cover"
                          />
                          {isHoveredNonColorWayNormalCard[index] && (
                            <div className="absolute w-[130px] h-[43.33px] sm:w-[180px] sm:h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                              <span className="text-white">View Details</span>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            login
                              ? "h-[121px] sm:h-[126px]"
                              : "h-[71px] sm:h-[88px]"
                          } w-[130px]  sm:w-[180px] flex items-start justify-center`}
                        >
                          <div
                            className={`flex flex-col ${
                              login
                                ? "h-[106px] sm:h-[126px]"
                                : "h-[56px] sm:h-[68px]"
                            } w-[120px] sm:w-[180px] gap-[5px] sm:gap-[14px] items-center`}
                          >
                            <div className="w-[120px] h-[56px] sm:w-[160px] sm:h-[47px] flex flex-col items-center justify-between">
                              <div className="w-[120px] h-[15px] sm:h-[21px] sm:w-[160px] overflow-hidden text-nowrap flex items-center justify-between">
                                <p className="w-[63px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99]">
                                  Design Name
                                </p>
                                <p className="w-[25px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99] text-end">
                                  Color
                                </p>
                              </div>
                              <p className="font-semibold w-[120px] h-[36px] sm:h-[21px] sm:w-[160px] text-[12px] sm:text-[14px]">
                                27025-10
                              </p>
                            </div>
                            {/* for log in user */}
                            {login && (
                              <div className="w-[120px] h-[45px] sm:w-[160px]">
                                <div className="flex items-end justify-between">
                                  <div className="w-[42px] h-[39px] sm:w-[71px] sm:h-[27px] flex flex-col items-center justify-between sm:flex-row">
                                    <p className="text-[16px] sm:text-[18px] font-semibold w-[42px] h-[24px] sm:w-[47px] sm:h-[27px] flex items-center justify-center">
                                      ${item["price per m"]}
                                    </p>
                                    <span className="w-[16px] h-[15px] sm:w-[19px] sm:h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                      / m{" "}
                                    </span>
                                  </div>
                                  <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                    {/* quantity button */}

                                    <form className="w-[60px] h-[20px]">
                                      <label
                                        htmlFor="quantity-input"
                                        className="block text-[14px] font-medium text-gray-900"
                                      ></label>
                                      <div className="relative flex items-center w-[60px]">
                                        <button
                                          type="button"
                                          id="decrement-button"
                                          data-input-counter-decrement="quantity-input"
                                          className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                        >
                                          <svg
                                            className="w-[8px] h-[8px] text-black hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M1 1h16"
                                            />
                                          </svg>
                                        </button>
                                        <input
                                          type="text"
                                          id="quantity-input"
                                          data-input-counter
                                          aria-describedby="helper-text-explanation"
                                          className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                          placeholder="10"
                                        />
                                        <button
                                          type="button"
                                          id="increment-button"
                                          data-input-counter-increment="quantity-input"
                                          className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                        >
                                          <svg
                                            className="w-[8px] h-[8px] text-black hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M9 1v16M1 9h16"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </form>

                                    {/* add button */}
                                    <div className="w-[60px] h-[20px]">
                                      <button
                                        type="button"
                                        className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {nonColorwayMultiPanel && (
          <div className="-mt-[200px] xl:-mt-[100px] w-[280px] h-fit sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] flex flex-col justify-center gap-y-10">
            {/* Big card */}
            <div className="h-auto w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mx-auto justify-items-center grid-flow-row gap-y-[62px] sm:gap-y-10">
              {filteredBigCardsNonColorway?.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    login ? "h-[408px]" : "h-[358px]"
                  } w-[250px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                >
                  <div>
                    <Modal
                      showModal={openModal === index}
                      cancelOption={() => setOpenModal(null)}
                      index={index + 1}
                      item={item}
                    />
                  </div>

                  <div
                    onClick={() => {
                      setOpenModal(index);
                    }}
                  >
                    <div
                      className={`w-[250px] ${
                        login ? "h-[408px]" : "h-[358px]"
                      } flex flex-col gap-[20px] border`}
                    >
                      <div
                        className="w-[250px] h-[250px] flex items-center justify-center border-b-[1px] border-[#CECECC] relative"
                        onMouseEnter={() =>
                          handleMouseEnterNonColorWayBigCard(index)
                        }
                        onMouseLeave={() =>
                          handleMouseLeaveNonColorWayBigCard(index)
                        }
                      >
                        <img
                          src={item.name}
                          alt="Product"
                          className="h-[230px] w-[230px] object-cover"
                        />
                        {isHoveredNonColorWayBigCard[index] && (
                          <div className="absolute w-[250px] h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                            <span className="text-white">View Details</span>
                          </div>
                        )}
                      </div>
                      <div
                        className={`w-[250px] ${
                          login ? "h-[138px]" : "h-[88px]"
                        } flex items-start justify-center`}
                      >
                        <div
                          className={`flex flex-col ${
                            login ? "h-[118px]" : "h-[68px]"
                          } w-[230px] gap-[5px]`}
                        >
                          <div className="w-[230px] h-[21px] flex justify-between">
                            <p className="w-[112.5px] h-[21px] overflow-hidden text-nowrap text-[#9D9C99] text-[12px]">
                              Design Name
                            </p>
                            <p className="w-[112.5px] h-[21px] text-[12px] overflow-hidden text-end text-nowrap text-[#9D9C99]">
                              Color
                            </p>
                          </div>
                          <p className="text-black text-[14px] font-semibold w-[230px] h-[42px]">
                            DP27023-44
                          </p>

                          {login && (
                            <div className="w-[230px] h-[45px]">
                              <div className="flex items-end justify-between">
                                <div className="w-[71px] h-[27px] flex items-center justify-between flex-row">
                                  <p className="text-[18px] font-semibold w-[47px] h-[27px] flex items-center justify-center">
                                    ${item["price per m"]}
                                  </p>
                                  <span className="w-[19px] h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                    / m{" "}
                                  </span>
                                </div>
                                <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                  {/* quantity button */}

                                  <form className="w-[60px] h-[20px]">
                                    <label
                                      htmlFor="quantity-input"
                                      className="block text-[14px] font-medium text-gray-900"
                                    ></label>
                                    <div className="relative flex items-center w-[60px]">
                                      <button
                                        type="button"
                                        id="decrement-button"
                                        data-input-counter-decrement="quantity-input"
                                        className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                      >
                                        <svg
                                          className="w-[8px] h-[8px] text-black hover:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 2"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1h16"
                                          />
                                        </svg>
                                      </button>
                                      <input
                                        type="text"
                                        id="quantity-input"
                                        data-input-counter
                                        aria-describedby="helper-text-explanation"
                                        className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                        placeholder="10"
                                      />
                                      <button
                                        type="button"
                                        id="increment-button"
                                        data-input-counter-increment="quantity-input"
                                        className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                      >
                                        <svg
                                          className="w-[8px] h-[8px] text-black hover:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 18"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 1v16M1 9h16"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </form>

                                  {/* add button */}
                                  <div className="w-[60px] h-[20px]">
                                    <button
                                      type="button"
                                      className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                    >
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* normal card */}
            <div className="h-auto w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid grid-cols-2 sm:grid-cols-3 mx-auto xl:grid-cols-5 justify-items-center grid-flow-row gap-y-10 gap-x-2">
              {filteredNormalCardsNonColorway?.map((item, index) => (
                <div
                  key={index}
                  className={`w-[130px] ${
                    login ? "h-[266px] sm:h-[326px]" : "h-[216px] sm:h-[288px]"
                  }   sm:w-[180px] cursor-pointer border-[1px] border-[#CECECC] hover:border-[#6B6B66]`}
                >
                  {/* modal */}
                  <div>
                    <Modal
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
                    <div className="flex flex-col gap-[15px] sm:gap-[20px]">
                      <div
                        className="relative"
                        onMouseEnter={() =>
                          handleMouseEnterNonColorWayNormalCard(index)
                        }
                        onMouseLeave={() =>
                          handleMouseLeaveNonColorWayNormalCard(index)
                        }
                      >
                        <img
                          src={item.name}
                          alt="Product"
                          className="h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] object-cover"
                        />
                        {isHoveredNonColorWayNormalCard[index] && (
                          <div className="absolute w-[130px] h-[43.33px] sm:w-[180px] sm:h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center bottom-0">
                            <span className="text-white">View Details</span>
                          </div>
                        )}
                      </div>
                      <div
                        className={`${
                          login
                            ? "h-[121px] sm:h-[126px]"
                            : "h-[71px] sm:h-[88px]"
                        } w-[130px]  sm:w-[180px] flex items-start justify-center`}
                      >
                        <div
                          className={`flex flex-col ${
                            login
                              ? "h-[106px] sm:h-[126px]"
                              : "h-[56px] sm:h-[68px]"
                          } w-[120px] sm:w-[180px] gap-[5px] sm:gap-[14px] items-center`}
                        >
                          <div className="w-[120px] h-[56px] sm:w-[160px] sm:h-[47px] flex flex-col items-center justify-between">
                            <div className="w-[120px] h-[15px] sm:h-[21px] sm:w-[160px] overflow-hidden text-nowrap flex items-center justify-between">
                              <p className="w-[63px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99]">
                                Design Name
                              </p>
                              <p className="w-[25px] h-[15px] sm:w-[77.5px] sm:h-[21px] text-[10px] sm:text-[12px] text-[#9D9C99] text-end">
                                Color
                              </p>
                            </div>
                            <p className="font-semibold w-[120px] h-[36px] sm:h-[21px] sm:w-[160px] text-[12px] sm:text-[14px]">
                              27025-10
                            </p>
                          </div>
                          {/* for log in user */}
                          {login && (
                            <div className="w-[120px] h-[45px] sm:w-[160px]">
                              <div className="flex items-end justify-between">
                                <div className="w-[42px] h-[39px] sm:w-[71px] sm:h-[27px] flex flex-col items-center justify-between sm:flex-row">
                                  <p className="text-[16px] sm:text-[18px] font-semibold w-[42px] h-[24px] sm:w-[47px] sm:h-[27px] flex items-center justify-center">
                                    ${item["price per m"]}
                                  </p>
                                  <span className="w-[16px] h-[15px] sm:w-[19px] sm:h-[18px] text-[10px] sm:text-[12px] text-[#9D9C99] font-normal">
                                    / m{" "}
                                  </span>
                                </div>
                                <div className="w-[60px] h-[45px] flex flex-col justify-between">
                                  {/* quantity button */}

                                  <form className="w-[60px] h-[20px]">
                                    <label
                                      htmlFor="quantity-input"
                                      className="block text-[14px] font-medium text-gray-900"
                                    ></label>
                                    <div className="relative flex items-center w-[60px]">
                                      <button
                                        type="button"
                                        id="decrement-button"
                                        data-input-counter-decrement="quantity-input"
                                        className="bg-white border border-[#CECECC] rounded-s w-[20px] h-[20px] hover:bg-[#090800] flex items-center justify-center"
                                      >
                                        <svg
                                          className="w-[8px] h-[8px] text-black hover:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 2"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1h16"
                                          />
                                        </svg>
                                      </button>
                                      <input
                                        type="text"
                                        id="quantity-input"
                                        data-input-counter
                                        aria-describedby="helper-text-explanation"
                                        className="border-y placeholder:text-center border-[#CECECC] h-[20px] w-[20px] text-[10px] text-black"
                                        placeholder="10"
                                      />
                                      <button
                                        type="button"
                                        id="increment-button"
                                        data-input-counter-increment="quantity-input"
                                        className="bg-white border border-[#CECECC] rounded-e p-1 h-[20px] w-[20px] hover:bg-[#090800] flex items-center justify-center"
                                      >
                                        <svg
                                          className="w-[8px] h-[8px] text-black hover:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 18"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 1v16M1 9h16"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </form>

                                  {/* add button */}
                                  <div className="w-[60px] h-[20px]">
                                    <button
                                      type="button"
                                      className="w-[60px] h-[20px] text-[8px] font-bold rounded-sm text-center text-white bg-black hover:bg-[#6B6B66] flex items-center justify-center"
                                    >
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* pattern colorway */}
        {/* horizontal line */}
        <div className="mx-5 sm:mx-7 lg:mx-12 min-w-72 bg-[#CECECC] text-[#CECECC] h-[0.1rem] sm:w-[93vw] lg:w-[91vw] xl:w-[81vw] 2xl:w-[86vw] xl:mx-auto"></div>
        <div className="text-center w-[280px] h-[166px] sm:w-[664px] sm:h-[75px] xl:w-[1160px] 2xl:w-[1320px] gap-[10px]">
          <div className="mb-3 w-[280px] h-[114px] sm:w-[664px] sm:h-[44px] xl:w-[1160px] 2xl:w-[1320px]">
            <p className="font-bold text-[28px] sm:text-[32px] text-black">
              Coordinating Patterns for this Collection
            </p>
          </div>
          <div className="w-[280px] h-[42px] sm:w-[664px] sm:h-[21px] xl:w-[1160px] 2xl:w-[1320px]">
            <p className="text-[#6B6B66] text-[14px]">
              Patterns can be purchased through your local quilt shop.
            </p>
          </div>
        </div>
        <div className="w-[280px] sm:w-[664px] xl:w-[1160px] 2xl:w-[1320px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  justify-items-center grid-flow-row sm:gap-x-[62px] xl:gap-x-[40px] gap-y-[40px] sm:px-[51px] xl:px-0">
          {patternColorWay?.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[396px] flex justify-center border-[1px] border-[#CECECC] hover:border-[#6B6B66] flex-col items-center gap-[20px]"
            >
              <div className="flex justify-center items-center w-[250px] h-[250px] border-b-[1px] border-[#CECECC]">
                <div className="relative">
                  <div>
                    <Modal
                      showModal={openModal === index}
                      cancelOption={() => setOpenModal(null)}
                      index={index + 1}
                    />
                  </div>
                  <img
                    src={item.name}
                    alt="Product"
                    className="w-[230px] h-[230px] object-cover"
                    onMouseEnter={() => handlePatternColorwayMouseEnter(index)}
                    onMouseLeave={() => handlePatternColorwayMouseLeave(index)}
                  />

                  {patterncolorway[index] && (
                    <div
                      className="absolute w-[250px] h-[60px] text-white text-[12px] font-bold bg-black/85 flex items-center justify-center -bottom-[10px] -right-[10px]"
                      onMouseEnter={() =>
                        handlePatternColorwayMouseEnter(index)
                      }
                      onMouseLeave={() =>
                        handlePatternColorwayMouseLeave(index)
                      }
                    >
                      <span
                        className="text-white cursor-pointer w-full h-full flex items-center justify-center text-[12px] font-bold"
                        onClick={() => {
                          setOpenModal(index);
                          handlePatternColorwayMouseLeave(index);
                        }}
                      >
                        View Details
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-[126px] w-[250px] flex flex-col px-[10px] justify-between">
                <div className="w-[230px] h-[68px] flex flex-col justify-between">
                  <p className="w-[230px] h-[21px] text-[12px] text-[#9D9C99]">
                    Collection Name
                  </p>
                  <p className="w-[230px] h-[42px] text-black font-semibold text-[14px]">
                    Window Fun - PTN3255
                  </p>
                </div>
                <p className="mb-[20px] text-[12px] text-[#9D9C99] font-semibold h-[18px] text-nowrap">
                  Click here to view fabric requirement
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
