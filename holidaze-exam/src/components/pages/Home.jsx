import { Link } from "react-router-dom";
import frontpic from "../../images/frontpic3.jpg";
import Footer from "../Footer";
import NavBar from "../navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <img className="home__frontpic" src={frontpic} alt="Holidaze"></img>
        <div className="home__grid">
          <Link to={"/Accommodations"}>
            <button>Explore All Hotels</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
