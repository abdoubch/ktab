import React from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import logo from "../assets/logoseul.png";
import userlogedicon from "../assets/userlogedicon.png";
import searchpic from "../assets/searchpic.png";


function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}


function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
const SearchPage = () => {
  return (
    <main
      className={` text-main-black h-auto bg-[#FFFEFD] flex-1`}
    >
      <div className={`flex flex-row items-center justify-between ${styles.paddingX + styles.paddingY} `}>
        <div className="">
          <Link to="/">
            <ArrowLeft />
          </Link>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="w-[106px] h-[56px] ring-2 ring-main-marron  rounded-xl  flex flex-row items-center justify-around">
          <div onClick={() => {}}>
            <Menu />
          </div>
          <div>
            <img src={userlogedicon} alt="" />
          </div>
        </div>
      </div>
      <div className="h-screen bg-main-marron flex flex-col justify-around items-center  ">
        <div className={`w-[630px] h-[93px] bg-main-beige rounded-3xl flex flex-row items-center justify-between mx-11`}>
           <input type="text" className="h-full w-full rounded-l-3xl bg-transparent border-0 px-5 placeholder:text-black placeholder:text-[25px] items-center" placeholder="Rechercher .." />
        <div className="cursor-pointer rounded-xl bg-main-marron w-[52px] h-[52px] flex justify-center items-center mx-5"><Searchicon/></div>
        </div>
        <div className="">
            <img src={searchpic} alt="" />
        </div>
      </div>
    </main>
  );
};

export default SearchPage;


function Searchicon(){
    return (
        <div className="text-white">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
        </div>
    );
}