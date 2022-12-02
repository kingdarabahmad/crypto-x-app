import React from "react";
import { Link } from "react-router-dom";

const CoinsCard = ({ id, name, price, symbol, img, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coins/${id}`}>
      <div className=" flex flex-col items-center justify-evenly w-[200px] h-[200px] shadow-lg shadow-black/50 m-4 p-2 rounded-md">
        <figure>
          <img className="object-contain" width={60} src={img} />
        </figure>
        <h2 className="text-rose-800 font-medium text-xl text-center">
          {symbol}
        </h2>
        <h3 className="text-rose-800 font-medium text-xl text-center">
          {name}
        </h3>
        <h3 className="text-rose-800 font-medium text-xl text-center">
          {price ? `${currencySymbol} ${price}` : "NA"}
        </h3>
      </div>
    </Link>
  );
};

export default CoinsCard;
