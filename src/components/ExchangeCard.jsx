import React from "react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target={"blank"}>
      <div className=" flex flex-col items-center justify-evenly w-[200px] h-[200px] shadow-lg shadow-black/50 m-4 p-2 rounded-md">
        <figure>
          <img className="object-contain" src={img} />
        </figure>
        <h2 className="text-rose-800 font-medium text-xl text-center">
          {rank}
        </h2>
        <h3 className="text-rose-800 font-medium text-xl text-center">
          {name}
        </h3>
      </div>
    </a>
  );
};

export default ExchangeCard;
