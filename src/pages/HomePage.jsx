import React from "react";
import { Hero, NavBar } from "../components";
import BookList from "../components/BookList";
import { styles } from "../style";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={`${styles.paddingX} bg-[#FFFEFD] text-main-black`}>
        <Hero />
        <Services />
        <BookList />
      </div>
    </>
  );
};

export default HomePage;
