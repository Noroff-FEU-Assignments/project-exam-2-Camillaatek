// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 60.388050,
//       lng: 5.331860
//     },
//     zoom: 14
//   };

//   render() {
//     return (

//       <div style={{ height: '100vh', width: '100vw' }}>
//         <GoogleMapReact

//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={60.388050}
//             lng={6.331860}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import logo from "../../images/HOLIDAZE.png";
import { Link } from "react-router-dom";
import Star from "@mui/icons-material/Star";

const AnyReactComponent = ({ text, img, star }) => (
  <div className="map__card">
    <p>{text}</p>

    <img className="map__img" src={img} alt="" />

    <div className="map__review">
      <Star style={{ color: "#FFA800" }} />
      <Star style={{ color: "#FFA800" }} />
      <Star style={{ color: "#FFA800" }} />
      <Star style={{ color: "#FFA800" }} />
      <Star style={{ color: "#FFA800" }} />
      <Star style={{ color: "#FFA800" }} />
    </div>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 60.389081649437244,
      lng: 5.331577887094169,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBAGjy1HlqfRjJu4BZqxWzwfwOekrpTZdc" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={60.39120129194655}
            lng={5.319785702374072}
            text="Bergen Kino"
            img={
              "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.39434567860565}
            lng={5.343164465398466}
            text="Fløyen"
            img={
              "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.39964899305089}
            lng={5.304184786893092}
            text="Akvariet"
            img={
              "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.39304364787546}
            lng={5.324917692379362}
            text="Galleriet"
            img={
              "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.397192560146}
            lng={5.324294795877084}
            text="Bryggen"
            img={
              "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.381824101638564}
            lng={5.3295122135338024}
            text="VilVite Vitensenter"
            img={
              "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720"
            }
            star="234"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
