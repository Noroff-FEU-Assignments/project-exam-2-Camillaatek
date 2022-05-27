import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { bookingSchema } from "../../../../utils/yupSchemas";

const EditBooking = ({ booking, updateBooking }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues: {
      name: booking.name,
      description: booking.description,
      cost: booking.cost,
      location: booking.location,
      rating: booking.rating,
      image_url: booking.image_url,
      wifi: booking.wifi,
      breakfast: booking.breakfast,
      bedroom: booking.bedroom,
      kitchen: booking.kitchen,
      guests: booking.guests,
      square: booking.square,
      pet: booking.pet,
    },
  });

  useEffect(() => {
    console.log("Reset");
    reset(booking);
  }, [booking]);

  const onSubmit = (formData) => {
    console.log("Form Data:", formData);
    updateBooking(formData).catch(console.error);
    alert("Booking has been updated");
  };

  return (
    <div className="newEntry">
      <h1>Edit booking</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name</p>
        <input
          {...register("name")}
          placeholder="Name.."
          defaultValue={booking.name}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <p>Description</p>
        <textarea
          className="description"
          {...register("description")}
          placeholder="Description.."
          defaultValue={booking.description}
        />
        {errors.description && <span>{errors.description.message}</span>}

        <p>Cost</p>
        <input
          {...register("cost")}
          placeholder="Cost.."
          defaultValue={booking.cost}
        />
        {errors.cost && <span>{errors.cost.message}</span>}

        <p>Location</p>
        <input
          {...register("location")}
          placeholder="Location.."
          defaultValue={booking.location}
        />
        {errors.location && <span>{errors.location.message}</span>}

        <p>Rating</p>
        <input
          {...register("rating")}
          placeholder="Rating.."
          defaultValue={booking.rating}
        />
        {errors.rating && <span>{errors.rating.message}</span>}

        <p>Image</p>
        <input
          {...register("image_url")}
          placeholder="image_url.."
          defaultValue={booking.image_url}
        />
        {errors.image_url && <span>{errors.image_url.message}</span>}

        <p>WIFI</p>
        <input
          {...register("wifi")}
          type="checkbox"
          defaultValue={booking.wifi}
        />

        <p>Breakfast</p>
        <input
          {...register("breakfast")}
          type="checkbox"
          defaultValue={booking.breakfast}
        />

        <p>Bedroom</p>
        <input
          {...register("bedroom")}
          placeholder="bedroom.."
          defaultValue={booking.bedroom}
        />
        {errors.bedroom && <span>{errors.bedroom.message}</span>}

        <p>Kitchen</p>
        <input
          {...register("kitchen")}
          type="checkbox"
          defaultValue={booking.kitchen}
        />

        <p>Guests</p>
        <input
          {...register("guests")}
          placeholder="guests.."
          defaultValue={booking.guests}
        />
        {errors.guests && <span>{errors.guests.message}</span>}

        <p>Square</p>
        <input
          {...register("square")}
          placeholder="square.."
          defaultValue={booking.square}
        />
        {errors.square && <span>{errors.square.message}</span>}

        <p>Pet</p>
        <input
          {...register("pet")}
          type="checkbox"
          defaultValue={booking.pet}
        />

        <button>Update</button>
      </form>
    </div>
  );
};

export default EditBooking;
