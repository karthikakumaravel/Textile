import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ maxWidth: "100%", height: "auto" }} // Adjusted width
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">ABOUT</h1>
          <p className="text-justify mt-2">
            Welcome to RiceMaster Mills - your premier destination for superior
            rice products! We pride ourselves on delivering top-grade rice
            varieties, meticulously processed in our state-of-the-art
            facilities. From aromatic basmati to versatile jasmine, each grain
            is carefully selected and expertly milled to perfection. With a
            focus on quality, freshness, and nutritional value, we ensure that
            every batch meets stringent standards.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
