import React from "react";
import CardPeriodo from "../components/CardPeriodo";
import Layout from "../layout/Layout";

const RendicionCuentas = () => {
  return (
    <Layout>
      <div className="">
        <div className="w-full h-60">
          <img className="h-full w-full" src="./img/noticias2.jpg" alt="" />
        </div>
        <div className="w-full flex justify-center relative">
          <div className="w-3/4 -top-12 bg-black opacity-75 absolute py-8 rounded-md text-center text-4xl text-white font-bold">
            Rendición de Cuentas
          </div>
        </div>
        <div className="mt-20 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2022" />
            </div>
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2021" />
            </div>
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2020" />
            </div>
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2019" />
            </div>
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2018" />
            </div>
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2017" />
            </div>
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2016" />
            </div>
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2015" />
            </div>
            <div className="col-span-1">
              <CardPeriodo title="Periodo 2014" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RendicionCuentas;
