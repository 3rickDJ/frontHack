import React, {useState} from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import {Button, Grid, IconButton} from '@mui/material';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ReportIcon from '@mui/icons-material/Report';

export const MarkerWithInfowindow = (props:any) => {
  console.log(props.description)
  const {position, title, state, description} = props;
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const isEmpty = (state ? {bg:'#98fb98', border: '#008000'} : {bg: '#ff4500', border: '#ff0000'})

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen((prev) => !prev)}
        position={position}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      >
        <Pin scale={1} background={isEmpty.bg} glyph={''} borderColor={isEmpty.border} />
      </AdvancedMarker>
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}>
            <Grid container spacing={2}>
              <Grid item>
                <AccessibleIcon />
              </Grid>
            <Grid item>
              <h5>Descripción</h5>
              <code style={{ whiteSpace: 'nowrap' }}>{props.description} </code>{' '}
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disabled={!state}
                color={state ? 'success' : 'error'}
                onClick={() => console.log('Button clicked')}>
                Ir
              </Button>
              <IconButton
                color="error"
                onClick={() => console.log('Button clicked')}>
                <ReportIcon />
              </IconButton>
            </Grid>
          </Grid>
        </InfoWindow>
      )}
    </>
  );
};
