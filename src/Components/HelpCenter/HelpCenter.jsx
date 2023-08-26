import { Box, TextField, Typography, Button, Grid, List, ListItem, } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci';
import { LuLayoutDashboard } from 'react-icons/lu'
import { PiCubeLight, PiBookOpenTextBold } from 'react-icons/pi'
// import { } from 'react-icons/pi'
import HelpCenterImg from '../../Assests/HelpCenter.png';
function HelpCenter() {
    const Navigate  = useNavigate()
    return (
        <Box className='container'>
            <Box className="heading" sx={{ mt: 1 }}>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to='/settings' style={{ display: 'flex', fontSize: '18px', color: '#2B817B', marginLeft: '20px', alignItems: 'center', fontWeight: 'bold' }}>
                        <BsChevronLeft style={{ marginRight: '10px' }} />
                        Back
                    </Link>
                </Typography>
                <h2 style={{
                    // border: '1px solid red',
                    margin: '0px auto',
                    fontWeight: 'bold',
                    fontSize: '20px'
                }}>
                    Help Center
                </h2>

            </Box>

            <Box sx={{ width: '93%', height: '30vh', textAlign: 'center', margin: '0 auto', position: 'relative' }}>
                <img src={HelpCenterImg} alt="" style={{ width: '100%', height: 'inherit' }} />
                <Box sx={{ margin: '-5rem auto' }}>
                    <input type="text" className='input' placeholder='Search' style={{ width: '476px' }} />
                    <CiSearch size={'20px'} style={{ position: 'relative', right: '30px' }} />
                </Box>
            </Box>



            <Box sx={{ mt: -2 }}>

                <Box sx={{ height: 'auto', width: 'fit-content', margin: '0px auto', mt: 1, }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                        Popular questions
                    </Typography>

                    <Box className='popularQuestion'>
                        <Typography>
                            How do I receive an order?
                        </Typography>
                        <Typography >
                            How to change the location my location ?
                        </Typography>
                        <Typography >
                            How do I receive an order?
                        </Typography>
                    </Box>
                    <Box className='popularQuestion'>
                        <Typography>
                            how to add employees ?
                        </Typography>
                        <Typography >
                            How do I add a food menu?
                        </Typography>
                        <Typography >
                            bagaimana cara menghapus menu makanan?
                        </Typography>
                    </Box>

                    {/* </Box> */}
                </Box>

                <Box sx={{ width: 'fit-content' }}>
                    <Typography sx={{ fontWeight: 'bold', width: 'fit-content', ml: 25, my: 1 }}>
                        Help  by Category
                    </Typography>
                    <Box sx={{
                        display: 'flex', flexDirection: 'row', width: '60%', margin: '0px auto'
                    }}>

                        <Box sx={{ border: '1px solid #E1E1E6', width: '26%', p: 2, borderRadius: '5px', ml: 2 }}>
                            <LuLayoutDashboard style={{ padding: '6px', borderRadius: '5px', border: '1px solid #E1E1E6', color: '#2B817B' }} />
                            <Typography sx={{ color: '#1A1824', fontWeight: 'bold', marginBottom: '5px' }}>
                                Dashboard
                            </Typography>
                            <Typography sx={{ color: '#2B817B', fontWeight: 'bold', fontSize: '14px' }}>
                                About dashboard Change the displayed data Detail function
                            </Typography>
                        </Box>
                        <Box sx={{ border: '1px solid #E1E1E6', width: '26%', p: 2, borderRadius: '5px', ml: 2 }} onClick={()=>Navigate('/OrderHelp')}>
                            <PiCubeLight style={{ padding: '6px', borderRadius: '5px', border: '1px solid #E1E1E6', color: '#2B817B' }} />
                            <Typography sx={{ color: '#1A1824', fontWeight: 'bold', marginBottom: '5px' }}>
                                Order
                            </Typography>
                            <Typography sx={{ color: '#2B817B', fontWeight: 'bold', fontSize: '14px' }}>
                                Accept subscription Prepare dishes Send to driver
                            </Typography>
                        </Box>
                        <Box sx={{ border: '1px solid #E1E1E6', width: '26%', p: 2, borderRadius: '5px', ml: 2 }}>
                            <PiBookOpenTextBold style={{ padding: '6px', borderRadius: '5px', border: '1px solid #E1E1E6', color: '#2B817B' }} />
                            <Typography sx={{ color: '#1A1824', fontWeight: 'bold', marginBottom: '5px' }}>
                                Subscription
                            </Typography>
                            <Typography sx={{ color: '#2B817B', fontWeight: 'bold', fontSize: '14px' }}>
                                Last subscription Current subscription  Subscription order
                            </Typography>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default HelpCenter
