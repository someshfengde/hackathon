/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { css,jsx } from '@emotion/react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.7515,
      lng: 75.7139
    },
    zoom: 11
  };
  
  componentWillMount() {
    const pos =  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position)
    const latitude = position.coords.latitude;
     const longitude = position.coords.longitude;
     console.log("longitude is " + longitude);
   
    console.log("lattutude is " + latitude);
  });}
  
  // console.log("this called");style={{display:"flex",width:"50%",}}
  render() {

    return (
      // Important! Always set the container height explicitly
      <div css = {css`width:50%;
      display:flex;
      justify-content:center;
      margin-left:25%;`} >
         {/* <h1>this called </h1> */}
        <GoogleMapReact
        
          bootstrapURLKeys={{ key: "AIzaSyDvwYzYrD5cCA4Tf06lMeTUTsheUjKI6es" }}
          defaultCenter = {this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
        >
          {/* <AnyReactComponent lat = {this.latitude} lng ={this.longitude}/> */}
          <AnyReactComponent
            lat={19.7515}
            lng={75.7139}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;