import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { styles } from "../style";
import logo from "../assets/logoseul.png";
import userlogedicon from "../assets/userlogedicon.png";
import bookpic from "../assets/bookpic.png";
import usericon from "../assets/usericon.png";

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
const BookPage = () => {
  return (
    <main
      className={` ${
        styles.paddingX + styles.paddingY
      } text-main-black h-auto bg-[#FFFEFD] flex-1`}
    >
        {/* <ScrollRestoration/> */}
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
        <h1 className="text-[45px] font-semibold text-main-marron">
          Informations sur le livre
        </h1>
        <div className="w-full h-[1px] my-5 bg-main-marron" />
      </div>
      <div className="pt-10 px-8 flex flex-col w-full bg-main-beige rounded-xl my-11">
        <div className="flex flex-row  ml-16">
          <div>
            <img src={bookpic} alt="" className="rounded-lg" />
          </div>
          <div className="flex flex-col justify-between items-start px-12">
            <h1 className="text-[40px] font-semibold text-main-black">
              The shining
            </h1>
            <p className="text-[30px] font-medium text-main-black">
              Stephen king
            </p>
            <p className="text-[20px] font-medium text-main-black max-w-5xl">
              Le nouveau travail de Jack Torrance à l'Overlook Hotel est
              l'occasion parfaite pour un nouveau départ. En tant que gardien de
              l'hôtel pendant la saison morte dans cet hôtel au charme ancien,
              il aura amplement de temps pour renouer avec sa famille et se
              consacrer à son écriture. Mais à mesure que les conditions
              météorologiques hivernales rigoureuses s'installent, l'emplacement
              idyllique semble de plus en plus isolé... et plus sinistre. Et le
              seul à remarquer les forces étranges et terribles qui se
              rassemblent autour de l'Overlook est Danny Torrance, un enfant de
              cinq ans doué d'une capacité unique.
            </p>
          </div>
        </div>
        <div className="flex flex-row px-24 mt-24 items-start justify-start pb-14  border-b-2 border-b-main-marron">
          <img src={usericon} alt="" />
          <div className="flex flex-col">
            <div className="flex flex-col px-3 pb-7 justify-center items-start">
              <p className="text-[18px] font-medium text-black">
                Chendek Abdou
              </p>
              <p className="text-[18px] font-medium text-main-black">
                abdou1.4
              </p>
            </div>
            <p className="px-3 text-[20px] font-medium max-w-[667px]">
              Je ne sais même pas quoi dire qui n'ait pas déjà été dit à ce
              sujet, mais laissez-moi essayer ...{" "}
              <span className="text-black font-bold">En savoir plus</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row px-24 mt-24 items-start justify-start pb-14  border-b-2 border-b-main-marron">
          <img src={usericon} alt="" />
          <div className="flex flex-col">
            <div className="flex flex-col px-3 pb-7 justify-center items-start">
              <p className="text-[18px] font-medium text-black">
                Mamouni Mehdi
              </p>
              <p className="text-[18px] font-medium text-main-black">
                mamouni0.2
              </p>
            </div>
            <p className="px-3 text-[20px] font-medium max-w-[667px]">
              Je ne sais même pas quoi dire qui n'ait pas déjà été dit à ce
              sujet, mais laissez-moi essayer ...{" "}
              <span className="text-black font-bold">En savoir plus</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center py-9">
          <p className="text-[20px] font-medium border-b-4 border-b-main-marron">
           Voir plus
          </p>  
        </div>
        <div className="w-[218px] h-[64px]">Ajouter une revue</div>
      </div>
    </main>
  );
};

export default BookPage;
