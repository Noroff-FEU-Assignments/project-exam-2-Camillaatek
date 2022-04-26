import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { bookingSchema } from "../../../../utils/yupSchemas"


const BookingsForm = ({ sendBooking }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(bookingSchema),
    })

    const onSubmit = (formData) => {
        console.log('form data: ', formData)

        sendBooking(formData).catch(console.error)
        alert('ur booking been madee!')
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder='Name..' />
            {errors.name && <span>{errors.name.message}</span>}

            <input {...register('description')} placeholder='Description..' />
            {errors.description && <span>{errors.description.message}</span>}

            <input {...register('cost')} placeholder='Cost..' />
            {errors.cost && <span>{errors.cost.message}</span>}

            <button>Send</button> 
        </form>
        </>
    )
}

export default BookingsForm