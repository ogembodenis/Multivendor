import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { categoriesData, productData } from "./data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "../../Layout/DropDown";

const Hero = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div
      className={`relative min-h-[90vh] 800px:min-h-[50vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80)",
        backgroundPosition: "right center", // Set background position
        backgroundSize: "100% auto", // Set background size
      }}
    >
      <div className={`flex w-full ${styles.section} 800px:w-[90%]`}>
        {/* <div className={`w-[25%] 800px:w-[40%] p-4`} style={{padding:0}}> */}
        {/* Content for the first column */}

        {/* <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[0px] w-[270px] hidden 1000px:block"> */}
        {/* <BiMenuAltLeft size={30} className="absolute top-3 left-2" /> */}
        {/* <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button> */}
        {/* <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              /> */}
        {/* {dropDown ? ( */}
        {/* <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                /> */}
        {/* ) : null} */}
        {/* </div>
          </div> */}

        {/* You can add your content here */}
        {/* </div> */}
        <div className={`w-[100%] 800px:w-[100%] p-4`}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffff3a] font-[600] capitalize`}
          >
            Best Collection for <br /> your wardrobe
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffba]">
            Explore an Exquisite Selection of High-Quality Clothing and Accessories for Every Season and Occasion. 
            <br />Uncover the Perfect Ensemble to Elevate Your Style and Feel Confident in Your Wardrobe Choices,
            <br /> We Curate the Latest Trends and Timeless Classics to Cater to Your Fashion Needs{" "}
            <br /> Whether It's Casual Comfort or Elegant Elegance. Your Go-To Destination for Fashion Excellence.
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
