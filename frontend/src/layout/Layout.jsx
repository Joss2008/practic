import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="" style={{ height: "100vh" }}>
      <div className="w-full h-full">
        <Header />
        <div className="h-full mb-4">
          <>
            {children}
            <div className="h-32 "></div>
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
