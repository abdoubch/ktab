import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ ...props }) => {
  return (
    <>
      <main className=" w-[388px] h-[472px] text-center bg-[#F9F6F0] my-7 flex flex-col justify-between items-center rounded-xl cursor-pointer hover:shadow-lg hover:shadow-main-marron transition-all duration-[0.4s]">
        <div className="absolute -mt-10 z-10">
          <Link to="/user">
            <div className="bg-[#F9F6F0] h-[88px] w-[88px] rounded-full flex justify-center items-center">
              <img
                src={props.owner}
                alt="userpic"
                className="p-2 bg-main-black rounded-full"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/book">
            <img src={props.img} alt="book_cover" />
          </Link>
        </div>
        <div className="flex justify-around flex-col items-center mb-6">
          <div className="m-5">
            <Link to="/book">
              <h1 className="font-bold text-[30px] ">{props.title}</h1>
              {props.vente === true ? (
                <p className="font-bold text-[20px] text-main-marron">vente</p>
              ) : (
                <p className="font-bold text-[20px] text-main-marron">
                  echange
                </p>
              )}
            </Link>
          </div>
          <div className="flex justify-center items-center w-[203px] h-[65px] border-2 border-main-marron rounded-xl cursor-pointer text-[20px] font-semibold hover:bg-main-marron hover:text-main-beige transition-colors duration-[0.5s] ">
            <Link>Contact</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookCard;
