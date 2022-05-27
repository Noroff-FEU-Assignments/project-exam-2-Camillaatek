import { yupResolver } from "@hookform/resolvers/yup";
import { textAlign } from "@mui/system";
import { useForm } from "react-hook-form";
import { bookingSchema } from "../../../../utils/yupSchemas";

const BookingsForm = ({ sendBooking }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const onSubmit = (formData) => {
    console.log("form data: ", formData);

    sendBooking(formData).catch(console.error);
    alert("ur booking been madee!");
  };

  return (
    <div className="newEntry">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name</p>
        <input {...register("name")} placeholder="Enter a Name.." />
        {errors.name && <span>{errors.name.message}</span>}

        <p>Description</p>
        <textarea
          className="description"
          {...register("description")}
          placeholder="Enter a Description.."
        />
        {errors.description && <span>{errors.description.message}</span>}

        <p>Cost</p>
        <input {...register("cost")} placeholder="Enter a Cost.." />
        {errors.cost && <span>{errors.cost.message}</span>}

        <p>Location</p>
        <input {...register("location")} placeholder="Enter a Location.." />
        {errors.location && <span>{errors.location.message}</span>}

        <p>Rating</p>
        <input {...register("rating")} placeholder="Enter a Rating.." />
        {errors.rating && <span>{errors.rating.message}</span>}

        <p>Image</p>
        <input {...register("image_url")} placeholder="Enter the Image URL.." />
        {errors.image_url && <span>{errors.image_url.message}</span>}

        <p>breakfast</p>
        <input {...register("breakfast")} type="checkbox" />

        <p>WIFI</p>
        <input {...register("wifi")} type="checkbox" />

        <p>Bedroom</p>
        <input {...register("bedroom")} placeholder="How many bedrooms?" />
        {errors.bedroom && <span>{errors.bedroom.message}</span>}

        <p>Kitchen</p>
        <input {...register("kitchen")} type="checkbox" />

        <p>Guests</p>
        <input {...register("guests")} placeholder="How many guests?" />
        {errors.guests && <span>{errors.guests.message}</span>}

        <p>Square</p>
        <input {...register("square")} placeholder="How many square meters?" />
        {errors.square && <span>{errors.square.message}</span>}

        <p>Pet</p>
        <input {...register("pet")} type="checkbox" />

        <button>Add New Entry</button>
      </form>
    </div>
  );
};

export default BookingsForm;
