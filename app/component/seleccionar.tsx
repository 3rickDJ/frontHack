import * as React from 'react';
import { Box, Grid, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Seleccionar() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#FF5733', // Azul profundo
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
          bgcolor: 'primary.main',
          borderRadius: 3,
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
