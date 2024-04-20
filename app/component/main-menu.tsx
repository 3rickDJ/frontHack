'use client'

import { Box, styled, Chip} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Colors } from '../theme/colors'
import { getLocations } from '../services/back/locations'

<<<<<<< Updated upstream
const MainMenuFrame = styled(Box, {
    name: 'MainMenuFrameComponent',
    slot: "Root"
})(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 8px',
    background: `radial-gradient(circle, rgba(0,0,0,0.2) 10%,
    rgba(0,0,0,1)), url("images/main-menu-bg.webp")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    gap: 4,
    boxShadow: `2px 2px 16px 2px ${Colors.secondary}`
}))

function MainMenu() {
  const [locations, setLocations] =  useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await getLocations()
      setLocations(response.data.data)
    }
    fetchData()
  }, [])

  const getLabel = (location: { id: string, attributes: { latitud: string, longitud: string } }) => {
    return `${location.attributes.latitud} - ${location.attributes.longitud}`
  }
=======
>>>>>>> Stashed changes

function Mapa() {
  return (
<<<<<<< Updated upstream
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      COMPUSALCHICHAS - LOCATIONS
      {locations?.map((location: { id: string, attributes: { latitud: string, longitud: string } }) => (
        <Chip key={location.id} label={getLabel(location)}/>
      ))}
    </Box>
  )
=======
    <>
      <h1>Mapa de Google</h1>
      <div style={{ height: "100vh", width: "100vh" }}>
        <APIProvider apiKey={"AIzaSyBPnoa5_JlzafSUt54wdKxTgmb86m323JQ"}>
          <Map center={position} zoom={100}></Map>
        </APIProvider>
      </div>
    </>
  );
>>>>>>> Stashed changes
}

function MainMenu() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUser();
      setLocations(response.data);
    };
    fetchData();
  }, []);
  console.log(locations);

  const getLabel = (location: {
    id: string;
    attributes: { latitud: string; longitud: string };
  }) => {
    return `${location.attributes.latitud} - ${location.attributes.longitud}`;
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {locations?.map(
        (location: {
          id: string;
          attributes: { latitud: string; longitud: string };
        }) => (
          <Chip key={location.id} label={getLabel(location)} />
        )
      )}
      <Mapa />
    </Box>
  );
}

export default MainMenu;