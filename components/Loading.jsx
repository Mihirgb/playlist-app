import React from 'react'
import { CircularProgress, Box, Typography } from '@mui/material'

const Loading = () => {
  return (
    <Box 
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}
    >
      <CircularProgress />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Please wait, getting the playlist from Mihir's Spotify...
      </Typography>
    </Box>
  )
}

export default Loading