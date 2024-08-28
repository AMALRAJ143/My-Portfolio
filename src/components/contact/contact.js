import "./contact.css"
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contact from "../asset/Screenshot 2024-08-27 121452.png"

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9wbz508", "template_1bqe98h", e.target, {
        publicKey: "ijb7xanBtrN0xDAh8",
      })
      .then(
        () => {
          // Show success message and clear form data
          setSuccessMessage("Message sent successfully!");
          setFormData({
            from_name: "",
            user_email: "",
            message: "",
          });
          setTimeout(() => setSuccessMessage(""), 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="contact-container"
    >
      <h1 className="head">
        Contact Me
      </h1>
      <div id="contact-content">
        {/* Left Section: Form */}
        <div className="left-section">

          <form onSubmit={sendEmail} className="formm">
            <div className="form-group animated-group">
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                placeholder=" "
                className="form-input animated-input"
              />
              <label htmlFor="from_name" className="form-label animated-label">
                Name
              </label>
            </div>

            <div className="form-group animated-group">
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                placeholder=" "
                className="form-input animated-input"
              />
              <label htmlFor="user_email" className="form-label animated-label">
                 Email
              </label>
            </div>

            <div className="form-group animated-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                className="form-textarea animated-input"
              ></textarea>
              <label htmlFor="message" className="form-label animated-labell">
                Your Message
              </label>
            </div>

            {successMessage && (
              <div className="success">
                {successMessage}
              </div>
             )} 
            <button
            className="submit-btn"
              type="submit">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Section: Image */}
        <div className="right-section">
          <div className="rightsection-img">
            <img src={contact} alt="contact" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;