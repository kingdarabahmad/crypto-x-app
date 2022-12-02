import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { server } from "../main";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import { ImArrowDownRight2, ImArrowUpRight2 } from "react-icons/im";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const { id } = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${id}`);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  function handleChange(e) {
    const { value } = e.target;
    setCurrency(value);
  }

  //   if(loading) return <Loader/>

  if (error) return <ErrorComponent />;
  return (
    <main className="flex justify-center items-center w-full h-[80vh]">
      <div className=" flex flex-col justify-between rounded-md shadow-lg shadow-black/50 max-[400px]:text-xs  w-[80%] h-[100%] mt-56 p-6">
        <div className="flex gap-2 font-medium">
          <input
            type="Radio"
            value="inr"
            id="inr"
            onChange={handleChange}
            checked={currency === "inr"}
          />
          <label htmlFor="inr">INR</label>
          <input
            type="Radio"
            value="usd"
            id="usd"
            onChange={handleChange}
            checked={currency === "usd"}
          />
          <label htmlFor="usd" id="eur">
            USD
          </label>
          <input
            htmlFor="eur"
            type="Radio"
            value="eur"
            onChange={handleChange}
            checked={currency === "eur"}
          />
          <label>EUR</label>
        </div>

        <div className="flex justify-center text-gray-400">
          <p className="text-center">
            Last Update on {Date(coin.market_data?.last_updated).split("G")[0]}
          </p>
        </div>

        <div className=" flex flex-col  space-y-2">
          <figure>
            <img
              className="object-contain"
              width={70}
              src={coin.image?.large}
            />
          </figure>
          <h1 className="font-bold text-lg text-rose-800">{coin.name}</h1>
          <h2 className="font-bold text-2xl text-rose-800">
            {currencySymbol}
            {coin.market_data?.current_price[currency]}
          </h2>
          <div className="flex flex-row justify-start items-center gap-2">
            {coin.market_data?.price_change_percentage_24h > 0 ? (
              <ImArrowUpRight2 className="text-green-500" />
            ) : (
              <ImArrowDownRight2 className="text-red-500" />
            )}

            <h3 className="font-bold text-rose-800">
              {coin.market_data?.price_change_percentage_24h}%
            </h3>
          </div>
          <h4 className="w-[90px] text-white text-xl text-center font-bold rounded-md bg-rose-800 p-2">{`#${coin.market_cap_rank}`}</h4>
        </div>

        <div className="flex flex-col  text-indigo-800 font-bold gap-2 ">
          <div className="flex flex-row justify-between w-full">
            <p>Max Supply</p>
            <p>{coin.market_data?.max_supply}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Circulating Supply</p>
            <p>{coin.market_data?.circulating_supply}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Market Cap</p>
            <p>{`${currencySymbol}${coin.market_data?.market_cap[currency]}`}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>All Time Low</p>
            <p>{`${currencySymbol}${coin.market_data?.atl[currency]}`}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>All Time High</p>
            <p>{`${currencySymbol}${coin.market_data?.ath[currency]}`}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoinDetails;
