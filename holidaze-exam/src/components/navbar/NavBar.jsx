import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HotelIcon from '@mui/icons-material/Hotel';

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
                <img src="" alt="" />
            </div>
            
            <div className="navbar__right">
            <li className='navbar__link'>
                <Link to={'/home'}>
                
                <HomeIcon />
                Home
                </Link>
            </li>
            <li className='navbar__link'><Link to={'/admin'}>
                <AdminPanelSettingsIcon />
                Admin
                </Link>
            </li>
            <li className='navbar__link'>
                
                {!auth ? (
                    <Link to={'/login'}><HotelIcon />Login</Link>
                ) : (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </li>
            </div>
        </div>
    )
}

export default NavBar