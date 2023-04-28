import React from "react";
import Layout from "../layout/Layout";

const Simbolos = () => {
  return (
    <Layout>
      <div className="h-56">
        <div className="w-full h-full">
          <img className="h-full w-full" src="./img/noticias2.jpg" alt="" />
        </div>
        <div className="w-full flex justify-center relative">
          <div className="w-3/4 -top-12 bg-black opacity-75 absolute py-8 rounded-md text-center text-4xl text-white font-bold">
            Símbolos
          </div>
        </div>
        <div className="mt-20 px-8  ">
          <div className="flex gap-4 ">
            <img className="h-40 w-44 mt-4" src="./img/logo.png " alt="" />
            <div className="text-center w-full px-8">
              <h6 className="w-full font-bold px-8">
                Sello de Cuerpo de Bomberos Manta
              </h6>
              <div className="px-8 h-full rounded-md flex items-center justify-center text-justify">
                El Escudo oficial de los Cuerpos de Bomberos de la República
                será: en el centro de un óvalo, otro más pequeño, y dentro de
                este último el escudo de la ciudad o provincia.
                <br /> En la parte posterior, en el centro, se colocará una
                bocina de mando en posición vertical, con la campana hacia
                abajo. En forma diagonal se colocará a la derecha un hacha de
                pico, y a la izquierda un pitón cruzando horizontalmente una
                escala.
              </div>
            </div>
          </div>
          <div className="text-center w-full px-8">
            <h6 className="w-full font-bold px-8">
              Himno de Cuerpo de Bomberos MANTA
            </h6>
            <div className="flex w-full">
              <div className="px-8 h-full w-full rounded-md flex justify-center text-justify">
                <div className="">
                  <h6 className="w-full font-bold px-8 text-center mb-2">
                    Coro
                  </h6>
                  <div className="px-8 h-full flex justify-center text-center lowercase">
                    Es acaso el bombero el soldado más altivo, más digno y
                    glorioso; el sin par DEFENSOR CONSAGRADO POR SU AMOR A UN
                    DEBER LUMINOSO
                  </div>
                </div>
                <div className="">
                  <h6 className="w-full font-bold px-8 text-center">
                    Estrofas
                  </h6>
                  <div className="px-8 h-full flex justify-center text-center">
                    <div className="flex flex-col">
                      <div className="px-4">
                        <h6 className="w-full font-bold px-8 text-center">I</h6>
                        <div className="lowercase">
                          EL DEBER ES TU ALIENTO FECUNDO; TU EN HÉROE TE HAS
                          CONVERTIDO Y HASTA EL MAR PRISIONERO Y PROFUNDO SU
                          POTENCIA TE DA EN SU RUGIDO
                        </div>
                      </div>
                      <div className="px-4">
                        <h6 className="w-full font-bold px-8 text-center">
                          II
                        </h6>
                        <div className="lowercase">
                          VUESTRO NOMBRE, BOMBERO DE MANTA, GRAN HONOR TIENE YA
                          CONQUISTADO Y POR ESO MI NUMEN TE CANTA DESDE EL SITIO
                          DO ESTÁS ADMIRADO
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="px-4">
                        <h6 className="w-full font-bold px-8 text-center">
                          III
                        </h6>
                        <div className="lowercase">
                          GALARDÓN A TU NOMBRE, VALIENTE!!... GLORIA SIEMPRE A
                          TU CAUSA, ADALID. LLEVA UN LAURO EL BOMBERO EN LA
                          FRENTE, REPRESENTA EL BOMBERO LA LID
                        </div>
                      </div>
                      <div className="px-4">
                        <h6 className="w-full font-bold px-8 text-center">
                          IV
                        </h6>
                        <div className="lowercase">
                          QUÉ TE IMPORTA SI EL MAL SE ENCARNIZA O DE LLAMAS SE
                          CUBRE EL CAMINO? ¡TU GRANDIOSA MISIÓN SIMBOLIZA UN
                          EJEMPLO EN EL MUNDO, UN DESTINO
                        </div>
                      </div>
                      <div className="flex flex-col h-32">
                        <div className="px-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Simbolos;
