import { Link } from "react-router-dom";
import logo from "../../../../images/HOLIDAZE.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MessageIcon from "@mui/icons-material/Message";
import PermContactCalendar from "@mui/icons-material/PermContactCalendar";
import { Avatar } from "@mui/material";

const Dashboard = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth(null);
    navigate("/login");
  };
  return (
    <nav className="dashboard">
      <h3 className="dashboard__logo">
        <Link to="/">
          <img className="dashboard__menulogo" src={logo} alt="Holidaze"></img>
        </Link>
      </h3>

      <ul
        className={
          isMobile ? "dashboard__nav-links-mobile" : "dashboard__nav-links"
        }
        onClick={() => setIsMobile(false)}
      >
        <Link to={"/newentry"} className="dashboard__link">
          <button className="dashboard__newentryBtn">Add New Entry</button>
        </Link>
        <li>
          <Link to={"/messages"} className="dashboard__link">
            <MessageIcon />
            Messages
          </Link>
        </li>

        <li>
          <Link to={"/enquiries"} className="dashboard__link">
            <PermContactCalendar />
            Enquiries
          </Link>
        </li>
        <li>
          <Link to={"/admin"} className="dashboard__link">
            <HotelIcon />
            Hotels
          </Link>
        </li>
        <li>
          <Link to={"/"} className="dashboard__link">
            <HomeIcon />
            Back to website
          </Link>
        </li>
        <div className="dashboard__info">
          <p>{auth.user.username}</p>
          <p>{auth.user.email}</p>
        </div>
        <li>
          {!auth ? (
            <Link to={"/login"} className="dashboard__link">
              <button className="dashboard__loginBtn">Login</button>
            </Link>
          ) : (
            <button className="dashboard__logoutBtn" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </li>
      </ul>

      <button
        className="dashboard__mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Dashboard;
