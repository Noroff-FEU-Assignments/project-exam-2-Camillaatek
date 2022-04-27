import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import useToggle from "../../hooks/useToggle"
import { BOOKINGS_PATH } from "../../utils/Api"
import StarIcon from '@mui/icons-material/Star';
import NavBar from "../navbar/NavBar"



const Details = () => {
  const { id } = useParams()
  const http = useAxios()
  const [triggered, setTriggered] = useToggle()
  const [details, setDetails] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await http.get(`${BOOKINGS_PATH}/${id}`)
      setDetails(responseData.data.data.attributes)
    }
    fetchData().catch(console.error)
  }, [triggered])

  

  return (
      <>
      <NavBar />
    <div className="details">
    
        <img src={details.image_url} alt="" />
        <div className="details__title">
            <h1>{details.name}</h1>
            <p>{details.cost}Kr / Night</p>
        </div>
        <div className="details__info">
            <p>{details.location}</p>
            <p><StarIcon style={{ fontSize: 15, color: '#FFA800' }}/>{details.rating}</p>
        </div>
        <div className="details__grid">
          <div className="detials__grid__desc">
            <div className="details__desc">
              <span>Description</span>
              <p>{details.description}</p>
            </div>
            <Link to={`/`}>
                    <button className='details__button'>
                      Book Now
                    </button>
            </Link>
          </div>
          <div className="details__grid__features">
            <h2>General features</h2>
            <p>property type: <span>{details.category}</span></p>
            <p>Guests:</p>
            <p>Bedrooms: <span>{details.bedroom}</span></p>
            <p>Square:</p>
            <p>WIFI: <span>{details.wifi ? "Yes" : "No"}</span></p>
            <p>Breakfast: <span>{details.breakfast ? "Yes" : "No"}</span></p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Details