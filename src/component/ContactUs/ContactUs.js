import React from "react";
import "./ContactUs.css";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaRegCopyright,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import carenbit from "../../assets/carenbit.png";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xzbnrgyp");
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
          <div className="addressBox">
            <a
              href="https://maps.app.goo.gl/nt4ALPAFmyaBAm1A8"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot className="contactIcon location" />
            </a>
            <div className="address">
              <span>Dhruv Darshan Co-op. Soc</span>
              <span> Sector.No-26 </span>
              <span>Nigdi Pradhikaran </span>Ravet, Tal - Haveli
              <span> Pune 411044</span>
            </div>
          </div>
          <p>
            <FaPhoneAlt className="contactIcon" />
            <span className="spacing">+91 79723 79031 </span>
          </p>
          <p>
            <a
              href="mailto:carenbit.tech@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail className="contactIcon" />
              <span className="spacing">carenbit.tech@gmail.com</span>
            </a>
          </p>
        </div>
      </div>
      <div className="footer d-flex ">
        <div>
          <img src={carenbit} alt="carenbit" className="carenbit" />
        </div>
        <p className="mediaIcon">
          <FaRegCopyright />
          2024{" "}
          <strong>
            <em>Carenbit</em>
          </strong>
        </p>
        <div className=" d-flex justify-content-between gap-3">
          <span className="contactDetails">
            <a
              href="https://api.whatsapp.com/send?phone=917972379031"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="mediaIcon" />
            </a>
          </span>
          <span className="contactDetails">
            <a
              href="mailto:carenbit.tech@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail className="mediaIcon" />
            </a>
          </span>
          <span className="contactDetails">
            <a
              href="https://www.linkedin.com/company/carenbit/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="mediaIcon" />
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
