import React from 'react'
import LoginForm from '../LoginForm'
import undraw from '../../images/undraw.png'
import NavBar from '../navbar/NavBar'
import Footer from '../Footer'

const Login = () => {
  return (
         <>
         <NavBar />
            <div className='login'>
                <h1>Welcome to Holidaze</h1>
                <p>Log in to see bookings, messages and to edit enquiries.</p>
                <LoginForm />
                <p>Forgot your Password? Click here.</p>
             
            </div>
            <Footer />
      </>
    )
}

export default Login