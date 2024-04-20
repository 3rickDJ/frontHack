'use client'
import * as React from 'react';
import { Box, ThemeProvider, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Mostrar() {
    return (
       <>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              bgcolor: '#FF5A00',
              color: 'white',
              padding: 4, // Aumenta el espacio dentro de la caja
              textAlign: 'center', // Centra el texto dentro de la caja
            }}
          >
            <Typography variant="h4" gutterBottom>
              Selecciona tu espacio de aparcamiento
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '200px', // Distancia desde arriba
              left: '50%', // Centra horizontalmente
              transform: 'translateX(-50%)', // Centra horizontalmente
              width: '80%', // Ancho del 80% del contenedor padre
              height: '500px', // Altura de 500px
              margin: '10px auto', // Margen superior e inferior de 20px, y auto para centrar horizontalmente
              bgcolor: '#ECE9E6',
              padding: 4,
              textAlign: 'center',
              borderRadius: 2, // Bordes redondeados
            }}
          >
            <Typography variant="h4" gutterBottom color={'black'}>
              Mapa de aparcamiento
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '750px', // Ajusta la posición vertical de los botones
              left: '50%', // Centra horizontalmente
              transform: 'translateX(-50%)', // Centra horizontalmente
              width: '80%', // Ancho del 80% del contenedor padre
              textAlign: 'center',
              marginBottom: '40px', // Aumenta el margen inferior
              marginTop: '20px', // Aumenta el margen superior
            }}
          >
            <Button sx={{mr: 2, width: '200px', height: '50px'}} variant="outlined" color="error">
              Regresar
            </Button>
            <Button sx={{width: '200px', height: '50px'}} variant="contained" color="success">
              Continuar
            </Button>
          </Box>
        </>
      );
}
