import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxios from "../../../../hooks/useAxios"
import useToggle from "../../../../hooks/useToggle"
import { BOOKINGS_PATH } from "../../../../utils/Api"
import EditBooking from "../components/EditBooking"


const AllHotels = () => {
  const { id } = useParams()
  const http = useAxios()
  const [triggered, setTriggered] = useToggle()
  const [booking, setBooking] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await http.get(`${BOOKINGS_PATH}/${id}`)
      setBooking(responseData.data.data.attributes)
    }
    fetchData().catch(console.error)
  }, [triggered])

  const updateBooking = async (formData) => {
    const options = {
      data: {
        name: formData.name,
        description: formData.description,
        cost: formData.cost,
        location: formData.location,
        rating: formData.rating,
        image_url: formData.image_url,
      },
    }
    const responseData = await http.put(`${BOOKINGS_PATH}/${id}`, options)
    setTriggered()
  }

  return (
    <div>
      <h1>{booking.name}</h1>
      <h2>{booking.description}</h2>
      <p>{booking.cost}</p>
      <p>{booking.location}</p>
      <p>{booking.rating}</p>
      <p>{booking.image_url}</p>

      <h3>Edit:</h3>
      <EditBooking updateBooking={updateBooking} booking={booking} />
    </div>
  )
}

export default AllHotels