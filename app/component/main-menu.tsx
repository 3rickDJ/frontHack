'use client'

import { Box, styled, Chip} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Colors } from '../theme/colors'
import { getLocations } from '../services/back/locations'

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
      console.log(response)
      setLocations(response.data.data)
    }
    fetchData()
  }, [])
  const getLabel = (location: { id: string, attributes: { latitud: string, longitud: string } }) => {
    return `${location.attributes.latitud} - ${location.attributes.longitud}`
  }
  getLocations()

  const apiUrl = process.env.NEXT_PUBLIC_BACK;

  console.log(apiUrl); // Outputs: 'https://api.example.com'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      COMPUSALCHICHAS - LOCATIONS
      {locations?.map((location: { id: string, attributes: { latitud: string, longitud: string } }) => (
        <Chip key={location.id} label={getLabel(location)}/>
      ))}
    </Box>
  )
}

export default MainMenu