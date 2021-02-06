// /*global google*/
// import React, { Component } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     };
//   }
//   onMarkerClick(props, marker, e) {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   render() {
//     // if (!this.props.google) {
//     //   return <div>Loading...</div>;
//     // }

//     return (
//       <div
//         style={{
//           position: "relative",
//           height: "calc(100vh - 20px)"
//         }}
//       >
//         <Map style={{}} google={this.props.google} zoom={14}>
//           <Marker
//             onClick={this.onMarkerClick}
//             icon={{
//               url: "/image/map-pin.png",
//               anchor: new window.google.maps.Point(32, 32),
//               scaledSize: new window.google.maps.Size(64, 64)
//             }}
//             name={"Current location"}
//           />
//           <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}
//           >
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//           </InfoWindow>
//         </Map>
//       </div>
//     );
//   }
// }
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDvwYzYrD5cCA4Tf06lMeTUTsheUjKI6es",
//   // v: "3.30"
// })(MapContainer);


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {React,Component} from "react";
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
              <h1>this is the name</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDvwYzYrD5cCA4Tf06lMeTUTsheUjKI6es")
})(MapContainer)