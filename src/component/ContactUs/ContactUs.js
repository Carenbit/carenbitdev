import React from "react";
import "./ContactUs.css";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import carenbit from "../../assets/carenbit.png";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mwkjdqza");
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      !event.target.name.value ||
      !event.target.email.value ||
      !event.target.message.value
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    await handleSubmit(event);
    setSuccess(true);
    const formElement = event.target;
    formElement.reset();
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div id="contactUsPage">
      {success && (
        <>
          <motion.div
            initial={{ opacity: 0, x: "30vw", scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: "-30vw", scale: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="success"
          >
            <p>Thanks for reaching out, will get back to you</p>
          </motion.div>
        </>
      )}
      {error && (
        <>
          <motion.div
            initial={{ opacity: 0, x: "30vw", scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: "-30vw", scale: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="success"
          >
            <p>Please fill all the fields</p>
          </motion.div>
        </>
      )}

      <h1 className="text-center contactHeading">Contact Us</h1>
      <div className="contactBlock">
        <form onSubmit={handleFormSubmit} className="contactForm">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Enter Full Name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email Address"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="mx-auto contactButton"
          >
            Send message
          </button>
          <ValidationError errors={state.errors} />
        </form>
        <div className="contactBox">
          <p>
            <FaLocationDot className="contactIcon" />
            <span className="spacing">Pune, Maharashtra</span>
          </p>
          <p>
            <FaPhoneAlt className="contactIcon" />
            <span className="spacing">+91 1234567890</span>
          </p>
          <p>
            <MdEmail className="contactIcon" />
            <span className="spacing">companyxyz@company.com</span>
          </p>
        </div>
      </div>
      <div className="footer d-flex ">
        <div>
          <img src={carenbit} alt="carenbit" className="carenbit" />
        </div>
        <p className="mediaIcon">
          <FaRegCopyright />
          2024 Carenbit
        </p>
        <div className=" d-flex justify-content-between gap-3">
          <span className="contactDetails">
            <a
              href="mailto:companyxyz@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail className="mediaIcon" />
            </a>
          </span>
          <span className="contactDetails">
            <a
              href="https://linkedin.com/in/carenbit"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="mediaIcon" />
            </a>
          </span>
          <span className="contactDetails">
            <a
              href="https://instagram.com/carenbit"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="mediaIcon" />
            </a>
          </span>
          <span className="contactDetails">
            <a
              href="https://twitter.com/carenbit"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="mediaIcon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
