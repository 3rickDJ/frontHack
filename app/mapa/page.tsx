'use client'
import React from 'react';
import Mapa from './mapa';
import {Box, Grid} from '@mui/material';


export default function Page() {
  return (
    <Box sx={{width: '75%', height: '75%'}}>
      <Mapa />
    </Box>
  );
}