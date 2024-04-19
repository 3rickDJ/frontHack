import { Box, Container } from '@mui/material'
import MainMenu from './component/main-menu'
import Seleccionar from './component/seleccionar'

export default function Home() {
  return (
    <Container sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
      }}>
      <Box>
        <Seleccionar />
      </Box>

    </Container>

      )
}
