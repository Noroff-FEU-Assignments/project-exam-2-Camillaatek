import { Link } from 'react-router-dom'
import logo from '../../images/HOLIDAZE.png'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HotelIcon from '@mui/icons-material/Hotel';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const NavBar = () => {
    const [auth, setAuth] = useContext(AuthContext)
    const [isMobile, setIsMobile] = useState(false)

    const navigate = useNavigate()
    const handleLogout = () => {
        setAuth(null)
        navigate('/login')
    }
    return (
        <nav className='navbar'>
            <h3 className='navbar__logo'>
                <Link to="/" >
                    <img className="navbar__menulogo" src={logo} alt="Holidaze"></img>
                </Link>
            </h3>
            <ul className={isMobile ? 'navbar__nav-links-mobile' : 'navbar__nav-links'}
            onClick={() => setIsMobile(false)}
            >
            <li>
                <Link to={'/'} className='navbar__li'><HomeIcon />Home</Link>
            </li>
            <li>
                <Link to={'/'} className='navbar__li'><AdminPanelSettingsIcon />Admin</Link>
            </li>
            <li>
                {!auth ? (
                    <Link to={'/login'} className='navbar__li'>
                        <button className='navbar__loginBtn'>
                        Login</button></Link>
                ) : (
                    <button className='navbar__logoutBtn' onClick={handleLogout}>
                        Log Out
                    </button>
                )}
            </li>
        </ul>
        <button className='navbar__mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (<CloseIcon />
            ) : (<MenuIcon /> )}
        </button>
        </nav>
    )
}

export default NavBar
