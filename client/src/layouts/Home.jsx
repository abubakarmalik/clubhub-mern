import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm' sx={styles.bigbox}>
        <Box sx={styles.boxmodel}>
          <Typography variant='h4' gutterBottom>
            Home
          </Typography>
        </Box>
      </Container>
    </>
  )
}

const styles = {
  bigbox: {
    bgcolor: '#cfe8fc',
  },
  boxmodel: {
    height: '100vh',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Home
