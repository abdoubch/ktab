import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { styles } from "../style";


const NavBar = () => {
    const [active, setActive] = useState("HOME")
    const navLinks = [
      {
        id: "/",
        title: "HOME",
      },
      {
        id: "/recherche",
        title: "RECHERCHER",
      },
      {
        id: "/magasin",
        title: "MAGASIN",
      },
      {
        id: "/revue",
        title: "REVUE",
      },
     
    ];
  return (
    <nav className="w-full flex items-center py-5 sticky top-0 z-20 bg-white border-b-2 shadow-md shadow-main-black/10">
      <div
        className={`w-full flex justify-between items-center  ${styles.paddingX}`}
      >
        <div></div>
        <div></div>
        <Link
          to="/"
          className="flex items-center gap-2 absolute left-0 top-0"
          onClick={() => {
            setActive("HOME");
          }}
        >
          <img src={logo} alt="logo" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? " text-main-marron" : "text-black"
              } text-[18px] font-semibold transition-color duration-[0.5s]`}
            >
              <Link to={`${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className=" hidden sm:flex justify-around  items-center gap-3">
          <div className="px-6 py-3  hover:bg-main-marron/40 hover:text-black duration-[0.5s] transition-all  rounded-xl text-[18px] cursor-pointer text-main-marron">
            Se Connecter
          </div>
          <div className="px-6 py-3 bg-main-marron hover:bg-main-marron/40 hover:text-black duration-[0.5s] transition-all text-[18px]  rounded-2xl cursor-pointer text-white">
            S'inscrire
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
