/*global google*/
/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useState,useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { css,jsx } from '@emotion/react';
import { Marker,Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import { FiZap } from "react-icons/fi";
const AnyReactComponent = ({ text }) => <div className="pin">{text}<div css = {css`size:60em;`}><fiZap/></div></div>;
const Barker = props => <div className="pin"></div>;
function SimpleMap() {
  const [lat, setlat] = useState(19.2183);
  const [lng, setlng] = useState(72.9781)
  const center ={
    lat,lng
  };
  const HandleReactComponent = () => {
    { navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setlat(position.coords.latitude);
      setlng(position.coords.longitude);
      console.log("latitude is" + lat);
      console.log("longitude is " + lng);
    }
  );
}
}
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <div style={{ height: '100vh', width: '80%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key:"AIzaSyDvwYzYrD5cCA4Tf06lMeTUTsheUjKI6es" }}
      defaultCenter={center}
      defaultZoom={11}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
      {/* <Marker center /> */}
      <Barker  lat={72.9781}
        lng={19.2183}/>
    </GoogleMapReact>
    {/* <Map google={this.props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>
  <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />
  <Marker
    name={'Your position'}
    position={{lat: 37.762391, lng: -122.439192}}
    icon={{
      url: "./images/map-pin.png",
      anchor: new window.google.maps.Point(32,32),
      scaledSize: new window.google.maps.Size(64,64)
    }} />
</Map> */}
  </div>
  <div css={css`display:flex;position:relative;justify-content:flex-end;`}><button css = {css`background:red;font-size:2em;`} onClick={HandleReactComponent}>Locate me </button></div>
 <FiZap/>
 </div>
  )
}

export default SimpleMap
