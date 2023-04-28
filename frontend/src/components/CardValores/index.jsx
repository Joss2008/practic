import React from "react";
import PropTypes from "prop-types";

const CardValores = ({ title, content, color }) => {
  return (
    <div
      className={`w-96 h-40 rounded-md px-2 m-auto py-2 text-white bg-${color}`}
    >
      <h4 className="text-center mb-2 font-bold text-2xl">{title}</h4>
      <p className="text-justify ">{content}</p>
    </div>
  );
};
CardValores.prototype = {
  cotitlelor: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
};

export default CardValores;
