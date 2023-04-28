import React from "react";
import Layout from "../layout/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Layout>
      <Carousel>
        <div className="">
          <img src="./img/favicon.jpeg" alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </Carousel>
    </Layout>
  );
};

export default Home;
