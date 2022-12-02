import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "./Loader";
import CoinsCard from "./CoinsCard";
import ErrorComponent from "./ErrorComponent";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = new Array(132).fill(1);

  const changePage = (pageNo) => {
    setPage(pageNo);
    setLoading(true);
  };

  function handleChange(e) {
    const { value } = e.target;
    setCurrency(value);
  }

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent />;

  return (
    <main className="w-full flex flex-col items-center mt-28 mb-8">
      {loading ? (
        <Loader />
      ) : (
        <>
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
          <div className="flex flex-wrap justify-center mt-4">
            {coins.map((item) => (
              <CoinsCard
                id={item.id}
                key={item.id}
                name={item.name}
                img={item.image}
                symbol={item.symbol}
                price={item.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </div>
          <div className="flex gap-2 w-full overflow-x-auto p-8">
            {btns.map((item, index) => (
              <button
                className=" text-white p-1 rounded-md bg-gradient-to-r from-rose-800 to-indigo-800 "
                key={index}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <footer>
            <h4 className="font-medium text-rose-800">Page.No || {page}</h4>
          </footer>
        </>
      )}
    </main>
  );
};

export default Coins;
