// import { useContext } from "react"
// import AuthContext from "../../../../context/AuthContext"
// import Dashboard from "../components/Dashboard"
// import { Link } from "react-router-dom"

// const Admin = () => {
//     const [auth, setAuth] = useContext(AuthContext)

//     if(!auth) {
//         return (
//             <Link to="/login"></Link>
//         )
//     }
//     return <>
    
//     <Dashboard />
//     <h1>Admin PAGE</h1>
//     </>
// }

// export default Admin

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../../context/AuthContext'
import useAxios from '../../../../hooks/useAxios'
import useToggle from '../../../../hooks/useToggle'
import { BOOKINGS_PATH } from '../../../../utils/Api'
import Dashboard from '../components/Dashboard'
import StarIcon from '@mui/icons-material/Star';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BedIcon from '@mui/icons-material/Bed';

const Admin = () => {
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
    setBookings(data.data.data)
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
                <div className="hotel__card" key={idx}>
                  <img src={item.attributes.image_url} alt="" />
                  <div className="hotel__title">
                    <h2>{item.attributes.name}</h2>
                   <h2>{item.attributes.cost}</h2> 
                  </div>
                  <p>{item.attributes.location}</p>
                  <p><StarIcon style={{ fontSize: 15, color: '#FFA800' }}/>{item.attributes.rating}</p>
                  <p><KitchenIcon />{item.attributes.bedroom}<BedIcon />{item.attributes.bedroom}<BedIcon />{item.attributes.bedroom}</p>
                  <Link to={`/booking/${item.id}`}>VIEW</Link>
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

export default Admin