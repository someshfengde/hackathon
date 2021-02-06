import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {css} from "@emotion/react";
import SimpleMap from "./component/SimpleMap.js";
import { Map } from 'google-maps-react';
import { MapContainer } from './component/MapContainer';
const Container = styled.div`
  height: 200vh;
  position : absolute ;
  display : flex;
  width : 100vw;
`

function App() {
  return (
   <div>
     <Container>
          <SimpleMap/>
      </Container>
      {/* <Container>
        <MapContainer/>
      </Container> */}
      
    </div>
      
  
  );
}

export default App;

// import React, { Component } from 'react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// import CurrentLocation from './component/Map';




// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   render() {
//     return (
//       <CurrentLocation
//         centerAroundCurrentLocation
//         google={this.props.google}
//       >
//         <Marker onClick={this.onMarkerClick} name={'Current Location'} />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </CurrentLocation>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDvwYzYrD5cCA4Tf06lMeTUTsheUjKI6es'
// })(MapContainer);
