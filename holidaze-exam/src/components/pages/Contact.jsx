import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import contact from "../../images/contact.png";
import NavBar from "../navbar/NavBar"
import Footer from "../Footer"
import axios from "axios";
import { CONTACT_URL } from "../../utils/Api";
import ContactForm from "./contactForm";

const Contact = () => {
  const sendContact = async (formData) => {
    const options = {
      data: {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    }
    const responseData = await axios.post(CONTACT_URL, options)
    console.log(responseData)
  }
  return (
    <>
    <NavBar />
      <div className="contact">
        <div className="contact__form">
          <h1>Fill in the form to contact us</h1>
          <p className="p_margin">
            Contact us directly or fill out the form and we will get back to you
            promptly!
          </p>
        
        <ContactForm sendContact={sendContact} />
        </div>
        <div className="contact__info">
          <div className="contact__img">
            <img src={contact} alt="" />
          </div>
          <div className="contact__text">
            <div>
              <LocationOnIcon />
              <p>Kniksens Plass 10, 5063 Bergen, Norway</p>
            </div>
            <div>
              <PhoneIcon />
              <p>(+47) 12 34 56 78</p>
            </div>
            <div>
              <MailIcon />
              <p>holidaze@contact.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
