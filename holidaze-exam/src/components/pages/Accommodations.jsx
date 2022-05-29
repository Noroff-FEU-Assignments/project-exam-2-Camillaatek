import StarIcon from "@mui/icons-material/Star";
import BedIcon from "@mui/icons-material/Bed";
import useToggle from "../../hooks/useToggle";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { BOOKINGS_PATH } from "../../utils/Api";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Dropdown from "../Dropdown";
import SimpleMap from "./Map";

const Accommodations = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [bookings, setBookings] = useState([]);

  const [error, setError] = useState();
  const http = useAxios();
  const [isLoading, setIsLoading] = useState(true);

  const [searchItems, setSearchItems] = useState([]);
  const [searching, setSearching] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dropdownClosed, setDropdown] = useState("false");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(BOOKINGS_PATH);
      setBookings(data.data.data);

      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered]);

  const onChange = (e) => {
    if (e.target.value.length > 0) {
      setSearching(true);
      setInputValue(e.target.value);
    }
    const filteredData = bookings.filter((item) => {
      return item.attributes.name
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });
    setSearchItems(filteredData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="acc">
      <NavBar />
      <div className="acc__page">
        <div className="acc__grid">
          <p className="acc__search">Find your dream vacation</p>
          <Dropdown
            bookings={searchItems}
            onChange={onChange}
            searching={searching}
          />

          <div className="acc__list">
            {bookings.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`/details/${item.id}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="acc__card" key={item.id}>
                    <img src={item.attributes.image_url} alt="" />
                    <div className="acc__info__grid">
                      <div className="acc__title">
                        <h2 className="acc__name">{item.attributes.name}</h2>
                      </div>
                      <div className="acc__smallinfo">
                        <p className="acc__location">
                          {item.attributes.location}
                        </p>
                        <div className="acc__rating">
                          <StarIcon
                            style={{ fontSize: 15, color: "#FFA800" }}
                          />
                          {item.attributes.rating}
                        </div>
                      </div>
                      <div className="acc__info">
                        <div>
                          <PeopleAltIcon style={{ color: "#1E195B" }} />
                          {item.attributes.guests} Gst.
                        </div>
                        <div>
                          <BedIcon style={{ color: "#1E195B" }} />
                          {item.attributes.bedroom} Bdr.
                        </div>
                        <div>
                          <SquareFootIcon style={{ color: "#1E195B" }} />
                          {item.attributes.square} Sqm.
                        </div>
                      </div>
                      <h2 className="acc__cost">
                        {item.attributes.cost} Kr / Night
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <section className="acc__map">
          <SimpleMap />
        </section>
      </div>
    </div>
  );
};

export default Accommodations;
