import React from "react";
import Layout from "../components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout title={"Privacy Policy"}>
    <section className="privacy-policy">
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p>
          At <strong>Novacom Solar System</strong>, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, and safeguard your data.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal details such as your name, email address,
          phone number, and address when you register, contact us, or make a
          purchase.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To process your orders and provide requested services.</li>
          <li>To send updates, newsletters, and promotional materials.</li>
          <li>To improve user experience and website performance.</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement advanced security measures to ensure your information is
          safe and protected from unauthorized access or disclosure.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell or rent personal information. We may share limited data
          with trusted partners solely for service delivery purposes.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You
          can disable cookies in your browser settings if preferred.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please
          contact us at:
        </p>
        <p>
          <strong>Email:</strong> support@novacomsolar.com
          <br />
          <strong>Phone:</strong> +91-8448983085
        </p>

        <p className="update-note">
          <em>Last updated: October 2025</em>
        </p>
      </div>
    </section>
    </Layout>
  );
};

export default PrivacyPolicy;
