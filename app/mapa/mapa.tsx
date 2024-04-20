
'use client'
import React, { useEffect, useState } from 'react';

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  Pin,
  useMarkerRef
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
        defaultCenter={{lat: 12, lng: 0}}
        gestureHandling={'greedy'}
        disableDefaultUI>
        {/* <AdvancedMarker position={} /> */}
        <AdvancedMarker position={{lat: 28, lng: -82}} title={'AdvancedMarker that opens an Infowindow when clicked.'} />
        {locations?.map((location: any) => (
          <AdvancedMarker key={location.id} position={location.position} />
        ))}



        {/* continously updated marker */}
        {/* <MovingMarker /> */}


      </Map>

      <ControlPanel />
    </APIProvider>
  );
};

