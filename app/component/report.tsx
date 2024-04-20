'use client'
import * as React from 'react';

//Texto
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
//Lista
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Menu from '@mui/material/Menu';

//Botton
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Report() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div>
    <AppBar position="fixed" style={{ width: '100vw', backgroundColor: '#FF5A00' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        KI2-ALL
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
                    </Menu>
                </Toolbar>
            </AppBar>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        marginTop: '250px',
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Fecha</h1>
      <TextField id="fecha" label="Outlinde" variant="outlined" />
      <h1>Hora</h1>
      <TextField id="hora" label="Outlined" variant="outlined" />
      <h1>Calle 1</h1>
      <TextField id="calle1" label="Outlined" variant="outlined" />
      <h1>Calle 2</h1>
      <TextField id="calle2" label="Outlined" variant="outlined" />
      <h1>Colonia</h1>
      <TextField id="colonia" label="Outlined" variant="outlined" />
      <h1>Motivo reporte</h1>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Motivo de reporte
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'motivo',
            id: 'motivo',
          }}
        >
          <option>Objeto</option>
          <option>Ambulante</option>
          <option>Persona</option>
          <option>Automovil</option>
        </NativeSelect>
      </FormControl>

      <Stack spacing={2} direction="row">
        <Button variant="contained" >Enviar</Button>
      </Stack>


    </Box>
    </div>
  );
}