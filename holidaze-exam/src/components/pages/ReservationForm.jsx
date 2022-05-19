import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { reservationSchema } from "../../utils/yupSchemas"

const ReservationForm = ({ sendReservation }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reservationSchema),
    })

    const onSubmit = (formData) => {
        sendReservation(formData).catch(console.error)
        alert('your reservation has been made!')
    }

    return (
        <div className="resform">
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Full Name</p>
            <input {...register('name')} placeholder='Full Name..'/>
            {errors.title && <span>{errors.name.message}</span>}
            
            <p>Email</p>
            <input {...register('email')} placeholder='Email..'/>
            {errors.title && <span>{errors.email.message}</span>}

            <p>Checkin</p>
            <input {...register('checkin')} placeholder='Checkin..'/>
            {errors.title && <span>{errors.checkin.message}</span>}

            <p>Checkout</p>
            <input {...register('checkout')} placeholder='Checkout..'/>
            {errors.title && <span>{errors.checkout.message}</span>}

            <p>Guests</p>
            <input {...register('guests')} placeholder='Guests..'/>
            {errors.title && <span>{errors.name.message}</span>}

            <p>Note</p>
            <input {...register('note')} placeholder='Anything we should know..?'/>
            {errors.title && <span>{errors.name.message}</span>}

            <button>Book Now</button>
            <p className="charged">You will not be charged yet</p>
        </form>
        </div>
    )
}

export default ReservationForm