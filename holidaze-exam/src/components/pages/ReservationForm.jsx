import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { reservationSchema } from "../../utils/yupSchemas";

const ReservationForm = ({ sendReservation }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reservationSchema),
  });

  const onSubmit = (formData) => {
    sendReservation(formData).catch(console.error);
    alert("your reservation has been made!");
  };

  return (
    <div className="resform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Full Name</p>
        <input {...register("name")} placeholder="Full Name.." />
        {errors.name && <span>{errors.name.message}</span>}

        <p>Email</p>
        <input {...register("email")} placeholder="Email.." />
        {errors.email && <span>{errors.email.message}</span>}

        <div className="check">
          <div className="check__one">
            <p>Checkin</p>
            <input
              className="checkin"
              {...register("checkin")}
              placeholder="Checkin.."
            />
            {errors.checkin && <span>{errors.checkin.message}</span>}
          </div>
          <div className="check__two">
            <p>Checkout</p>
            <input
              className="checkout"
              {...register("checkout")}
              placeholder="Checkout.."
            />
            {errors.checkout && <span>{errors.checkout.message}</span>}
          </div>
        </div>

        <p>Guests</p>
        <input
          className="guests"
          {...register("guests")}
          placeholder="Guests.."
        />
        {errors.guests && <span>{errors.guests.message}</span>}

        <p>Note</p>
        <input
          className="note"
          {...register("note")}
          placeholder="Anything we should know..?"
        />
        {errors.note && <span>{errors.note.message}</span>}

        <button>Book Now</button>
        <p className="charged">You will not be charged yet</p>
      </form>
    </div>
  );
};

export default ReservationForm;
