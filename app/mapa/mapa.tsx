
'use client'
import React, { useEffect, useState } from 'react';

import AccessibleIcon from '@mui/icons-material/Accessible';

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  Pin,
  useMarkerRef,
  useMap,
  useMapsLibrary

} from '@vis.gl/react-google-maps';

import ControlPanel from './control-panel';
import {MovingMarker} from './moving-marker';
import {MarkerWithInfowindow} from './marker-with-infowindow';
import { getLocations } from '../services/back/locations';

const API_KEY = "AIzaSyBPnoa5_JlzafSUt54wdKxTgmb86m323JQ"

const getLocation = (location: any) => {
  return {
    position: {lat: parseFloat(location.attributes.latitud), lng: parseFloat(location.attributes.longitud)},
    id: location.id,
    state: location.attributes.isEmpty,
    description: location.attributes.description,
    cover: location.attributes.cover,
  }
}

const formatResponse = (response: any) => {
  return response.map((location: any) => getLocation(location))
}



export default function Mapa() {
  const [markerRef, marker] = useMarkerRef();
  const [locations, setLocations] =  useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLocations()
        setLocations(formatResponse(response.data.data))
        console.log(formatResponse(response.data.data))
      } catch (error) {
        console.log('Error fetching locations', error)
      }
    }
    fetchData()
  }, [])

  return (
    <APIProvider apiKey={API_KEY} libraries={['marker']}>
      <Map
        mapId={'bf51a910020fa25a'}
        defaultZoom={3}
        defaultCenter={{lat: 19.045935514053745, lng: -98.21501561598834}}
        gestureHandling={'greedy'}
        zoom={16}
        disableDefaultUI>
        {/* <AdvancedMarker position={} /> */}
        <AdvancedMarker position={{lat: 28, lng: -82}} title={'AdvancedMarker that opens an Infowindow when clicked.'} />
        {locations?.map((location: any) => (
          <MarkerWithInfowindow key={location.id} position={location.position} title={location.id} state={location.state} description={location.description} {...location} />
        ))}
        <AdvancedMarker position={{lat: 19.05140108223467, lng: -98.21198794569344}} >
          <Pin scale={1} background={'#ff4500'} glyph={'🔵'} borderColor={'#ff0000'} />
        </AdvancedMarker>

        {/* <AdvancedMarker position={{lat: 19.05140108223467, lng: -98.21198794569344}} >
          🔵
        </AdvancedMarker> */}



        {/* continously updated marker */}
        {/* <MovingMarker /> */}
        <Directions />


      </Map>
    </APIProvider>
  );
};

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

      origin: { lat: 19.05202030845445, lng: -98.20947953677938 },
      destination: {lat: 19.05140108223467, lng: -98.21198794569344},
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    }).then (response => {
      directionsRenderer.setDirections(response);
      setRoutes(response.routes)
    });
  }, [directionsService , directionsRenderer]);

  if(!leg)return null;

  return(
  <div className="direction">
    <h2>{selected.summary}</h2>
  </div>
  );
}
