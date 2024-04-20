import { Box, Container } from '@mui/material'
import MainMenu from './component/main-menu'
import React from 'react'

export default function Home() {
  return (
    <Container sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
      }}>
      <Box>
        <MainMenu/>
      </Box>
    </Container>
      )
}
