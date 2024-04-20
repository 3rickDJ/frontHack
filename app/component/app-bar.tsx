'use client'
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Mapa from './Mapa';

export default function MyAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div >
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
                    </Menu>
                </Toolbar>
            </AppBar>
            <div style={{ width: '100%' , maxWidth: '100%'}}>
                <Mapa />
            </div>
        </div>
    );
}