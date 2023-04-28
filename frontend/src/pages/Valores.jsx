import React from "react";
import CardValores from "../components/CardValores";
import Layout from "../layout/Layout";
import { valores } from "../utils/valores";

const Valores = () => {
  return (
    <Layout>
      <div className="">
        <h1 className="font-bold text-center text-4xl mt-4">
          Valores Institucionales
        </h1>

        <div className="mt-20 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {valores?.map((valor) => {
              return (
                <div className="col-span-1">
                  <CardValores
                    title={valor?.title}
                    content={valor?.content}
                    color={valor?.color}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Valores;
