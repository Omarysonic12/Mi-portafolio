import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from "react-router-dom";


function Navbar() {
  return ( 
   <AppBar 
   position='static'
   elevation={0}
    sx={{
      backgroundColor:'#ffff',
      color:'#1f2400'

   }}>
         
         {/*logo*/}
    <Container maxWidth='lg'>
      <Toolbar disableGutters>

        <Box sx={{
          display:'flex',
          alignItems:'center',
          flexGrow:1,
          gap:1
        }}>
          <Typography variant='h4'
          sx={{
            fontWeight:'bold',
  
          }}>

          </Typography>

            <Typography variant='h6' 
            sx={{
              fontWeight:'bold',
              lineHeight:1
            }}>
              hOLIWIS
            </Typography>
        </Box>

        {/*navegacion*/}

        <Box 
        sx={{
          display:'flex',
          alignItems:'center',
          gap:1
        }}>
          
          <Button sx={{color: '1f2440'}}>Inicio</Button>
          <Button sx={{color: '1f2440'}}>Quien soy yo </Button>
          <Button sx={{color: '1f2440'}}>Servicio</Button>
          <Button sx={{color: '1f2440'}}>Tecnologias</Button>
          <Button sx={{color: '1f2440'}}>Proyectos</Button>




        </Box>

      </Toolbar>
    </Container>













   </AppBar>
  )
}

export default Navbar