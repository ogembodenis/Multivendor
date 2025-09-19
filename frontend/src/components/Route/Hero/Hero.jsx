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
          "url(Banner.png)",
        backgroundPosition: "right center", 
        backgroundSize: "100% auto", 
      }}
    >
      <div className={`flex w-full ${styles.section} 800px:w-[90%]`}>
        <div className={`w-[100%] 800px:w-[100%] p-4`}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[blue] font-[600] capitalize`}
          >
            Stay productive. <br/>Stay connected. <br/>Stay you.
          </h1>
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
