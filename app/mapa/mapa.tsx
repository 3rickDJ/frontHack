
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




        {/* continously updated marker */}
        {/* <MovingMarker /> */}


      </Map>
    </APIProvider>
  );
};

