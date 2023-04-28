import React from "react";
import Layout from "../layout/Layout";

const RegistroVoluntarios = () => {
  return (
    <Layout>
      <h1 className="text-center text-red-700 font-bold text-xl mt-4">
        Registro de Voluntarios
      </h1>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex px-8">
          <div className="flex-col flex-1 mr-8">
            <div class="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="NombresCompletos"
              >
                Nombres Completos
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="NombresCompletos"
                type="text"
                placeholder="Nombres Completos"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="EstadoCivil"
              >
                Estado Civil
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="EstadoCivil"
                type="text"
                placeholder="Estado Civil"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Domicilio"
              >
                Domicilio
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Domicilio"
                type="text"
                placeholder="Domicilio"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Alergias"
              >
                Alergias
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Alergias"
                type="text"
                placeholder="Alergias"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className=" text-gray-700 text-sm font-bold mr-2">
                ha sido dado de baja de alguna institución?
              </label>
              <div className="px-1">
                <input type="radio" id="si" name="valueBaja" value="si" />
                <label for="si">SI</label>
              </div>
              <div className="px-1">
                <input
                  type="radio"
                  id="no"
                  name="valueBaja"
                  value="no"
                  checked
                />
                <label for="no">NO</label>
              </div>
            </div>
            <h1 className="font-bold mb-4">Referencias personales</h1>
            <div class="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="NombresReferencias"
              >
                Nombres
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="NombresReferencias"
                type="text"
                placeholder="Nombres"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Parentesco"
              >
                Parentesco
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Parentesco"
                type="text"
                placeholder="Parentesco"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Telefono"
              >
                Teléfono
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Telefono"
                type="text"
                placeholder="Teléfono"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="NombresReferencias2"
              >
                Nombres
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="NombresReferencias2"
                type="text"
                placeholder="Nombres"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Parentesco2"
              >
                Parentesco
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Parentesco2"
                type="text"
                placeholder="Parentesco"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Telefono2"
              >
                Teléfono
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Telefono2"
                type="text"
                placeholder="Teléfono"
              />
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
            <div className="mb-4 flex items-center">
              <label className="w-32 text-gray-700 text-sm font-bold ">
                Ocupacion
              </label>
              <div className="px-1">
                <input
                  type="radio"
                  id="trabaja"
                  name="valueocupacion"
                  value="trabaja"
                  checked
                />
                <label for="trabaja">Trabaja</label>
              </div>
              <div className="px-1">
                <input
                  type="radio"
                  id="notrabaja"
                  name="valueocupacion"
                  value="notrabaja"
                />
                <label for="notrabaja">No Trabaja</label>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="GrupoSanguineo"
              >
                Grupo Sanguíneo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="GrupoSanguineo"
                type="text"
                placeholder="Grupo Sanguíneo"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Cursosrealizados"
              >
                Cursos realizados
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Cursosrealizados "
                type="text"
                placeholder="Cursos realizados"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-32 text-gray-700 text-sm font-bold ">
                Sexo
              </label>
              <div className="px-1">
                <input
                  type="radio"
                  id="femenino"
                  name="valuesexo"
                  value="femenino"
                  checked
                />
                <label for="femenino">Femenino</label>
              </div>
              <div className="px-1">
                <input
                  type="radio"
                  id="masculino"
                  name="valuesexo"
                  value="masculino"
                />
                <label for="masculino">Masculino</label>
              </div>
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
                for="Nivelinstruccion"
              >
                Nivel de instrucción
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Nivelinstruccion"
                type="text"
                placeholder="Nivel de instrucción"
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
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="Certificadobachiller"
              >
                Certificado de ser bachiller
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Certificadobachiller"
                type="text"
                placeholder="Certificado de ser bachiller"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="antecedentes"
              >
                Archivo de no tener antecedentes penales
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="antecedentes"
                type="file"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="w-40 text-gray-700 text-sm font-bold mr-2"
                for="foto"
              >
                Foto
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="foto"
                type="file"
              />
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

export default RegistroVoluntarios;
