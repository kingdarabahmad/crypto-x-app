import React from "react";
import { SpinnerInfinity, SpinnerRoundOutlined } from "spinners-react";

const Loader = () => {
  return (
    <div className="w-full h-[80vh] grid place-items-center">
      <SpinnerRoundOutlined size={"150px"} color="indigo" speed={100} />
    </div>
  );
};

export default Loader;
