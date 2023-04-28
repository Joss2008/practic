import React from "react";
import Layout from "../layout/Layout";

const QuienesSomos = () => {
  return (
    <Layout>
      <div className="">
        <div className="w-full h-60">
          <img className="h-full w-full" src="./img/home1-img.jpeg" alt="" />
        </div>
        <div className="w-full flex justify-center relative">
          <div className="w-1/2 -top-12 bg-black opacity-75 absolute py-8 rounded-md px-4 text-white font-bold ">
            <h1 className="text-4xl"> ¿Quiénes somos?</h1>
            <p>
              Somos una institución pública dedicada a la prevención y extinción
              de incendios.
            </p>
          </div>
        </div>
        <div className="mt-24 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <div className="w-96 h-40 rounded-md px-2 m-auto py-2 text-white bg-gray-700">
                <h4 className="text-center mb-2 font-bold text-2xl text-black">
                  Misión
                </h4>
                <p className="text-justify text-xs">
                  Somos una entidad eminentemente técnica al servicio de la
                  ciudadanía para salvar vidas y proteger bienes a través de
                  medidas de prevención de riesgos, mitigación de incendios y
                  atención efectiva de emergencias de carácter natural o
                  antrópico
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-96 h-40 rounded-md px-2 m-auto py-2 text-white bg-red-600">
                <h4 className="text-center mb-2 font-bold text-2xl text-black">
                  Visión
                </h4>
                <p className="text-justify text-xs">
                  Ser una institución eficiente que brinde servicios de calidad
                  en prevención de riesgos y mitigación de incendios a la
                  comunidad, contando con personal calificado y con vocación de
                  servicio para precautelar los bienes y la vida de la
                  ciudadanía Mantense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuienesSomos;
