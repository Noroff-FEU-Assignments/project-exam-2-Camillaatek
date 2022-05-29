import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../context/AuthContext";
import useAxios from "../../../../hooks/useAxios";
import useToggle from "../../../../hooks/useToggle";
import { RESERVATION_URL } from "../../../../utils/Api";
import { reservationSchema } from "../../../../utils/yupSchemas";
import Dashboard from "../components/Dashboard";
import { format } from "fecha";
import Popup from "../components/PopUp";

const Enquiries = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonPopup, setButtonPopup] = useState(false);

  const [auth] = useContext(AuthContext);

  const http = useAxios();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(RESERVATION_URL);
      setReservations(data.data.data);
      setIsLoading(false);
    };
    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="reservation">
      <div className="reservation__dash">
        <Dashboard />
      </div>
      <div className="reservation__page">
        <h1>Enqueries</h1>
        <div className="reservation__title">
          <p>Name</p>
          <p>Guests</p>
          <p>Check-In</p>
          <p>Check-Out</p>
          <p>Note</p>
        </div>
        {reservations.map((item, idx) => {
          return (
            <div className="reservation__card" key={item.id}>
              <div className="reservation__info">
                <div className="name">
                  <p>{item.attributes.name}</p>
                  <p>{item.attributes.email}</p>
                </div>
                <p>{item.attributes.guests}</p>
                <p>
                  {format(new Date(item.attributes.checkin), "MMMM Do HH:MM")}
                </p>
                <p>
                  {format(new Date(item.attributes.checkout), "Do MMMM HH:MM")}
                </p>

                <button onClick={() => setButtonPopup(true)}>Open</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <p>{item.attributes.note}</p>
                </Popup>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Enquiries;
