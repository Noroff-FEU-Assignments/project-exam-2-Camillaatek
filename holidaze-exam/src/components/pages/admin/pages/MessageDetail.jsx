
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../../../hooks/useAxios'
import useToggle from '../../../../hooks/useToggle'
import { CONTACT_PATH } from '../../../../utils/Api'
import { format } from 'fecha'
import NavBar from '../../../navbar/NavBar'
import Footer from '../../../Footer'
import Dashboard from '../components/Dashboard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

  // const handleDelete = () => {
  //   if (windows.confirm('Are you sure?')) {
  //     deleteContact()
  //   }
  // }
  return (
    <div className="MessDetail__page">
      <div className="dash__grid">
        <Dashboard />
      </div>
    <div className="site__grid">
        <h1>Messages</h1>
      <div className="info__site">
        <div className="message__form">
        <div className="info">
            <p className='name'>{details.name}</p>
            <p className='email'>{details.email}</p>
            <p className='subject'>{details.subject}</p>
            <p className='message'>{details.message}</p>
        </div>
        <button className='message__delete' style = {{ color: 'red'}}>
           <DeleteForeverIcon />
        </button>
      </div>
      </div>
    </div>
      
    </div>
 
    
  )
}

export default MessageDetail