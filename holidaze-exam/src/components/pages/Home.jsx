import frontpic from "../../images/frontpic3.jpg";
import Footer from "../Footer";
import NavBar from "../navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <img className="home__frontpic" src={frontpic} alt="Holidaze"></img>
        <h1>uefhn</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
