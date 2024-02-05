import React from "react";
import "./ContactUs.css";
import { ImMail } from "react-icons/im";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mwkjdqza");
  const [success, setSuccess] = React.useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
      <h1 className="welcomeMessage">Contact Us</h1>
      <div className="contactForm">
        <form onSubmit={handleFormSubmit}>
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
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <h3 className="contactDetails">Contact Details</h3>
        <p className="contactDetails">
          Email:{" "}
          <a
            href="mailto:ashasvijayan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <ImMail />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
