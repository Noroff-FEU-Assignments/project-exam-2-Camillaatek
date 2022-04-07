import { Link } from 'react-router-dom'
import logo from '../../../../images/HOLIDAZE.png'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../../../context/AuthContext'
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HotelIcon from '@mui/icons-material/Hotel';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Dashboard = () => {
    const [auth, setAuth] = useContext(AuthContext)
    const [isMobile, setIsMobile] = useState(false)

    const navigate = useNavigate()
    const handleLogout = () => {
        setAuth(null)
        navigate('/login')
    }
    return (
        <nav className='dashboard'>
            <h3 className='dashboard__logo'>
                <Link to="/" >
                    <img className="dashboard__menulogo" src={logo} alt="Holidaze"></img>
                </Link>
            </h3>
            <ul className={isMobile ? 'dashboard__nav-links-mobile' : 'dashboard__nav-links'}
            onClick={() => setIsMobile(false)}
            >
             <Link to={'/'} className='dashboard__li'>
                        <button className='dashboard__newentryBtn'>
                        Add New Entry</button></Link>
            <li>
                <Link to={'/messages'} className='dashboard__li'><HotelIcon />Messages</Link>
            </li>
            
            <li>
                <Link to={'/enquiries'} className='dashboard__li'><HotelIcon />Enquiries</Link>
            </li>
            <li>
                <Link to={'/allhotels'} className='dashboard__li'><HotelIcon />Hotels</Link>
            </li>
            <li>
                <Link to={'/'} className='dashboard__li'><HomeIcon />Back to website</Link>
            </li>
            
            <li>
                {!auth ? (
                    <Link to={'/login'} className='dashboard__li'>
                        <button className='dashboard__loginBtn'>
                        Login</button></Link>
                ) : (
                    <button className='dashboard__logoutBtn' onClick={handleLogout}>
                        Log Out
                    </button>
                )}
            </li>
        </ul>
        <button className='dashboard__mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (<CloseIcon />
            ) : (<MenuIcon /> )}
        </button>
        </nav>
    )
}

export default Dashboard
