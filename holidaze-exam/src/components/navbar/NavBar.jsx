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
        <ul>
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
        </ul>
    )
}

export default NavBar