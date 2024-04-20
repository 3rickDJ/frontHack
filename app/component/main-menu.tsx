'use client'

import { Box, styled, Chip} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Colors } from '../theme/colors'
import { getLocations } from '../services/back/locations'
import Mapa from './Mapa'

function MainMenu() {

  const [locations, setLocations] =  useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLocations()
        setLocations(response.data.data)
      } catch (error) {
        console.log('Error fetching locations', error)
      }
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
      <Mapa />
      
    </Box>


  )
}

export default MainMenu
