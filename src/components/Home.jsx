import React from "react";
import bitcoinImg from "../assets/btc.png";
import TypeWriter from "typewriter-effect";
const Home = () => {
  return (
    <main className="w-full justify-evenly flex items-center max-[1300px]:flex-col mt-16  p-2  h-[95vh] bg-black">
      <h1 className="max-[535px]:text-5xl text-8xl font-light tracking-wider bg-clip-text bg-gradient-to-r from-rose-800 via-indigo-800 to-rose-800 text-transparent">
        <TypeWriter
          options={{
            strings: ["CRYPTO-X"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <figure>
        <img className="w-[700px] object-contain object-top" src={bitcoinImg} />
      </figure>
    </main>
  );
};

export default Home;
