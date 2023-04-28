import React from "react";
import PropTypes from "prop-types";

const CardPeriodo = ({ title }) => {
  return (
    <div className="w-80 rounded-md flex justify-center m-auto bg-gray-700 py-4 text-white font-bold text-xl">
      {title}
    </div>
  );
};
CardPeriodo.prototype = {
  title: PropTypes.string,
};

export default CardPeriodo;
