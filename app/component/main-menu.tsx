'use client'

import { Box, styled, Chip} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Colors } from '../theme/colors'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-strapi-project2-i37b2ut65q-uc.a.run.app/api/'
})

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
      const response = await fetchUser()
      setLocations(response.data)
    }
    fetchData()
  }, [])
  console.log(locations)

  const getLabel = (location: { id: string, attributes: { latitud: string, longitud: string } }) => {
    return `${location.attributes.latitud} - ${location.attributes.longitud}`
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      Hola
      {locations?.map((location: { id: string, attributes: { latitud: string, longitud: string } }) => (
        <Chip key={location.id} label={getLabel(location)}/>
      ))}
    </Box>
  )
}

export default MainMenu