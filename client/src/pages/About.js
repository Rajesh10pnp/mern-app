import React from "react";
import Layout from "../components/layout/Layout";
import AboutImg from "../images/about-image.jpg"

const About = () => {
  return (
    <Layout title={"Ecommerce_about"}>
    <section className="about">
      <div className="about-container">
        {/* Left Side Image */}
        <div className="about-image">
          <img
            src={AboutImg}
            alt="About Us"
          />
        </div>

        {/* Right Side Content */}
        <div className="about-content">
          <h2>About Our Company</h2>
          <p>
            Welcome to <strong>Novacom Solar System</strong>, where innovation meets
            excellence. We specialize in delivering sustainable energy solutions and
            user-focused web experiences.
          </p>
          <p>
            Our mission is to bring cutting-edge technology with seamless user
            interaction. We prioritize quality, customer satisfaction, and
            long-term results.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default About;
