import React from "react";
import PropTypes from "prop-types";

const CardContacto = ({ children, color }) => {
  return (
    <div className={`w-80 rounded-md px-2 m-auto py-4 text-white bg-${color}`}>
      {children}
    </div>
  );
};
CardContacto.prototype = {
  color: PropTypes.string,
};

export default CardContacto;
