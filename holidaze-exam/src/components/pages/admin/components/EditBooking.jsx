import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { bookingSchema } from '../../../../utils/yupSchemas'

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
            cost: booking.cost
        },
    })

    useEffect(() => {
        console.log('Reset')
        reset(booking)
    }, [booking])

    const onSubmit = (formData) => {
        console.log('Form Data:', formData)
        updateBooking(formData).catch(console.error)
        alert('Booking has been updated')
    }

    const onDelete = () => {}

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            {...register('name')}
            placeholder='Name..'
            defaultValue={booking.name}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <input
            {...register('description')}
            placeholder='Description..'
            defaultValue={booking.description}
            />
            {errors.description && <span>{errors.description.message}</span>}

            <input
            {...register('cost')}
            placeholder='Cost..'
            defaultValue={booking.cost}
            />
            {errors.cost && <span>{errors.cost.message}</span>}

            <button>Update</button>
        </form>
        </>
    )
}

export default EditBooking