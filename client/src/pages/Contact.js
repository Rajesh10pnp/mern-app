import React from "react";
import Layout from "../components/layout/Layout";
import contactImage from '../images/contact-image.jpg';
import { FaAddressCard } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <Layout title={"contact us"}>
    <div className="contact-container">
      {/* Left Column */}
      <div className="contact-image">
       <img src={contactImage} alt="Contact" />
      </div>

      {/* Right Column */}
      <div className="contact-details">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>You can text me any time, call me any time, I'm available 24/7 for you.</p>
          <p><strong><FaAddressCard /> : </strong> Chandigarh, India</p>
          <p><strong><FaMobile /> : </strong> +91-8448983085</p>
          <p><strong><IoIosMail /> : </strong> raju10.deshwal@gmail.com</p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;
