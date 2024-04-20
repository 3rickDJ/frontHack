import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import React , { useEffect } from "react";

const position = { lat: 19.03793 , lng: -98.20346 };

export default function Mapa() {
  return (
    <>
      <h1>Mapa de Google</h1>

      <div style={{ height: "100vh", width: "100vh" }}>
        <APIProvider apiKey={"AIzaSyBPnoa5_JlzafSUt54wdKxTgmb86m323JQ"}>
          <Map 
          defaultCenter={position} 
          fullscreenControl = {true}
          >
          <Directions/>
          </Map>
        </APIProvider>
      </div>
    </>
  );
}


function Directions(){
  const map = useMap();
  const routesLIbrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = 
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] = 
    useState<google.maps.DirectionsRenderer>();
  const [routes,setRoutes] = useState<google.maps.DirectionsRoute[]>([]);

  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];


  useEffect(() => {
    if(!routesLIbrary|| !map)  return;
    setDirectionsService(new routesLIbrary.DirectionsService());
    setDirectionsRenderer(new routesLIbrary.DirectionsRenderer({map}));
  },[routesLIbrary, map]);

  useEffect(() => {
    if(!directionsService || !directionsRenderer) return;

    directionsService
    .route({
      origin: {lat: 19.03793, lng: -98.20346},
      destination: {lat: 19.014228, lng: -98.247206},
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    }).then (response => {
      directionsRenderer.setDirections(response);
      setRoutes(response.routes)
    });
  }, [directionsService , directionsRenderer]);

  useEffect(()=>{
    if(!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  },[routeIndex, directionsRenderer])

  if(!leg)return null;

  return(
  <div className="direction">
    <h2>{selected.summary}</h2>
    <p>
      {leg.start_address.split(","[0])} to {leg.end_address.split(",")[0]}
    </p>
    <p>Distacia: [leg.distance?.text]</p>
    <p>Duración :[leg.duration?.text]</p>

    <h2>Otras Rutas</h2>
    <ul>
      {routes.map((route, index) => (
        <li key ={route.summary}>
          <button onClick={()=> setRouteIndex(index)}>
            {route.summary}
          </button>
        </li>
      ))}
    </ul>

  </div>
  );

}

