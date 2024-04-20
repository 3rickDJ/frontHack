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
    </ThemeProvider>
  );
}
