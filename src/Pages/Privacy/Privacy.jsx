import React from 'react';
import './Privacy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-date">Effective Date: May 14, 2026</p>
      
      <br />
      <hr />
      <br />

      <section className="privacy-section">
        <h2 className="privacy-heading">1. General Provisions</h2>
        <ul className="privacy-list">
          <li className="privacy-item">The Pseudolab.com website is owned by Atlas laboratory.inc.</li>
          <li className="privacy-item">This document regulates the processing of personal data.</li>
          <li className="privacy-item">The resource is a demonstration portfolio project.</li>
          <li className="privacy-item">Registration and all provided services are completely free.</li>
        </ul>
      </section>

      <br />
      <hr />
      <br />

      <section className="privacy-section">
        <h2 className="privacy-heading">2. Personal Data Collected</h2>
        <ul className="privacy-list">
          <li className="privacy-item"><strong className="privacy-bold">Account Data:</strong> email, username, hashed password.</li>
          <li className="privacy-item"><strong className="privacy-bold">Profile Data:</strong> name, avatar (optional).</li>
          <li className="privacy-item"><strong className="privacy-bold">Technical Logs:</strong> IP address, browser type.</li>
          <li className="privacy-item"><strong className="privacy-bold">Cookies:</strong> used strictly to maintain the authentication session.</li>
        </ul>
      </section>

      <br />
      <hr />
      <br />

      <section className="privacy-section">
        <h2 className="privacy-heading">3. Purpose of Data Processing</h2>
        <ul className="privacy-list">
          <li className="privacy-item">To create and manage user accounts.</li>
          <li className="privacy-item">To provide access to website features.</li>
          <li className="privacy-item">To ensure platform security and prevent spam.</li>
          <li className="privacy-item">To analyze traffic and optimize the interface in the future.</li>
        </ul>
      </section>

      <br />
      <hr />
      <br />

      <section className="privacy-section">
        <h2 className="privacy-heading">4. Third-Party Services</h2>
        <ul className="privacy-list">
          <li className="privacy-item">The project plans to integrate web analytics tools.</li>
          <li className="privacy-item">Google Analytics / Yandex Metrika will be used.</li>
          <li className="privacy-item">These services collect completely anonymized data.</li>
          <li className="privacy-item">No payment gateways or hidden subscriptions are used.</li>
        </ul>
      </section>

      <br />
      <hr />
      <br />

      <section className="privacy-section">
        <h2 className="privacy-heading">5. Data Security and Storage</h2>
        <ul className="privacy-list">
          <li className="privacy-item">User passwords are stored in a strictly encrypted format.</li>
          <li className="privacy-item">Transfer of sensitive data to third parties is prohibited.</li>
          <li className="privacy-item">Information is stored in the database until the account is deleted.</li>
        </ul>
      </section>

      <br />
      <hr />
      <br />

      <section className="privacy-section">
        <h2 className="privacy-heading">6. User Rights</h2>
        <ul className="privacy-list">
          <li className="privacy-item">Right to modify or update profile information.</li>
          <li className="privacy-item">Right to fully withdraw consent for data processing.</li>
          <li className="privacy-item">Right to permanently delete the personal account.</li>
        </ul>
      </section>

      <br />
      <hr />
      <br />

      <section className="privacy-section">
        <h2 className="privacy-heading">7. Contact Information</h2>
        <ul className="privacy-list">
          <li className="privacy-item">Inquiries are accepted via the internal website contact form.</li>
        </ul>
      </section>
      
      <br />
      <hr />
      <br />
      
      <p className="privacy-note">
        © Atlas laboratory.inc 2026.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
