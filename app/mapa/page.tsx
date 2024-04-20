'use client'
import { Box, Grid } from '@mui/material'
import React from 'react'
import Mapa from '../component/Mapa'

export default function Page() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
    <Grid item xs={3}>
      <Mapa />
    </Grid>
  </Grid>
  )
}