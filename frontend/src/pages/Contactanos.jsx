import React from "react";
import CardContacto from "../components/CardContacto";
import Layout from "../layout/Layout";

const Contactanos = () => {
  return (
    <Layout>
      <div className="">
        <div className="w-full h-60">
          <img className="h-full w-full" src="./img/noticias2.jpg" alt="" />
        </div>
        <div className="w-full flex justify-center relative">
          <div className="w-3/4 -top-12 bg-black opacity-75 absolute py-8 rounded-md text-center text-4xl text-white font-bold">
            Contáctanos
          </div>
        </div>
        <div className="mt-20 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <CardContacto color="gray-700">
                <p className="font-bold text-xl text-center">Estación 2</p>
                <div className="px-2">
                  <p>27VM+GWM, C. 104, Manta 130203</p>
                  <p>
                    <strong>  Horario:</strong> Lunes - Viernes 8:00 - 16:30
                  </p>
                  <p>
                    <strong>Emergencia</strong> 24 hrs Telefono
                  </p>
                </div>
              </CardContacto>
            </div>
            <div className="col-span-1">
              <CardContacto color="red-500">
                <p className="font-bold text-xl text-center">Estación 3</p>
                <div className="px-2">
                  <p>27CW+623, Manta. </p>
                  <p>
                    <strong>Horarios:</strong> Lunes - Viernes 8:00 - 16:30
                  </p>
                  <p>
                    <strong>Emergencia</strong> 24 hrs Telefono
                  </p>
                </div>
              </CardContacto>
            </div>
            <div className="col-span-1">
              <CardContacto color="gray-700">
                <p className="font-bold text-xl text-center">Estación 4</p>
                <div className="px-2">
                  <p>27XX+W6J, Av. 102, Manta 130204</p>
                  <p>
                    <strong>Horarios:</strong> Lunes - Viernes 8:00 - 16:30
                  </p>
                  <p>
                    <strong>Emergencia</strong> 24 hrs Telefono
                  </p>
                </div>
              </CardContacto>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contactanos;
