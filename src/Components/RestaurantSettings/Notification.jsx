import { Box, Typography } from '@mui/material'
import React from 'react'

function Notification() {
  return (
    <Box className='container' >
      <Box sx={{width:'40%',margin:'10px auto',textAlign:'center'}}>
        <Typography>
        A location change is being proposed, please wait for approval to get a new location
        </Typography>

        <Typography sx={{border:'1px solid #D5E6E5',color:'#2B817B',fontWeight:'bold',padding:'10px',borderRadius:'5px'}}>
          Back to Profile
        </Typography>

      </Box>
    </Box>
  )
}

export default Notification
