import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import useToggle from "../../hooks/useToggle"
import { BOOKINGS_PATH } from "../../utils/Api"



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
    <div className="detail__page">
    <img src={details.image_url} alt="" />
      <h1>{details.name}</h1>
      <h2>{details.description}</h2>
      <p>{details.cost}</p>
    </div>
  )
}

export default Details