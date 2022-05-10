
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../../../hooks/useAxios'
import useToggle from '../../../../hooks/useToggle'
import { CONTACT_PATH } from '../../../../utils/Api'
import { format } from 'fecha'
import NavBar from '../../../navbar/NavBar'
import Footer from '../../../Footer'

const MessageDetail = () => {
    const { id } = useParams()
  const http = useAxios()
  const [triggered, setTriggered] = useToggle()
  const [details, setDetails] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await http.get(`${CONTACT_PATH}/${id}`)
      setDetails(responseData.data.data.attributes)
    }
    fetchData().catch(console.error)
  }, [triggered])
  return (
    <>
    <NavBar />
    <div className="MessDetail__page">
        <div className="name__date">
            <p>{details.name}</p>
            <p>{format(new Date(details.publishedAt), 'HH:MM Do MMMM YYYY')}</p>
        </div>
        <div className="info">
            <p>{details.email}</p>
            <h2>{details.subject}</h2>
            <p>{details.message}</p>
        </div>
        
    </div>
    <Footer />
    </>
  )
}

export default MessageDetail