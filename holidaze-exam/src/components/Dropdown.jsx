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

function Dropdown({ onChange, items, searching }){
    return (
      <div className='filter'>
        <input className='filter__input'
          type='text'
          placeholder="search.."
          onChange={onChange}
        />
        {searching && (
            <div className="dropdown">
                {items.map((item, idx) => {
                    return (
                        <Link to={`/details/${item.id}`} key={idx}>
                            <p>{item.attributes.name}</p>
                        </Link>
                    )
                })}
            </div>
        )}
      </div>
    );
  };
  
  export default Dropdown