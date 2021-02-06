import React from 'react'
import {css} from "@emotion/react";
import SimpleMap from "./component/SimpleMap.js";
import styled from 'styled-components';
import { Map } from 'google-maps-react';
import { MapContainer } from './component/MapContainer';
const Container = styled.div`
  height: 200vh;
  position : absolute ;
  display : flex;
  width : 100vw;
`

function RealApp() {
    return (
        <div>
            <Container><MapContainer/></Container>
            <Container><SimpleMap/></Container>
            
                
           
            
        </div>
    )
}

export default RealApp
