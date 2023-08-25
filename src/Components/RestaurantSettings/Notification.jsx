import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotificationImg from '../../Assests/Notification.jpeg'
function Notification() {
  const Navigate = useNavigate()
  return (
    <Box className='container' >
      <Box sx={{ width: '40%', margin: '0px auto', textAlign: 'center' ,marginTop:'7rem'}}>
        <Box >
          <img src={NotificationImg} alt="" style={{ borderRadius: '50%', width: '45%' }} />
        </Box>

        <Typography>
          A location change is being proposed, please wait for approval to get a new location
        </Typography>

        <Typography sx={{ border: '1px solid #D5E6E5', color: '#2B817B', fontWeight: 'bold', padding: '10px', borderRadius: '5px' }}
        onClick={Navigate("/settings")}
        >
          Back to Profile
        </Typography>

      </Box>
    </Box>
  )
}

export default Notification
