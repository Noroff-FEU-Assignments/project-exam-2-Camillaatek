import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useToggle from "../../hooks/useToggle";
import { BOOKINGS_PATH, RESERVATION_URL } from "../../utils/Api";
import StarIcon from "@mui/icons-material/Star";
import NavBar from "../navbar/NavBar";
import axios from "axios";
import ReservationForm from "./ReservationForm";
import Footer from "../Footer";

const Details = () => {
  const { id } = useParams();
  const http = useAxios();
  const [triggered, setTriggered] = useToggle();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await http.get(`${BOOKINGS_PATH}/${id}`);
      setDetails(responseData.data.data.attributes);
    };
    fetchData().catch(console.error);
  }, [triggered]);

  const sendReservation = async (formData) => {
    const options = {
      data: {
        name: formData.name,
        email: formData.email,
        checkin: formData.checkin,
        checkout: formData.checkout,
        guests: formData.guests,
        note: formData.note,
      },
    };
    const fetchData = await axios.post(RESERVATION_URL, options);
    console.log(fetchData);
  };
  return (
    <>
      <NavBar />
      <div className="details">
        <img src={details.image_url} alt="" />
        <div className="details__title">
          <h1>{details.name}</h1>
          <p>{details.cost}Kr / Night</p>
        </div>
        <div className="details__info">
          <p>{details.location}</p>
          <p>
            <StarIcon style={{ fontSize: 15, color: "#FFA800" }} />
            {details.rating}
          </p>
        </div>
        <div className="details__grid">
          <div className="detials__grid__desc">
            <div className="details__desc">
              <span>Description</span>
              <p>{details.description}</p>
            </div>
          </div>
          <div className="details__grid__features">
            <h2>General features</h2>
            <p>
              Allowed Pets: <span>{details.pets ? "Yes" : "No"}</span>
            </p>
            <p>
              Guests: <span>{details.guests}</span>
            </p>
            <p>
              Bedrooms: <span>{details.bedroom}</span>
            </p>
            <p>
              Square: <span>{details.square}</span>
            </p>
            <p>
              WIFI: <span>{details.wifi ? "Yes" : "No"}</span>
            </p>
            <p>
              Breakfast: <span>{details.breakfast ? "Yes" : "No"}</span>
            </p>
            <p>
              Kitchen: <span>{details.kitchen ? "Yes" : "No"}</span>
            </p>
          </div>
        </div>
        <ReservationForm sendReservation={sendReservation} />
      </div>
      {/* <iframe

        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9933.699268278275!2d5.308873834995961!3d60.39409731176001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfc10943e35e9%3A0x471276c8da9f7ceb!2sAkvariet%20i%20Bergen!5e0!3m2!1sno!2sno!4v1653673023739!5m2!1sno!2sno"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <Footer />
    </>
  );
};

export default Details;
