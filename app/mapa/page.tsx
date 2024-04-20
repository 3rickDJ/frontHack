'use client'
import React from 'react';
import Mapa from './mapa';
import { Box, Typography, Button} from '@mui/material';


export default function Page() {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        height: "100vh",
      }}
    >
      <Box sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
        color: 'black',
      }}>
        <Mapa />
      </Box>
    </Box>
    </>
  );
}