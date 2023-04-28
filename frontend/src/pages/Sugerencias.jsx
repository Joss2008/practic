import React from "react";
import Layout from "../layout/Layout";

const Sugerencias = () => {
  return (
    <Layout>
      <h1 className="text-center text-red-700 font-bold text-xl mt-4">
        Sugerencias, denuncias y reconocimiento
      </h1>
      <div className="bg-red-700 text-white  py-4 px-4 mr-8 ml-8 font-bold  border border-4 border-black rounded-md mt-4">
        Sugerencias: Iniciativas propuestas por los ciudadanos o contibuyentes
        para mejorar el servicio de los Bomberos. Denuncias: Expresiones de
        descontento de los ciudadanos o contribuyentes hacia los servicios del
        cuerpo de Bomberos. Reconocimientos: Expresiones de satisfacción de
        contribuyentes o ciudadanos hacia los servicios del cuerpo de Bomberos.
      </div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex px-8">
          <div className="flex-col flex-1 mr-8">
            <div class="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="ApellidosyNombres"
              >
                Apellidos y Nombres
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ApellidosyNombres"
                type="text"
                placeholder="Apellidos y Nombres"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Correoelectronico"
              >
                Correo electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Correoelectronico"
                type="text"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className=" text-gray-700 text-sm font-bold mr-2"
                for="evento"
              >
                ¿Indique dónde ocurrió el evento? "Ventanillas, oficina,
                Departamento, Estación de Bomberos o espacio público"?
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="evento"
                type="text"
                placeholder="Evento"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className=" text-gray-700 text-sm font-bold mr-2"
                for="hora"
              >
                Hora en la que se presentaron los hechos
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hora"
                type="text"
                placeholder="Hora"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className=" text-gray-700 text-sm font-bold mr-2">
                Motivo de sugerencia, queja y felicitación
              </label>
              <div className="px-1">
                <input
                  type="radio"
                  id="calidadServicio"
                  name="valueMotivo"
                  value="calidadServicio"
                />
                <label for="calidadServicio">
                  Calidad del servicio recibido
                </label>
              </div>
              <div className="px-1">
                <input
                  type="radio"
                  id="calidadInformacion"
                  name="valueMotivo"
                  value="calidadInformacion"
                />
                <label for="calidadInformacion">
                  Calidad de la información brindada
                </label>
              </div>
              <div className="px-1">
                <input
                  type="radio"
                  id="tiempoEspera"
                  name="valueMotivo"
                  value="tiempoEspera"
                />
                <label for="tiempoEspera">Tiempo de espera y atención</label>
              </div>
              <div className="px-1">
                <input
                  type="radio"
                  id="solucionpeticion"
                  name="valueMotivo"
                  value="solucionpeticion"
                />
                <label for="solucionpeticion">
                  Solución a su petición o problema
                </label>
              </div>
              <div className="px-1">
                <div className="flex">
                  <input
                    type="radio"
                    id="otro"
                    name="valueMotivo"
                    value="otro"
                  />
                  <label className="flex items-center px-1" for="otro">
                    Otro
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="otroInputValue"
                    type="text"
                    placeholder="Otro"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 ">
              <label className=" text-gray-700 text-sm font-bold mr-2">
                ¿Desea que se guarde absoluta reserva sobre esta información
                para una atención personalizada?
              </label>
              <div className="flex">
                <div className="px-8">
                  <input
                    type="radio"
                    id="si"
                    name="valueAtencionPersonalizada"
                    value="si"
                    checked
                  />
                  <label for="si">SI </label>
                </div>
                <div className="px-8">
                  <input
                    type="radio"
                    id="no"
                    name="valueAtencionPersonalizada"
                    value="no"
                  />
                  <label for="no">NO </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col flex-1 ml-8">
            <div class="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="cIdentidad"
              >
                Cédula de Identidad
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cIdentidad"
                type="text"
                placeholder="Cédula de Identidad"
              />
            </div>

            <div class="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="telefono"
              >
                Teléfono
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="telefono"
                type="text"
                placeholder="Teléfono"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="fechaevento"
              >
                Fecha evento
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fechaevento"
                type="date"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Correoelectronico"
              >
                Detalle de la sugerencia, queja o felicitación
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="detallesugerencia"
                type="text"
                placeholder="Detalle de la sugerencia, queja o felicitación"
                rows={5}
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <label
                className=" text-gray-700 text-sm font-bold mr-2"
                for="nombreservidor"
              >
                Nombre del servidor/a y/o número de ventanilla
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombreservidor"
                type="text"
                placeholder="Nombre del servidor/a y/o número de ventanilla"
              />
            </div>
            <div className="mb-4 ">
              <label className=" text-gray-700 text-sm font-bold mr-2">
                ¿Cuál ha sido mi experiencia como usuario del servicio de los
                bomberos?
              </label>
              <div className="flex">
                <div className="px-8">
                  <input
                    type="radio"
                    id="excelente"
                    name="valueexperiencia"
                    value="excelente"
                  />
                  <label for="excelente">Excelente</label>
                </div>
                <div className="px-8">
                  <input
                    type="radio"
                    id="buena"
                    name="valueexperiencia"
                    value="buena"
                  />
                  <label for="buena">Buena </label>
                </div>
                <div className="px-8">
                  <input
                    type="radio"
                    id="regular"
                    name="valueexperiencia"
                    value="regular"
                  />
                  <label for="regular">Regular </label>
                </div>
                <div className="px-8">
                  <input
                    type="radio"
                    id="mala"
                    name="valueexperiencia"
                    value="mala"
                  />
                  <label for="mala">Mala </label>
                </div>
              </div>
            </div>

            <div className="mb-4 flex flex-col ">
              <label
                className=" text-gray-700 text-sm font-bold mr-2"
                for="observacion"
              >
                Mi obervación o recomendación a los servicios recibidos es
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="observacion"
                type="text"
                placeholder="Mi obervación o recomendación a los servicios recibidos es"
                rows={5}
              ></textarea>
            </div>

            <div className="flex items-center justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Sugerencias;
