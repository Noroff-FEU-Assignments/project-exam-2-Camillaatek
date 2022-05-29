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
              "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECBgTKjRqeqw6T_n7_FuOr0BnOYXaUSyN9Lns89GV6-t8YqzMtB4-qYVGNE6IXEoUnjhiVT87toQJY2zdKCsfzjK54GQfk0jR-1ft2SzNd168H6u4hGp8cBhPJm6fs3o1K_oJuKwAm7fcoLkUgLplNAztfU9BpsP870efv9yy6KNlN3&3u200&4u200&5m1&2e1&callback=none&key=AIzaSyCW-UFnj12hl_Cs_iVsNKIxzysP_5J1INc&token=71640"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.39434567860565}
            lng={5.343164465398466}
            text="Fløyen"
            img={
              "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDMgLT56K1dRRfwrg0PSTu_frIZw1iCw0RlhY1HsPAPMj9yei1sTVkDCGciyPHRteMS8C9y0hduNRDVgxr6L2MVlOzGNMF1WNKaFDG3KoVQotgMtxNJxIaxDB6N4RBPBgD4PF-zSJhk-0fveKX_tVQYptKKPDLDyfCm9d_se-RJPUUU&3u200&4u200&5m1&2e1&callback=none&key=AIzaSyCW-UFnj12hl_Cs_iVsNKIxzysP_5J1INc&token=3193"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.39964899305089}
            lng={5.304184786893092}
            text="Akvariet"
            img={
              "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBtuIM6Mq2z9ZEsHWZ9gYaAVypgKfG2bEZLZK9NI3mi8FJhAzh0o6BksnbF6k0DhTkUeJmeL0S46liebBgncGb5mKNEBnjdPrgtgRFCx9fM0HH9zFLAUO-JNXFZ68aaokGPccLiYierwZ4gbd0RgCnlpnLyVvbB8P4cTjrM-PDIoD25&3u200&4u200&5m1&2e1&callback=none&key=AIzaSyCW-UFnj12hl_Cs_iVsNKIxzysP_5J1INc&token=35400"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.39304364787546}
            lng={5.324917692379362}
            text="Galleriet"
            img={
              "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBE6BvZqrqvnp05utujv0P52sHCbNG6oNe4cS3k-KjArln5dK6RuQl5NS0W7UYSGXFPj_eUU2VwVOSrCvI_A6Vqh1CIMVsIYdStoq3En87Yn9OiVaJ5OS9M-5lqp0ybk_1X1bCbjJ3jmu0do-OmRnQlV10R002vJmV9e_jhnbVPWxNO&3u200&4u200&5m1&2e1&callback=none&key=AIzaSyCW-UFnj12hl_Cs_iVsNKIxzysP_5J1INc&token=51905"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.397192560146}
            lng={5.324294795877084}
            text="Bryggen"
            img={
              "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBP1dN-xSpKbr10lBfCpd-ad2Z3PWygwb0emTIGza5CiKeHUPTbYX1qDskfBxEH7_cGwmRgX3qSnJRmNf57bczrPXx5yI-6Vi-HnGxU3Hqkmnry50tdlbldRFSAlEcXUbykRAaMDkIzYMxXcWpoeBikxGBSernDkwHpVKDsE1cGYZrU&3u200&4u200&5m1&2e1&callback=none&key=AIzaSyCW-UFnj12hl_Cs_iVsNKIxzysP_5J1INc&token=83831"
            }
            star="234"
          />
          <AnyReactComponent
            lat={60.381824101638564}
            lng={5.3295122135338024}
            text="VilVite Vitensenter"
            img={
              "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEB-FMoI1j_YYPg-N4MQHRspYooeodXnp7jHd0BN-IQPI-9c42hAD9zhUWHX03R2nkSWJ2rU7OEzP3F6GKKz61lx3KKoFkcS4DY-sHZAx8bTEAVpoM5DGqe13dK5ADLW9sTpJnwtdW1ic92JstGNA7xhNBkDZn2aMe-ioGhClP045_Pi&3u200&4u200&5m1&2e1&callback=none&key=AIzaSyCW-UFnj12hl_Cs_iVsNKIxzysP_5J1INc&token=65703"
            }
            star="234"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
