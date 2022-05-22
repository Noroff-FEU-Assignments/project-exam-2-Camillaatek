import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../../context/AuthContext'
import useAxios from '../../../../hooks/useAxios'
import useToggle from '../../../../hooks/useToggle'
import { RESERVATION_URL } from '../../../../utils/Api'
import { reservationSchema } from '../../../../utils/yupSchemas'
import Dashboard from '../components/Dashboard'

const Enquiries = () => {
  const [isTriggered, setIsTriggered] = useToggle()
  const [error, setError] = useState()
  const [reservations, setReservations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [auth] = useContext(AuthContext)

  const http = useAxios()

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const data = await http.get(RESERVATION_URL)
      setReservations(data.data.data)
      setIsLoading(false)
    }
    fetchData().catch((error) => setError(error.response.data.error))
  },[isTriggered, auth])
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="reservation">
      <div className="reservation__dash">
         <Dashboard />
      </div>
       <div className="reservation__page">
         <h1>Enqueries</h1>
         <div className="reservation__title">
                 <p>Name</p>
                 <p>Guests</p>
                 <p>Check-In</p>
                 <p>Check-Out</p>
                 <p>Note</p>
               </div>
         {reservations.map((item, idx) => {
           return (
             <div className="reservation__card">
               <div className="reservation__info">
                 <p>{item.attributes.name}</p>
               </div>
             </div>
           )
         })}
       </div>
    
    </div>
  
    
  )
}

export default Enquiries