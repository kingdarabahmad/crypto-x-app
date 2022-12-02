import React from "react";

const ErrorComponent = () => {
  return (
    <div className="w-full h-[80vh] grid place-items-center">
      <h1 className="text-2xl text-center font-medium text-gray-400">
        {" "}
        Something went wrong unable to fetch the data
      </h1>
    </div>
  );
};

export default ErrorComponent;
