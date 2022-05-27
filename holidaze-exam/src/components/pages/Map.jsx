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

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
            lat={60.389081649437244}
            lng={5.331577887094169}
            text="HEI KRIASTINE OG OLIVER"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
