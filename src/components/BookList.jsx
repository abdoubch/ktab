import React from "react";
import BookCard from "./BookCard";
import { styles } from "../style";
import bookcover from "../assets/bookcover1.png"
import bookcover2 from "../assets/bookcover2.png"
import bookcover3 from "../assets/bookcover3.png";
import bookcover4 from "../assets/bookcover4.png";
import bookcover5 from "../assets/bookcover5.png";
import bookcover6 from "../assets/bookcover6.png";
import usericon from "../assets/usericon.png"
import { Link } from "react-router-dom";

const BookList = () => {
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
  ];
  return (
    <main>
      <ul className={`flex flex-wrap justify-between items-center ${styles.paddingY}`}>
        {books.map((book) => (
          <li className="">
            <BookCard title={book.title} img={book.image} vente={book.vente} owner={book.owner}/>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center py-3"><p className="text-[20px] font-medium border-b-4 border-b-main-marron"><Link to="/magasin">Voir plus</Link></p></div>
    </main>
  );
};

export default BookList;
