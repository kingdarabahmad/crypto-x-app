import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";
import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";
import { server } from "../main";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <ErrorComponent />;

  return (
    <main className="flex flex-wrap mt-24 mb-8 justify-center">
      {loading ? (
        <Loader />
      ) : (
        exchanges.map((item) => (
          <ExchangeCard
            key={item.id}
            name={item.name}
            img={item.image}
            rank={item.trust_score_rank}
            url={item.url}
          />
        ))
      )}
    </main>
  );
};

export default Exchanges;
