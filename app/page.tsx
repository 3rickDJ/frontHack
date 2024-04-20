import { Box, Container } from '@mui/material'
import MainMenu from './component/main-menu'
import React from 'react'
import AppBar from './component/app-bar'
import MyAppBar from './component/app-bar'

export default function Home() {
  return (
    <Container sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
      }}>
      <Box>
        <MyAppBar />
        
      </Box>
    </Container>
      )
}
