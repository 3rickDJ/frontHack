'use client'

import { Box, styled, Chip} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Colors } from '../theme/colors'
import { getLocations } from '../services/back/locations'
import axios from 'axios'
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";

const api = axios.create({
  baseURL: 'https://my-strapi-project2-i37b2ut65q-uc.a.run.app/api/'
})

const position = { lat: 37.774929, lng: -122.419416 };

const fetchUser = async () => {
  const response = await api({
    method: 'GET',
    url: '/locations'
  })
  return response.data
}

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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      COMPUSALCHICHAS - LOCATIONS
      {locations?.map((location: { id: string, attributes: { latitud: string, longitud: string } }) => (
        <Chip key={location.id} label={getLabel(location)}/>
      ))}



      <h1>Mapa de Google</h1>
      <div style ={{height:"100vh" , width:"100vh"}}>
        <APIProvider 
          apiKey={'AIzaSyBPnoa5_JlzafSUt54wdKxTgmb86m323JQ'}
          >
          <Map center = {position} zoom = {100}></Map>
        </APIProvider>
      </div>
      
    </Box>


  )
}

export default MainMenu
