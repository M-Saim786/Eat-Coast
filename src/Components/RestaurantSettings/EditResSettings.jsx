import { Box, FormControl, Input, InputLabel, TextField, Typography, Select, MenuItem, OutlinedInput, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
import { RiUserAddLine } from 'react-icons/ri'
import { FiChevronRight } from 'react-icons/fi'
import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';

function ResSettings() {

    return (
        <Box className='container'>
            <Box className='top'>
                <Box className="heading">
                    <Typography sx={{ alignItems: 'center' }}>
                        <Link to='/restaurantSettings' style={{ display: 'flex', fontSize: '18px', color: '#2B817B', marginLeft: '20px', alignItems: 'center', fontWeight: 'bold' }}>
                            <BsChevronLeft style={{ marginRight: '10px' }} />
                            Back
                        </Link>
                    </Typography>
                    <h2 style={{
                        // border: '1px solid red',
                        margin: '0px auto',
                        fontWeight: 'bold',
                    }}>
                        Change Location
                    </h2>
                </Box>

            </Box>

            <Box sx={{
                // border: '1px solid red',
                display: 'flex', color: '#9EA3AE', mt: 2
            }}>
                <Typography sx={{ padding: '5px 10px', fontWeight: 'bold', mr: 3 }}>
                    <Link style={{ color: '#9EA3AE', }}>
                        Profile Setting :
                    </Link>
                </Typography>
                <Typography sx={{ padding: '5px 10px', borderBottom: '2px solid #2B817B', fontWeight: 'bold', mr: 3, color: '#1A1824' }}>
                    Restaurant Setting :
                </Typography>
            </Box>
            <Box sx=
                {{
                    margin: '2rem auto',
                    // border: '1px solid red',
                    width: '60%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    // alignItems:'center'
                }}>
                <Box sx={{ width: '25%', p: 2, fontWeight: 'bold' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Profile Picture
                    </Typography>
                    <InputLabel htmlFor='label' sx={{ padding: '20px', backgroundColor: '#F6F6F6', width: '30%', textAlign: 'center', fontSize: '2rem', my: 2 }}>
                        <RiUserAddLine />
                    </InputLabel>
                    <Input
                        type='file'
                        id='label' sx={{ display: 'none' }}
                    />
                    <Button sx={{ color: '#2B817B', textTransform: 'capitalize', fontWeight: 'bold' }}>
                        + Change Photo
                    </Button>
                    <Typography sx={{ color: '#9EA3AE' }}>
                        *uploaded photos are 1 : 1 in size and a maximum of 2 mb
                    </Typography>
                </Box>

                <Box sx={{ width: 'inherit' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between', color: '#9EA3AE',

                    }}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            ID : 192-120-102
                        </Typography>
                        <Button sx={{
                            background: '#2B817B', color: 'white', '&:hover': {
                                background: '#2B817B'
                            }
                        }} varaint='contained'>
                            Save
                        </Button>
                    </Box>
                    <Grid>
                        <Grid>

                            <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                                Restaurant Name
                            </InputLabel>
                            <input placeholder='Chef Juna Food' varaint='filled' className='input'  />
                        </Grid>
                        <Grid sx={{ position: 'relative', }}>
                            <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                                Address
                            </InputLabel>
                            <input placeholder='4474 Bridgeport Rd. Canada' varaint='filled' className='input'
                            />
                            <Link to='/editResAddress'>
                                <FiChevronRight size={'20px'} style={{
                                    // backgroundColor: '#F6F6F6',
                                    color: '#80B3B0',
                                    position: 'absolute',
                                    right: '9rem',
                                    top: '1.8rem',
                                    padding: '11px 14px',
                                    // border:s'1px solid red'
                                }} />
                            </Link>

                        </Grid>

                    </Grid>
                </Box>

            </Box>


        </Box>

    )
}

export default ResSettings
