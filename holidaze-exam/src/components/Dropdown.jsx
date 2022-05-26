// import React from 'react'
// import { Link } from 'react-router-dom'

// const Dropdown = ({ bookings }) => {
//   return (
//       <>
//       <Link to={`detail/${bookings.id}`}>
//           <img src={bookings.image_url} alt="" />
//           <div className="bookings__small">
//               <p>{bookings.name}</p>
//               <p>{bookings.cost}</p>
//           </div>
//       </Link>
//       </>
//   )
// }

// export default Dropdown

import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ onChange, bookings, searching }) {
  return (
    <div className="filter">
      <input
        className="filter__input"
        type="text"
        placeholder="search.."
        onChange={onChange}
      />
      {searching && (
        <div className="dropdown">
          {bookings.map((item, idx) => {
            return (
              <Link
                to={`/details/${item.id}`}
                key={idx}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div className="dropdown__Card">
                  <div className="drop__img">
                    <img src={item.attributes.image_url} alt="" />
                  </div>
                  <div className="drop__info">
                    <p className="drop__name">{item.attributes.name}</p>
                    <p className="drop__location">{item.attributes.location}</p>
                    <p className="drop__cost">
                      {item.attributes.cost} Kr / Night
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
