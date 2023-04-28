import React from "react";

const Footer = () => {
  return (
    <div className="fixed h-20 w-full bottom-0 left-0 flex py-2 bg-red-600 px-5">
      <div className="flex flex-1 justify-center items-center gap-4">
        <div>
          <img src="./img/clock-regular.svg" alt="" width={50} />
        </div>
        <div className=" text-white text-sm gap-2 text-center">
          <h6 className="text-sm font-bold">Horarios de Atención</h6>
          <p className="text-sm ">Lunes a Viernes: 8:00 - 16:30</p>
          <p className="text-sm ">Central de Emergencia: 24 horas</p>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center gap-4">
        <div>
          <img src="./img/location-dot-solid.svg" alt="" width={35} />
        </div>
        <div className=" text-white text-sm gap-2 text-center">
          <h6 className="text-sm font-bold">Ubicación</h6>
          <p className="text-sm ">Calle 12 y Avenida 11</p>
          <p className="text-sm ">372F+PXQ Manta</p>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center gap-4">
        <div>
          <img src="./img/phone-solid.svg" alt="" width={40} />
        </div>
        <div className=" text-white text-sm gap-2 text-center">
          <h6 className="text-sm font-bold">Contacto</h6>
          <p className="text-sm ">05 262-1777</p>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-4">
        <div className="flex items-end gap-4">
          <img src="./img/square-instagram.svg" alt="" width={37} />
          <img src="./img/square-facebook.svg" alt="" width={37} />
          <img src="./img/square-twitter.svg" alt="" width={37} />
          <img src="./img/square-youtube.svg" alt="" width={37} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
