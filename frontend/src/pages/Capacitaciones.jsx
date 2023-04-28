import React from "react";
import CardCapacitacion from "../components/CardCapacitacion";
import Layout from "../layout/Layout";

const Capacitaciones = () => {
  return (
    <Layout>
      <div className="">
        <div className="w-full h-60">
          <img className="h-full w-full" src="./img/noticias2.jpg" alt="" />
        </div>
        <div className="w-full flex justify-center relative">
          <div className="w-3/4 -top-12 bg-black opacity-75 absolute py-8 rounded-md text-center text-4xl text-white font-bold">
            Capacitaciones
          </div>
        </div>
        <div className="mt-20 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <CardCapacitacion
                title="Capacitación contra Incendios"
                img="./img/productos3.jpg"
                url="/noticia1"
              />
            </div>
            <div className="col-span-1">
              <CardCapacitacion
                title="Capacitación Área Técnico"
                img="./img/noticias3.jpg"
                url="/noticia1"
              />
            </div>
            <div className="col-span-1">
              <CardCapacitacion
                title="Capacitación contra Incendios"
                img="./img/productos1.jpg"
                url="/noticia1"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Capacitaciones;
