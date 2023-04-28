import React from "react";
import Layout from "../layout/Layout";

const Noticias = () => {
  return (
    <Layout>
      <div className="h-56">
        <div className="w-full h-full">
          <img className="h-full w-full" src="./img/noticias2.jpg" alt="" />
        </div>
        <div className="w-full flex justify-center relative">
          <div className="w-3/4 -top-12 bg-black opacity-75 absolute py-8 rounded-md text-center text-4xl text-white font-bold">
            Noticias
          </div>
        </div>
        <div className="mt-20 px-8 ">
          <div className="flex gap-4">
            <img src="./img/categoria3.jpg " alt="" width={300} />
            <div className="  text-center w-full px-4">
              <h6 className="w-full upercasse font-bold">
                TÍTULO DE LA NOTICIA
              </h6>
              <div className="bg-gray-200 h-40 rounded-md flex items-center justify-center">
                DESCRIPICION DE LA NOTICIA
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Noticias;
