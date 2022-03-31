import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const NavBar = () => {
    const [auth, setAuth] = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        setAuth(null)
        navigate('/login')
    }
    return (
        <div className='navbar'>
            <div className="navbar__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="" />
            </div>
            
            <div className="navbar__right">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/admin'}>Admin</Link>
            </li>
            <li>
                {!auth ? (
                    <Link to={'/login'}>Login</Link>
                ) : (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </li>
            </div>
        </div>
    )
}

export default NavBar