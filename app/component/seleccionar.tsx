import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Seleccionar() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#FF5A00', // Naranja
            dark: '#303f9f', // Azul más oscuro
          },
          secondary: {
            main: '#f50057', // Rosa
          },
          white: {
            main: '#ECE9E6 ', // Color carne
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          bgcolor: 'primary.main',
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
          bgcolor: 'white.main',
          padding: 4,
          textAlign: 'center',
          borderRadius: 2, // Bordes redondeados
        }}
      >
        <Typography variant="h4" gutterBottom color={'black'}>
          Mapa de aparcamiento
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
