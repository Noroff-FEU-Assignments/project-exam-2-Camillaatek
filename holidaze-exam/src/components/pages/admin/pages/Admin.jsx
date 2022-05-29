import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";
import useAxios from "../../../../hooks/useAxios";
import useToggle from "../../../../hooks/useToggle";
import { BOOKINGS_PATH } from "../../../../utils/Api";
import Dashboard from "../components/Dashboard";
import StarIcon from "@mui/icons-material/Star";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BedIcon from "@mui/icons-material/Bed";

const Admin = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [bookings, setBookings] = useState([]);
  const [auth] = useContext(AuthContext);
  const [error, setError] = useState();
  const http = useAxios();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(BOOKINGS_PATH);
      setBookings(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  const sendBooking = async (formData) => {
    const options = {
      data: {
        name: formData.name,
        description: formData.description,
        cost: formData.cost,
      },
    };
    const responseData = await http.post(BOOKINGS_PATH, options);
    console.log(responseData);
    setIsTriggered();
  };

  if (error) {
    return (
      <div>
        <h1>You must be Authenticated to view this page</h1>
        <h3>The server responded with: {error.status}</h3>
        <p>{error.message}</p>
        <p>Please Login</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hotel">
      <div className="hotel__dash">
        <Dashboard />
      </div>
      <div className="hotel__page">
        <h1>Booking list</h1>
        <div className="hotel__list">
          {bookings.map((item, idx) => {
            const deleteBooking = async () => {
              const responseData = await http.delete(
                `${BOOKINGS_PATH}/${item.id}`
              );
            };

            const handleDelete = () => {
              if (window.confirm("Are you sure?")) {
                deleteBooking();
                setIsTriggered();
              } else {
                return;
              }
            };

            return (
              <div className="hotel__card" key={idx}>
                <img src={item.attributes.image_url} alt="" />
                <h2 className="hotel__name">{item.attributes.name}</h2>

                <p className="hotel__location">{item.attributes.location}</p>
                <p className="hotel__rating">
                  <StarIcon style={{ fontSize: 15, color: "#FFA800" }} />
                  {item.attributes.rating}
                </p>
                <h2 className="hotel__cost">{item.attributes.cost} Kr</h2>
                <div className="hotel__info">
                  <div>
                    <KitchenIcon style={{ color: "#1E195B" }} />
                    {item.attributes.bedroom} Bd.
                  </div>
                  <div>
                    <BedIcon style={{ color: "#1E195B" }} />
                    {item.attributes.bedroom} Gs.
                  </div>
                  <div>
                    <BedIcon style={{ color: "#1E195B" }} />
                    {item.attributes.bedroom} Sq.
                  </div>
                </div>
                <Link to={`/booking/${item.id}`}>
                  <button className="hotel__edit">EDIT</button>
                </Link>
                <button className="hotel__delete" onClick={handleDelete}>
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
