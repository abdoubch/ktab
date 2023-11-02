import React from "react";

const ServiceCard = ({ ...props }) => {
  return (
    <main className="w-[321px] h-[412px] bg-main-beige border-[2px] border-main-marron flex  flex-col justify-around items-center">
      <div className="mt-14">
        <img src={props.image} alt="picillustration" />
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-[20px] font-semibold text-main-marron w-[190px] h-[60px] text-center">
          {props.title}
        </h1>
        <p className="text-center p-5 w-full">{props.descrp}</p>
      </div>
    </main>
  );
};

export default ServiceCard;
