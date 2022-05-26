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
      <Footer />
    </>
  );
};

export default Details;
