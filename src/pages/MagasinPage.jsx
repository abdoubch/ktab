import React from "react";
import { styles } from "../style";
import logo from "../assets/logoseul.png";
import { Link } from "react-router-dom";
import userlogedicon from "../assets/userlogedicon.png";
import BookCard from "../components/BookCard";
import bookcover from "../assets/bookcover1.png";
import bookcover2 from "../assets/bookcover2.png";
import bookcover3 from "../assets/bookcover3.png";
import bookcover4 from "../assets/bookcover4.png";
import bookcover5 from "../assets/bookcover5.png";
import bookcover6 from "../assets/bookcover6.png";
import usericon from "../assets/usericon.png";

function Fleche() {
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
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const MagasinPage = () => {
     const books = [
       {
         title: "The Alchemist",
         image: bookcover,
         vente: true,
         owner: usericon,
       },
       {
         title: "Kafka on the Shore",
         image: bookcover2,
         vente: false,
         owner: usericon,
       },
       {
         title: "El-Muqaddimah",
         image: bookcover3,
         vente: true,
         owner: usericon,
       },
       {
         title: "Les paradis artificelle",
         image: bookcover4,
         vente: true,
         owner: usericon,
       },
       {
         title: "L'etranger",
         image: bookcover5,
         vente: true,
         owner: usericon,
       },
       {
         title: "Life of pi",
         image: bookcover6,
         vente: true,
         owner: usericon,
       },
       {
         title: "The Alchemist",
         image: bookcover,
         vente: true,
         owner: usericon,
       },
       {
         title: "Kafka on the Shore",
         image: bookcover2,
         vente: false,
         owner: usericon,
       },
       {
         title: "El-Muqaddimah",
         image: bookcover3,
         vente: true,
         owner: usericon,
       },
       {
         title: "Les paradis artificelle",
         image: bookcover4,
         vente: true,
         owner: usericon,
       },
       {
         title: "L'etranger",
         image: bookcover5,
         vente: true,
         owner: usericon,
       },
       {
         title: "Life of pi",
         image: bookcover6,
         vente: true,
         owner: usericon,
       },
     ];
  return (
    <main
      className={` ${
        styles.paddingX + styles.paddingY
      } text-main-black h-auto bg-[#FFFEFD] flex-1`}
    >
      <div className="flex flex-row items-center justify-between ">
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
      <div className="px-8 p-12">
        <h1 className="text-[45px] font-semibold text-main-marron">Magasin</h1>
        <div className="w-full h-[1px] my-5 bg-main-marron" />
        <div className="flex flex-row justify-end items-center">
          <div className="flex flex-row items-center cursor-pointer px-9">
            <p className="px-6">Vente</p>
            <Fleche />
          </div>
          <div className="flex flex-row items-center cursor-pointer px-9">
            <p className="px-6">Type</p>
            <Fleche />
          </div>
          <div className="flex flex-row items-center cursor-pointer px-9">
            <p className="px-6">Genre</p>
            <Fleche />
          </div>
        </div>
      </div>
      <ul
        className={`flex flex-wrap justify-between items-center ${styles.paddingY}`}
      >
        {books.map((book) => (
          <li className="">
            <BookCard
              title={book.title}
              img={book.image}
              vente={book.vente}
              owner={book.owner}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MagasinPage;

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


