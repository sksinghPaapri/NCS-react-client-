import Image from "../../assets/About/AboutUs/Image.svg";
import call from "../../assets/About/contact/call.svg";
import local_shipping from "../../assets/About/contact/local_shipping.svg";
import location from "../../assets/About/contact/location.svg";
import mail from "../../assets/About/contact/mail.svg";
import schedule from "../../assets/About/contact/schedule.svg";
import Image1 from "../../assets/About/AboutUs/Image1.svg";
import PageBanner from "../../assets/About/contact/PageTitle.svg";
import mapUSA from "../../assets/About/contact/mapUSA.svg";
import mapCANADA from "../../assets/About/contact/mapCANADA.svg";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import ImageSliderBottom from "./ImageSliderBottom";
import { Link } from "react-router-dom";

const AboutContact = () => {
  return (
    <div className="mb-[100px] flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-[100px]">
        {/* row 1 top banner */}
        <div className="w-full">
          <img
            src={PageBanner}
            alt="Image"
            className="object-cover w-full h-[235px] sm:h-[257px] lg:h-[288px]"
          />
        </div>
        {/* row 2 top heading */}
        <h1
          className=" text-center mx-auto w-[320px] h-[55px] sm:w-[744px] sm:h-[77px] xl:w-[800px] xl:h-[88px] 2xl:w-[1320px] text-[40px] sm:text-[56px] xl:text-[64px]"
          style={{ fontFamily: "DM Serif Display" }}
        >
          Contact
        </h1>
        {/* row 3 */}
        <div className="w-[320px] h-[1930px] sm:w-[744px] sm:h-[1778px] xl:w-[1280px] xl:h-[866px] 2xl:w-[1320px] flex items-center justify-center">
          <div className="w-[280px] h-[1870px] sm:w-[624px] sm:h-[1718px] xl:w-[1160px] xl:h-[806px] 2xl:w-[1200px] flex flex-col items-center xl:items-start justify-between gap-[120px] xl:flex-col mx-[60px] mb-[60px]">
            {/* USA */}
            <div className="w-[280px] h-[875px] sm:w-[624px] sm:h-[799px] xl:w-[1160px] xl:h-[343px] 2xl:w-[1200px] flex flex-col items-center sm:items-end justify-between gap-10 xl:gap-[60px] xl:flex-row">
              {/* USA Address */}
              <div className="order-1 xl:order-2 flex">
                <div className="w-[280px] h-[555px] sm:w-[624px] sm:h-[343px] xl:w-[598px] flex flex-col items-center justify-center gap-5">
                  <p
                    className="w-[280px] h-[44px] sm:w-[624px] xl:w-[598px] text-[32px] text-center"
                    style={{ fontFamily: "DM Serif Display" }}
                  >
                    USA Office
                  </p>
                  <div className="w-[280px] h-[491px] sm:w-[624px] sm:h-[279px] xl:w-[598px] xl:h-[343px] flex flex-col items-center justify-center gap-5">
                    {/* address */}
                    <div className="w-[280px] h-[54px] sm:w-[624px] xl:w-[598px] flex items-center sm:justify-center gap-5">
                      <img
                        src={location}
                        alt="Location"
                        className="w-[26.67px] h-[33.33px]"
                      />
                      <p className="w-[218px] h-[54px] text-[18px]">
                        1050 Valley Brook Avenue Lyndhurst, NJ 07071
                      </p>
                    </div>
                    {/* horizontal line */}
                    <div className="w-[280px] sm:w-[624px] xl:w-[598px] h-[1px] bg-gray-400"></div>
                    {/* telephone and mail */}
                    <div className="w-[280px] h-[148px] sm:w-[624px] sm:h-[64px] xl:w-[598px] flex flex-col items-center justify-between sm:flex-row">
                      {/* call */}
                      <div className="w-[280px] h-[64px] sm:w-[302px] xl:w-[289px] flex items-center gap-5">
                        <img
                          src={call}
                          alt="call"
                          className="w-[30px] h-[30px]"
                        />
                        <div className="w-[220px] h-[64px] flex flex-col justify-between text-[18px]">
                          <p>T: (201) 672-9600</p>
                          <p>F: (201) 672 -9675</p>
                        </div>
                      </div>
                      {/* mail */}
                      <div className="w-[280px] h-[64px] sm:w-[302px] xl:w-[289px] flex items-center gap-5">
                        <img
                          src={mail}
                          alt="mail"
                          className="w-[33.33px] h-[26.67px]"
                        />
                        <div className="w-[220px] h-[64px] flex flex-col justify-center text-[18px]">
                          <p>info2@northcott.com</p>
                        </div>
                      </div>
                    </div>
                    {/* horizontal line */}
                    <div className="w-[280px] sm:w-[624px] xl:w-[598px] h-[1px] bg-gray-400"></div>
                    {/* time and delivery address */}
                    <div className="w-[280px] h-[209px] sm:w-[624px] sm:h-[81px] xl:w-[598px] flex flex-col items-center justify-between sm:flex-row">
                      {/* time */}
                      <div className="w-[280px] h-[108px] sm:w-[302px] sm:h-[81px] xl:w-[289px] flex items-center gap-5">
                        <img
                          src={schedule}
                          alt="schedule"
                          className="w-[33.33px] h-[33.33px]"
                        />
                        <div className="w-[220px] h-[81px] sm:w-[242px] xl:w-[229px] flex flex-col justify-between">
                          <p className="text-[18px]">
                            Office Hours Eastern Time: 9:00AM- 5:00PM Mon-Fri
                            Closed on weekends
                          </p>
                        </div>
                      </div>
                      {/* delivery address */}
                      <div className="w-[280px] h-[81px] sm:w-[302px] sm:h-[81px] xl:w-[289px] flex items-center gap-5">
                        <img
                          src={local_shipping}
                          alt="Local Shipping"
                          className="w-[36.67px] h-[26.64px]"
                        />
                        <div className="w-[220px] h-[81px] sm:w-[242px] xl:w-[229px] flex flex-col justify-center text-[18px]">
                          <p>Warehouse Hours:</p>
                          <p>9:00AM- 4:00PM Mon-Fri</p>
                          <p>Closed on weekends</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* map */}
              <div className="order-2 xl:order-1">
                <div className="w-[280px] h-[280px] sm:w-[624px] sm:h-[416px] xl:w-[502px] xl:h-[343px] 2xl:w-[542px] flex flex-col items-center justify-center gap-5">
                  <img
                    src={mapUSA}
                    alt="USA Map"
                    className="w-[280px] h-[280px] sm:w-[624px] sm:h-[416px] xl:w-[502px] xl:h-[343px] 2xl:w-[542px] object-cover"
                  />
                </div>
              </div>
            </div>
            {/* CANADA */}
            <div className="w-[280px] h-[875px] sm:w-[624px] sm:h-[799px] xl:w-[1160px] xl:h-[343px] 2xl:w-[1200px] flex flex-col items-center sm:items-end justify-between gap-10 xl:gap-[60px] xl:flex-row">
              {/* CANADA Address */}
              <div className="order-1">
                <div className="w-[280px] h-[555px] sm:w-[624px] sm:h-[343px] xl:w-[598px] flex flex-col items-center justify-center gap-5">
                  <p
                    className="w-[280px] h-[44px] sm:w-[624px] xl:w-[598px] text-[32px] text-center"
                    style={{ fontFamily: "DM Serif Display" }}
                  >
                    Canadian Office
                  </p>
                  <div className="w-[280px] h-[491px] sm:w-[624px] sm:h-[279px] xl:w-[598px] xl:h-[343px] flex flex-col items-center justify-center gap-5">
                    {/* address */}
                    <div className="w-[280px] h-[54px] sm:w-[624px] xl:w-[598px] flex items-center sm:justify-center gap-5">
                      <img
                        src={location}
                        alt="Location"
                        className="w-[26.67px] h-[33.33px]"
                      />
                      <p className="w-[218px] h-[54px] text-[18px]">
                        101 Courtland Avenue Vaughan, Ontario L4K 3T5
                      </p>
                    </div>
                    {/* horizontal line */}
                    <div className="w-[280px] sm:w-[624px] xl:w-[598px] h-[1px] bg-gray-400"></div>
                    {/* telephone and mail */}
                    <div className="w-[280px] h-[148px] sm:w-[624px] sm:h-[64px] xl:w-[598px] flex flex-col items-center justify-between sm:flex-row">
                      {/* call */}
                      <div className="w-[280px] h-[64px] sm:w-[302px] xl:w-[289px] flex items-center gap-5">
                        <img
                          src={call}
                          alt="call"
                          className="w-[30px] h-[30px]"
                        />
                        <div className="w-[220px] h-[64px] flex flex-col justify-between text-[18px]">
                          <p>T: (905) 760-0072</p>
                          <p>F: (905) 760-0073</p>
                        </div>
                      </div>
                      {/* mail */}
                      <div className="w-[280px] h-[64px] sm:w-[302px] xl:w-[289px] flex items-center gap-5">
                        <img
                          src={mail}
                          alt="mail"
                          className="w-[33.33px] h-[26.67px]"
                        />
                        <div className="w-[220px] h-[64px] flex flex-col justify-center text-[18px]">
                          <p>info@northcott.com</p>
                        </div>
                      </div>
                    </div>
                    {/* horizontal line */}
                    <div className="w-[280px] sm:w-[624px] xl:w-[598px] h-[1px] bg-gray-400"></div>
                    {/* time and delivery address */}
                    <div className="w-[280px] h-[209px] sm:w-[624px] sm:h-[81px] xl:w-[598px] flex flex-col items-center justify-between sm:flex-row">
                      {/* time */}
                      <div className="w-[280px] h-[108px] sm:w-[302px] sm:h-[81px] xl:w-[289px] flex items-center gap-5">
                        <img
                          src={schedule}
                          alt="schedule"
                          className="w-[33.33px] h-[33.33px]"
                        />
                        <div className="w-[220px] h-[81px] sm:w-[242px] xl:w-[229px] flex flex-col justify-between">
                          <p className="text-[18px]">
                            Office Hours Eastern Time: 9:00AM- 5:00PM Mon-Fri
                            Closed on weekends
                          </p>
                        </div>
                      </div>
                      {/* delivery address */}
                      <div className="w-[280px] h-[81px] sm:w-[302px] sm:h-[81px] xl:w-[289px] flex items-center gap-5">
                        <img
                          src={local_shipping}
                          alt="Local Shipping"
                          className="w-[36.67px] h-[26.64px]"
                        />
                        <div className="w-[220px] h-[81px] sm:w-[242px] xl:w-[229px] flex flex-col justify-center text-[18px]">
                          <p>Warehouse Hours:</p>
                          <p>9:00AM- 4:00PM Mon-Fri</p>
                          <p>Closed on weekends</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* map */}
              <div className="order-2">
                <div className="w-[280px] h-[280px] sm:w-[624px] sm:h-[416px] xl:w-[502px] xl:h-[343px] 2xl:w-[542px] flex flex-col items-center justify-center gap-5">
                  <img
                    src={mapCANADA}
                    alt="USA Map"
                    className="w-[280px] h-[280px] sm:w-[624px] sm:h-[416px] xl:w-[502px] xl:h-[343px] 2xl:w-[542px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* row 5 */}
        <div className="w-[320px] h-[1042px] sm:w-[744px] sm:h-[1006px] xl:w-[1280px] xl:h-[549px] 2xl:w-[1320px] flex flex-col items-center justify-between">
          <div className="w-[280px] h-[108px] sm:w-[624px] sm:h-[80px] xl:w-[1160px] xl:h-[86px] flex flex-col items-center justify-center text-center text-[32px] sm:text-[44px] xl:text-[48px]">
            Learn More About Us
          </div>
          <div className="w-[280px] h-[874px] sm:w-[624px] sm:h-[866px] xl:w-[1160px] xl:h-[403px] flex flex-col items-center justify-center xl:flex-row gap-[60px]">
            {/* card 1*/}
            <div className="w-[280px] h-[407px] sm:w-[550px] sm:h-[403px] flex flex-col items-center justify-between border">
              <img
                src={Image}
                alt="Image"
                className="w-[280px] h-[280px] sm:w-[550px] sm:h-[265px] object-cover"
              />
              <div className="pb-4 w-[280px] h-[97px] sm:w-[550px] sm:h-[108px] flex flex-col items-center justify-between px-5">
                <p className="w-[240px] h-[33px] sm:w-[510px] sm:h-[44px] text-[24px] sm:text-[32px] font-bold">
                  Wholesale Contacts
                </p>
                <Link to={"/product-collection/aboutWholesaleContacts"}>
                  <p className="w-[240px] h-[24px] sm:w-[510px] flex text-[#E2A856] text-start items-center justify-start cursor-pointer">
                    Explore
                    <IoIosArrowRoundForward size={30} color="#E2A856" />
                  </p>
                </Link>
              </div>
            </div>
            {/* card 2*/}
            <div className="w-[280px] h-[407px] sm:w-[550px] sm:h-[403px] flex flex-col items-center justify-between border">
              <img
                src={Image1}
                alt="Image"
                className="w-[280px] h-[280px] sm:w-[550px] sm:h-[265px] object-cover"
              />
              <div className="pb-4 w-[280px] h-[97px] sm:w-[550px] sm:h-[108px] flex flex-col items-center justify-between px-5">
                <p className="w-[240px] h-[33px] sm:w-[510px] sm:h-[44px] text-[24px] sm:text-[32px] font-bold">
                  Calendar
                </p>
                <Link to={"/product-collection/calendar"}>
                  <p className="w-[240px] h-[24px] sm:w-[510px] cursor-pointer flex text-[#E2A856] text-start items-center justify-start">
                    Explore
                    <IoIosArrowRoundForward size={30} color="#E2A856" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 6) */}
        <div className="w-[320px] h-[382px] sm:w-[744px] sm:h-[361px] xl:w-[1280px] xl:h-[491px] 2xl:w-[1320px] gap-[60px] flex flex-col items-center justify-center">
          <div className="w-[280px] h-[108px] sm:w-[624px] sm:h-[66px] xl:w-[1160px] xl:h-[84px] text-[18px] sm:text-[22px] xl:text-[28px] font-bold text-center flex items-center justify-center flex-col">
            Follow us on social media as we always have something exciting to
            share{" "}
            <span className="italic text-[#E2A856]"> #NorthcottFabrics</span>
          </div>
          {/* <Carousel /> */}
          <div className="w-[280px] h-[130px] sm:w-[624px] sm:h-[150px] xl:w-[1160px] xl:h-[260px]">
            <ImageSliderBottom />
          </div>
          {/* body footer */}
          <div className="w-[246px] h-[24px] sm:w-[296px] sm:h-[25px] xl:w-[309px] xl:h-[27px]">
            <div className="flex flex-row items-center justify-center">
              <div className="w-[102px] h-[24px] xl:w-[115px] xl:h-[27px] text-[16px] sm:text-[18px]">
                Follow us on :
              </div>
              <div className="w-[124px] h-[20px] sm:w-[174px] sm:h-[25px] flex items-center justify-evenly">
                <a href="#" className="cursor-pointer relative">
                  <div className="absolute top-0 left-0 hover:hidden">
                    <FaFacebookF color="#E2A856" size={"1.5rem"} />
                  </div>
                  <div className="block">
                    <FaFacebookF size={"1.5rem"} />
                  </div>
                </a>
                <a href="#" className="cursor-pointer relative">
                  <div className="absolute top-0 left-0 hover:hidden">
                    <FaTwitter color="#E2A856" size={"1.5rem"} />
                  </div>
                  <div className="block">
                    <FaTwitter size={"1.5rem"} />
                  </div>
                </a>
                <a href="#" className="cursor-pointer relative">
                  <div className="absolute top-0 left-0 hover:hidden">
                    <AiFillYoutube color="#E2A856" size={"1.5rem"} />
                  </div>
                  <div className="block">
                    <AiFillYoutube size={"1.5rem"} />
                  </div>
                </a>
                <a href="#" className="cursor-pointer relative">
                  <div className="absolute top-0 left-0 hover:hidden">
                    <FaInstagram color="#E2A856" size={"1.5rem"} />
                  </div>
                  <div className="block">
                    <FaInstagram size={"1.5rem"} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
