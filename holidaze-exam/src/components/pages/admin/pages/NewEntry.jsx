import axios from "axios";
import React from "react";
import { BOOKINGS_URL } from "../../../../utils/Api";
import BookingsForm from "../components/BookingsForm";
import Dashboard from "../components/Dashboard";

const NewEntry = () => {
  const sendBooking = async (formData) => {
    const options = {
      data: {
        name: formData.name,
        description: formData.description,
        cost: formData.cost,
        location: formData.location,
        rating: formData.rating,
        image_url: formData.image_url,
        wifi: formData.wifi,
        breakfast: formData.breakfast,
        bedroom: formData.bedroom,
        kitchen: formData.kitchen,
        guests: formData.guests,
        square: formData.square,
        pet: formData.pet,
      },
    };

    const responseData = await axios.post(BOOKINGS_URL, options);
    console.log(responseData);
  };
  return (
    <div className="entrygrid">
      <Dashboard />
      <BookingsForm sendBooking={sendBooking} />
    </div>
  );
};

export default NewEntry;
