import { Box, FormControl, Input, InputLabel, TextField, Typography, Select, MenuItem, OutlinedInput, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { BsChevronRight } from 'react-icons/bs'

import React from 'react'

function Order() {
    return (
        <Box className='container'>
            <Box className="heading" sx={{ mt: 1 }}>
                <Typography sx={{ alignItems: 'center', display: 'flex' }}>

                    <Typography sx={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                        Home
                    </Typography>
                    <BsChevronRight style={{ margin: '0px 10px' }} />
                    <Typography sx={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                        Order
                    </Typography>
                    <BsChevronRight style={{ margin: '0px 10px' }} />
                    <Typography sx={{
                        color: '#2B817B',
                        fontWeight: 'bold' 
                    }}>
                        Current subscription
                    </Typography>

                    {/* </Link> */}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', }}>
                <Box sx={{ width: '70%', }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Current Subscription
                    </Typography>
                    <Typography sx={{ lineHeight: '1.8' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Typography>

                    <Box>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', my: 1 }}>
                            Subscription
                        </Typography>
                        <Typography sx={{ lineHeight: '1.8' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                    </Box>


                    <Box sx={{ border: '1px solid #E1E1E6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', borderRadius: '5px' ,mt:2}}>
                        <Typography sx={{ color: '#2B817B', fontWeight: 'bold' }}>
                            Report a missing ?
                        </Typography>
                        <Typography>
                            <BsChevronRight style={{ margin: '0px 10px', color: '#2B817B' }} />
                        </Typography>

                    </Box>




                </Box>



                <Box sx={{ width: '30%', padding: '10px', borderRadius: '10px' }}>
                    <Box sx={{ border: '1px solid #E1E1E6', textAlign: 'center', p: 5, }}>
                        <Typography sx={{color:'#1A1824',fontWeight:'bold'}}>
                            Can we help with anything else ?
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                            <Typography sx={{ border: '1px solid #E1E1E6', padding: '10px 15px', width: '30%', color: '#2B817B', fontWeight: 'bold', borderRadius: '5px' }}>
                                No
                            </Typography>
                            <Typography sx={{ border: '1px solid #E1E1E6', padding: '10px 15px', width: '30%', color: '#2B817B', fontWeight: 'bold', borderRadius: '5px' }}>
                                Yes
                            </Typography>

                        </Box>
                    </Box>
                </Box>

            </Box>


        </Box>
    )
}

export default Order
