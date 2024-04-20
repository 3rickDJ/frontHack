
'use client'
import React from 'react';

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

const API_KEY = "AIzaSyBPnoa5_JlzafSUt54wdKxTgmb86m323JQ"



export default function Mapa() {
  const [markerRef, marker] = useMarkerRef();

  return (
    <APIProvider apiKey={API_KEY} libraries={['marker']}>
      <Map
        mapId={'bf51a910020fa25a'}
        defaultZoom={3}
        defaultCenter={{lat: 12, lng: 0}}
        gestureHandling={'greedy'}
        disableDefaultUI>

        <Marker
          position={{ lat: 10, lng: 10 }}
          clickable={true}
          onClick={() => alert('marker was clicked!')}
          title={'clickable google.maps.Marker'}
        />

        {/* advanced marker with customized pin */}
        {/* <AdvancedMarker
          position={{lat: 20, lng: 10}}
          title={'AdvancedMarker with customized pin.'}>
          <Pin
            background={'#22ccff'}
            borderColor={'#1e89a1'}
            glyphColor={'#0f677a'}></Pin>
        </AdvancedMarker> */}

        {/* advanced marker with html pin glyph */}
        {/* <AdvancedMarker
          position={{lat: 15, lng: 20}}
          title={'AdvancedMarker with customized pin.'}>
          <Pin background={'#22ccff'} borderColor={'#1e89a1'} scale={1.4}>
            children are rendered as 'glyph' of pin
            👀
          </Pin>
        </AdvancedMarker> */}

        {/* advanced marker with html-content */}
        <AdvancedMarker
          position={{lat: 30, lng: 10}}
          title={'AdvancedMarker with custom html content.'}>
          <div
            style={{
              width: 16,
              height: 16,
              position: 'absolute',
              top: 0,
              left: 0,
              background: '#1dbe80',
              border: '2px solid #0e6443',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)'
            }}></div>
        </AdvancedMarker>


        {/* continously updated marker */}
        <MovingMarker />

        {/* simple stateful infowindow */}
        <Marker ref={markerRef} position={{lat: 53.54992, lng: 10.00678}} />

        {/* <InfoWindow anchor={marker}>
          <h2>Hello everyone!</h2>
          <p>This is an Info Window</p>
        </InfoWindow> */}
      </Map>

      <ControlPanel />
    </APIProvider>
  );
};

