import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../../context/AuthContext'
import useAxios from '../../../../hooks/useAxios'
import useToggle from '../../../../hooks/useToggle'
import { BOOKINGS_PATH } from '../../../../utils/Api'
import Dashboard from '../components/Dashboard'

const AllHotels = () => {
  const [isTriggered, setIsTriggered] = useToggle()
  const [bookings, setBookings] = useState([])
  const [auth] = useContext(AuthContext)
  const [error, setError] = useState();
  const http = useAxios()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
    const data = await http.get(BOOKINGS_PATH)
    setBookings(data.data.data.data)
    setIsLoading(false);
  }

  fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  const sendBooking = async (formData) => {
    const options = {
      data: {
        name: formData.name,
        description: formData.description,
        cost: formData.cost,
      },
    }
    const responseData = await http.post(BOOKINGS_PATH, options)
    console.log(responseData);
    setIsTriggered()
  }

  if (error) {
    return (
      <div>
        <h1>You must be Authenticated to view this page</h1>
        <h3>The server responded with: {error.status}</h3>
        <p>{error.message}</p>
        <p>Please Login</p>
        <Link to='/login'>Login</Link>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
      <div className="hotel">
        <div className="hotel__dash">
          <Dashboard />
        </div>
        <div className="hotel__page">
          <h1>Welcome {auth.user.username}</h1>
          <h2>Boking list:</h2>
          <div className="hotel__list">
            {bookings.map((item, idx) => {
              const deleteBooking = async () => {
                const responseData = await http.delete(
                  `${BOOKINGS_PATH}/${item.id}`
                )
              }

              const handleDelete = () => {
                if (window.confirm('Are you sure?')) {
                  deleteBooking()
                  setIsTriggered()
                } else {
                  return
                }
              }

              return (
                <div className="card" key={idx}>
                  <h3>{item.attributes.name}</h3>
                  <Link to={`/restaurants/${item.id}`}>VIEW</Link>
                  <button onClick={handleDelete}>
                    DELETE
                  </button>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default AllHotels