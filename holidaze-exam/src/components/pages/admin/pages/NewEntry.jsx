import axios from 'axios'
import React from 'react'
import { BOOKINGS_URL } from '../../../../utils/Api'
import BookingsForm from '../components/BookingsForm'
import Dashboard from '../components/Dashboard'

const NewEntry = () => {
    const sendBooking = async (formData) => {
        const options = {
            data: {
                name: formData.name,
                description: formData.description,
                contact: formData.contact,
            },
        }

        const responseData = await axios.post(BOOKINGS_URL, options)
        console.log(responseData)
    }
  return (
      <>
      <Dashboard />
      <BookingsForm sendBooking={sendBooking} />
      </>
  )
}

export default NewEntry