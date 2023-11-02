import React from "react";
import { styles } from "../style";
import heropic from "../assets/HeroPic.png";

const Hero = () => {
  return (
    <main className={` ${styles.paddingY} w-full h-screen pt-7`}>
      <div className="flex justify-between items-center">
        <div>
          <div className="max-w-4xl">
            <h1 className="text-main-black text-[65px] font-bold">
              La Première Plateforme dédiée au lecteur en Algerie.{" "}
            </h1>
          </div>
          <div className="max-w-2xl mb-5">
            <p className="text-main-marron text-[35px] font-semibold">
              Vendre, echanger, et discuter vos livre .
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[153px] h-[153px] bg-main-marron"></div>
            <div className="flex  h-[91px] border-y-[3px] border-main-marron text-black">
              <div className="border-r-[3px] border-main-marron flex justify-center items-center p-3 ">
                <div>
                  <p className="font-bold text-center">700 +</p>
                  <p className="text-[18px] font-normal">Review</p>
                </div>
              </div>
              <div className="border-r-[3px] border-main-marron flex justify-center items-center p-3 ">
                <div>
                  <p className="font-bold text-center">1k +</p>
                  <p className="text-[18px] font-normal">Users</p>
                </div>
              </div>
              <div className="border-r-[3px] border-main-marron flex justify-center items-center p-3 ">
                <div>
                  <p className="font-bold text-center">+ 100 </p>
                  <p className="text-[18px] font-normal">Books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={heropic} alt="books" className="absolute right-10 bottom-8" />
      </div>
    </main>
  );
};

export default Hero;
