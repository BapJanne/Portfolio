import React, { useState } from "react";
import { send } from "emailjs-com";
import "./FormMail.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const FormMail = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    from_mail: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_xy65ckj", "template_vcc9nwp", toSend, "xJiVxqyWxfCHAxDPi")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message envoyé !");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="formContainer" id="contact">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <h2>Contact</h2>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="formName"
            type="text"
            name="from_name"
            placeholder="Votre nom"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
          <input
            className="formMail"
            type="mail"
            name="from_mail"
            placeholder="Votre email"
            value={toSend.from_mail}
            onChange={handleChange}
            required
          />
          <textarea
            className="formMessage"
            type="text"
            cols="33"
            name="message"
            placeholder="Votre message"
            value={toSend.message}
            onChange={handleChange}
            required
          />

          <button className="formButton" type="submit">
            Envoyer
          </button>
        </form>
      </AnimationOnScroll>
    </div>
  );
};

export default FormMail;
