import {Box} from '@mui/material';
import * as React from 'react';

function ControlPanel() {
  return (
    <div>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <h3>Markers and InfoWindows</h3>
        <p>
          This example shows the different ways to add markers and infowindows to
          the map.
        </p>
        <div className="links">
          <a
            href="https://codesandbox.io/s/github/visgl/react-google-maps/tree/main/examples/markers-and-infowindows"
            target="_new">
            Try on CodeSandbox ↗
          </a>

          <a
            href="https://github.com/visgl/react-google-maps/tree/main/examples/markers-and-infowindows"
            target="_new">
            View Code ↗
          </a>
        </div>
      </Box>
    </div>
  );
}

export default React.memo(ControlPanel);
