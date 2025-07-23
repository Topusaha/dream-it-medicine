import React, { useState } from "react";
import "../App.css";
import "./Get-Involved.css";

const GetInvolved: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="get-involved-container">
      <div className="get-involved-main">
        <div className="get-involved-left">
          <h1 className="get-involved-title">Get Involved</h1>
          <section className="get-involved-section">
            <h2 className="get-involved-subtitle">Join our team</h2>
            <p className="get-involved-text">
              Want to be part of our team? We are looking for people who are excited to support and inspire future doctors. If you are interested, reach out. We would love to have you.
            </p>
          </section>
          <section className="get-involved-section">
            <h2 className="get-involved-subtitle">Be featured</h2>
            <p className="get-involved-text">
              Are you a physician, medical student, or resident? We would love to share your story. If you are open to being interviewed, send us a message.
            </p>
          </section>
        </div>
        <div className="get-involved-right">
          <form className="get-involved-form" onSubmit={handleSubmit}>
            <div className="get-involved-form-group">
              <label htmlFor="fullName">Full Name*</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="get-involved-form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="get-involved-form-group">
              <label htmlFor="subject">Subject*</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="get-involved-form-group">
              <label htmlFor="message">Message*</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button type="submit" className="get-involved-submit">Send</button>
          </form>
          {submitted && <div className="get-involved-thankyou">Thank you!</div>}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
