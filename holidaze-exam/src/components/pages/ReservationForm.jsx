import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

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
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder='Full Name..'/>
            {errors.title && <span>{errors.name.message}</span>}

            <input {...register('email')} placeholder='Email..'/>
            {errors.title && <span>{errors.email.message}</span>}

            <input {...register('checkin')} placeholder='Checkin..'/>
            {errors.title && <span>{errors.checkin.message}</span>}

            <input {...register('checkout')} placeholder='Checkout..'/>
            {errors.title && <span>{errors.checkout.message}</span>}

            <input {...register('guests')} placeholder='Guests..'/>
            {errors.title && <span>{errors.name.message}</span>}

            <input {...register('note')} placeholder='Anything we should know..?'/>
            {errors.title && <span>{errors.name.message}</span>}
        </form>
        </>
    )
}

export default ReservationForm