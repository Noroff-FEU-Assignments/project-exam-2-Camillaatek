// import React, { useEffect } from 'react'
// import Footer from '../Footer'
// import NavBar from '../navbar/NavBar'
// import StarIcon from '@mui/icons-material/Star';
// import KitchenIcon from '@mui/icons-material/Kitchen';
// import BedIcon from '@mui/icons-material/Bed';
// import useAxios from '../../hooks/useAxios';
// import { BOOKINGS_PATH } from '../../utils/Api'



// const Accommodations = () => {
//   const [isTriggered, setIsTriggered] = useToggle()
//   const [ bookings, setBookings ] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const http = useAxios()

//   useEffect(() => {
//     setIsLoading(true)
//     const fetchData = async () => {
//       const data = await http.get(BOOKINGS_PATH)
//       setBookings(data.data.data)
//       setIsLoading(false)
//     }

//     fetchData().catch((error) => setError (error.response.data.error))
//   }, [isTriggered, auth])

  
//   return (
//       <>
//       <NavBar />
//       <div className="hotel__card" key={idx}>
//                   <img src={item.attributes.image_url} alt="" />
//                   <div className="hotel__title">
//                     <h2 className='hotel__name'>{item.attributes.name}</h2>
//                    <h2 className='hotel__cost'>{item.attributes.cost} Kr</h2> 
//                   </div>
//                   <p className='hotel__location'>{item.attributes.location}</p>
//                   <p className='hotel__rating'><StarIcon style={{ fontSize: 15, color: '#FFA800' }}/>{item.attributes.rating}</p>
//                   <p className='hotel__info'>
//                     <div>
//                     <KitchenIcon style={{color: '#1E195B'}}/>
//                       {item.attributes.bedroom} Bd.
//                     </div>
//                     <div>
//                       <BedIcon style={{color: '#1E195B'}}/>
//                       {item.attributes.bedroom} Gs.
//                     </div>
//                     <div>
//                       <BedIcon style={{color: '#1E195B'}}/>
//                       {item.attributes.bedroom} Sq.
//                     </div></p>
//                   <Link to={`/booking/${item.id}`}>
//                     <button className='hotel__edit'>
//                       EDIT
//                       </button>
//                   </Link>
                 
//                 </div>
//     <Footer />
//     </>
//   )
// }

// export default Accommodations
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
  }, [isTriggered]);

 

  

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
      <div className="hotel">
        <div className="hotel__dash">
          <Dashboard />
        </div>
        <div className="hotel__page">
      
          <h2>Boking list:</h2>
          <div className="hotel__list">
            {bookings.map((item, idx) => {
              return (
                <div className="hotel__card" key={idx}>
                  <img src={item.attributes.image_url} alt="" />
                  <div className="hotel__title">
                    <h2 className='hotel__name'>{item.attributes.name}</h2>
                   <h2 className='hotel__cost'>{item.attributes.cost} Kr</h2> 
                  </div>
                  <p className='hotel__location'>{item.attributes.location}</p>
                  <p className='hotel__rating'><StarIcon style={{ fontSize: 15, color: '#FFA800' }}/>{item.attributes.rating}</p>
                  <p className='hotel__info'>
                    <div>
                    <KitchenIcon style={{color: '#1E195B'}}/>
                      {item.attributes.bedroom} Bd.
                    </div>
                    <div>
                      <BedIcon style={{color: '#1E195B'}}/>
                      {item.attributes.bedroom} Gs.
                    </div>
                    <div>
                      <BedIcon style={{color: '#1E195B'}}/>
                      {item.attributes.bedroom} Sq.
                    </div></p>
                  <Link to={`/booking/${item.id}`}>
                    <button className='hotel__edit'>
                      EDIT
                      </button>
                  </Link>
                
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Admin

// export default Accomodations