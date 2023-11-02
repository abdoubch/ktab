import React from "react";
import { styles } from "../style";
import ServiceCard from "./ServiceCard";
import rechpic from "../assets/rechpic.png"
import sellpic from "../assets/sellchangepic.png";
import discusspic from "../assets/discusspic.png"
const Services = () => {
  const services = [
    {
      image: rechpic,
      titre: "Rechercher des livres",
      description: "Trouver le livre qui vous convient grace a notre recherche avancee",
    },
    {
      image: sellpic,
      titre: "Vendre, echange des livres",
      description: "Vendez et echanger vos livres avec d'autres lecteurs",
    },
    {
      image: discusspic,
      titre: "Discuter vos livres preferes",
      description: "Organiser et rejoignez des salons de discussion",
    },
  ];
  return (
    <main className={`${styles.paddingX + styles.paddingY} flex flex-col items-center w-full`}>
      <h1 className="text-[50px] font-bold text-main-marron">Nos Services</h1>
      <div className="mt-16">
        <ul className="flex flex-row justify-around items-center">
          {services.map((service) => (
            <li className="mx-10 list-none">
              <ServiceCard image={service.image} title={service.titre} descrp={service.description} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Services;
