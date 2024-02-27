import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <>
      <h1 className="text-lg flex items-center">
        <FaSpinner className="animate-spin m-2" size={40} /> Loading...
      </h1>
    </>
  );
};

export default Loading;
