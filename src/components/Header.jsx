import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 flex  w-full bg-gradient-to-r from-rose-800 via-indigo-800 to-rose-800 p-6 shadow-md shadow-gray-800 ">
      <div className=" flex gap-4 text-white font-medium max-[400px]:text-lg text-xl tracking-widest">
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/coins">Coins</Link>
      </div>
    </header>
  );
};

export default Header;
