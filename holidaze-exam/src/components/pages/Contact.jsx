import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../../images/HOLIDAZE.png";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__form">
          <h1>Fill in the form to contact us</h1>
          <p>
            Contact us directly or fill out the form and we will get back to you
            promptly!
          </p>
        </div>
        <div className="contact__info">
          <div className="contact__img">
            <img src={logo} alt="" />
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
    </>
  );
};

export default Contact;
