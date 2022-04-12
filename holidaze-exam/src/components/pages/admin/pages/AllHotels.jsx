import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../../context/AuthContext'
import useToggle from '../../../../hooks/useToggle'
import { BOOKINGS_PATH } from '../../../../utils/Api'
import Dashboard from '../components/Dashboard'

const AllHotels = () => {
  const [isTriggered, setIsTriggered] = useToggle()
  const [bookings, setBookings] = useState([])
  const [auth] = useContext(AuthContext)
  const http = useAxios()

  useEffect(() => {
    
    const fetchData = async () => {
    const data = await http.get(BOOKINGS_PATH)
    setBookings(data.data.data)

  }

  fetchData().catch((error) => setError(error.response.data.error))
  }, [isTriggered, auth])
  return (
      <div className="hotel">
        <div className="hotel__dash">
          <Dashboard />
        </div>
        <div className="hotel__page">

        </div>
    </div>
  )
}

export default AllHotels