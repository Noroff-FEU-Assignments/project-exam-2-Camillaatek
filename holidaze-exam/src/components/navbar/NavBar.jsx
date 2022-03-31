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

const Menu = () => {

    const [menuClosed, setMenu] = useState("false");
    const [auth, setAuth] = useContext(AuthContext);



    function logout() {
        setAuth(null);
        
    }

    const handleToggle = () => {
        setMenu(!menuClosed);
    };

    return (
        <>
            <nav className="menu">
                <div className="menu__flex flex--space">
                    <Link to="/">
                        <img className="menu__logo" src={logo} alt="Holidaze"></img>
                    </Link>
                    <div className="menu__flexx flex--start">
                        {auth ? <button className="button--simple" onClick={logout}>Log out</button> : ''}
                        {
                            menuClosed ?
                                <HomeIcon
                                    onClick={handleToggle} className="menu__toggle">
                                </HomeIcon>
                                :
                                <CloseIcon
                                    onClick={handleToggle}
                                    className="menu__toggle">
                                </CloseIcon>
                        }
                    </div>

                </div>
                { !menuClosed ? 
                    <div className="menu__open">
                    <div className="menu__nav">
                            <Link onClick={handleToggle} className="menu__link" to='/'>
                            Home
                        </Link>
                            <Link onClick={handleToggle} className="menu__link" to='/accommodation'>
                            All accommodation
                        </Link>
                            <Link onClick={handleToggle} className="menu__link" to='/contact'>
                            Contact us
                        </Link>
                            {auth ? 
                            <>
                            <Link onClick={handleToggle} className="menu__link" to='/panel'>
                                    Admin panel
                            </Link>
                            <div className="menu__link" onClick={() => {
                                logout();
                                handleToggle();
                            }}>Log out</div> 
                            </>
                            :
                            <Link onClick={handleToggle} className="menu__link" to='/login'>
                                    Log in
                            </Link>
                            }
                        
                    </div>
                  
                    
                </div>
                    :
                    ''
                }

            </nav>

        </>
    )


}

export default Menu;






// const NavBar = () => {
//     const [auth, setAuth] = useContext(AuthContext)
//     const navigate = useNavigate()
//     const handleLogout = () => {
//         setAuth(null)
//         navigate('/login')
//     }
//     const [hamburger, setHamburger] = useState("false")
//     const handleToggle = () => {
//         setHamburger(!hamburger)
//     }
//     return (
//         <>
//         <nav className="navbar">
//                 <div className="navbar__closed">
//                     <Link to="/">
//                         <img className="navbar__logo" src={logo} alt="logo"></img>
//                     </Link>
//                     <div className="navbar__right">
//                         {auth ? <button className="button--simple" onClick={handleLogout}>Log out</button> : ''}
//                         {
//                             hamburger ?
//                                 <MenuIcon
//                                     onClick={handleToggle} className="navbar__toggle">
//                                 </MenuIcon>
//                                 :
//                                 <CloseIcon
//                                     onClick={handleToggle}
//                                     className="navbar__toggle">
//                                 </CloseIcon>
//                         }
//                     </div>

//                 </div>
//                 { !hamburger ? 
//                     <div className="navbar__open">
//                     <div className="navbar__nav">
//                             <Link onClick={handleToggle} className="navbar__link" to='/'>
//                                 <HomeIcon />
//                             Home
//                         </Link>
//                             <Link onClick={handleToggle} className="navbar__link" to='/accommodation'>
//                                 <HotelIcon />
//                             Accommodation
//                         </Link>
//                             <Link onClick={handleToggle} className="navbar__link" to='/contact'>
//                                 <HomeIcon />
//                             Contact
//                         </Link>
//                             {auth ? 
//                             <>
//                             <Link onClick={handleToggle} className="navbar__link" to='/admin'>
//                                 <AdminPanelSettingsIcon />
//                                     Admin
//                             </Link>
//                             <div className="navbar__link" onClick={() => {
//                                 handleLogout()
//                                 handleToggle();
//                             }}>Log out</div> 
//                             </>
//                             :
//                             <Link onClick={handleToggle} className="navbar__link" to='/login'>
//                                     <AdminPanelSettingsIcon />
//                                     Log in
//                             </Link>
//                             }
                        
//                     </div>

//                 </div>
//                     :
//                     ''
//                 }

//             </nav>
//         </>
//     )
// }

// export default NavBar 

{/* <div className='navbar'>
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
        </div> */}