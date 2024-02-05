import React from "react";
import "./ContactUs.css";
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
      <div className="contactTitle">
        <h1 className="welcomeMessage">Contact Us</h1>
        <p className="description my-4 ">
          We are here to help you. Please feel free to contact us for any
          queries or assistance. We will get back to you as soon as possible.
        </p>
      </div>
      <div className="contactForm">
        <form onSubmit={handleFormSubmit}>
          <input id="name" type="name" name="name" placeholder="Name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input id="email" type="email" name="email" placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" placeholder="Message" />
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
    </div>
  );
};

export default ContactUs;
