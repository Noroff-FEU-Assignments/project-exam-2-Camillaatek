// import React, { useEffect } from 'react'
// import Footer from '../Footer'
// import NavBar from '../navbar/NavBar'
// import StarIcon from '@mui/icons-material/Star';
// import KitchenIcon from '@mui/icons-material/Kitchen';
// import BedIcon from '@mui/icons-material/Bed';
// import useAxios from '../../hooks/useAxios';
// import { BOOKINGS_PATH } from '../../utils/Api'

// const Accommodations = () => {
//   const [isTriggered, setIsTriggered] = useToggle()
//   const [ bookings, setBookings ] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const http = useAxios()

//   useEffect(() => {
//     setIsLoading(true)
//     const fetchData = async () => {
//       const data = await http.get(BOOKINGS_PATH)
//       setBookings(data.data.data)
//       setIsLoading(false)
//     }

//     fetchData().catch((error) => setError (error.response.data.error))
//   }, [isTriggered, auth])

//   return (
//       <>
//       <NavBar />
//       <div className="hotel__card" key={idx}>
//                   <img src={item.attributes.image_url} alt="" />
//                   <div className="hotel__title">
//                     <h2 className='hotel__name'>{item.attributes.name}</h2>
//                    <h2 className='hotel__cost'>{item.attributes.cost} Kr</h2>
//                   </div>
//                   <p className='hotel__location'>{item.attributes.location}</p>
//                   <p className='hotel__rating'><StarIcon style={{ fontSize: 15, color: '#FFA800' }}/>{item.attributes.rating}</p>
//                   <p className='hotel__info'>
//                     <div>
//                     <KitchenIcon style={{color: '#1E195B'}}/>
//                       {item.attributes.bedroom} Bd.
//                     </div>
//                     <div>
//                       <BedIcon style={{color: '#1E195B'}}/>
//                       {item.attributes.bedroom} Gs.
//                     </div>
//                     <div>
//                       <BedIcon style={{color: '#1E195B'}}/>
//                       {item.attributes.bedroom} Sq.
//                     </div></p>
//                   <Link to={`/booking/${item.id}`}>
//                     <button className='hotel__edit'>
//                       EDIT
//                       </button>
//                   </Link>

//                 </div>
//     <Footer />
//     </>
//   )
// }

// export default Accommodations

import StarIcon from "@mui/icons-material/Star";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BedIcon from "@mui/icons-material/Bed";
import useToggle from "../../hooks/useToggle";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { BOOKINGS_PATH } from "../../utils/Api";
import { Link } from "react-router-dom";
import Dashboard from "./admin/components/Dashboard";
import NavBar from "../navbar/NavBar";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Dropdown from "../Dropdown";
import { GoogleMapReact } from "google-map-react";
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
            {bookings.map((item, idx) => {
              return (
                <Link
                  to={`/details/${item.id}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="acc__card" key={idx}>
                    <img src={item.attributes.image_url} alt="" />
                    <div className="acc__info__grid">
                      <div className="acc__title">
                        <h2 className="acc__name">{item.attributes.name}</h2>
                      </div>
                      <div className="acc__smallinfo">
                        <p className="acc__location">
                          {item.attributes.location}
                        </p>
                        <p className="acc__rating">
                          <StarIcon
                            style={{ fontSize: 15, color: "#FFA800" }}
                          />
                          {item.attributes.rating}
                        </p>
                      </div>
                      <p className="acc__info">
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
                      </p>
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

        <section className="testing">
          <SimpleMap />
        </section>
      </div>
    </div>
  );
};

export default Accommodations;

// export default Accomodations
