import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
  Marker
} from "@vis.gl/react-google-maps";
import React, { useEffect } from "react";
const API_KEY = "AIzaSyBPnoa5_JlzafSUt54wdKxTgmb86m323JQ"

export default function Mapa() {
  // const map = useMap();
  const position = { lat: 19.000719000000007, lng: -98.20144908465724 };
  return (
    <>
      {/* style={{ width: '100vw', height: '100vh' }} */}
      <h1>Mapa de Google</h1>
      <div style={{ height: "100vh", width: "100vh" }}>
        <APIProvider
          apiKey={API_KEY}
          libraries={['marker']}
        >
          <Map defaultCenter={position} defaultZoom={17} >
            <Marker position={position} />
          </Map>
        </APIProvider>
      </div>
    </>
  );
}
