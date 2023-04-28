import React from "react";
import PropTypes from "prop-types";

const CardCapacitacion = ({ img, title, url }) => {
  return (
    <div className="w-full h-40">
      <h6 className="font-bold text-center mb-2">{title}</h6>
      <img className="m-auto w-60 h-full rounded-lg " src={img} alt="" />
      <div className="w-60 m-auto text-end">
        <a className="font-semibold hover:text-gray-500" href={url}>
          Ver más
        </a>
      </div>
    </div>
  );
};
CardCapacitacion.prototype = {
  img: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default CardCapacitacion;
