'use client'
import React from 'react';
import { Box, Typography, Button,
  AppBar, Toolbar, Menu, MenuItem
  } from '@mui/material';


export default function Page() {
  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <>
      <AppBar position="fixed" style={{ width: '100vw', backgroundColor: '#FF5A00' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KI-2-ALL
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Juan Manuel
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Cuenta</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
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
      </Box>
    </Box>
    </>
  );
}