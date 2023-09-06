import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BsFillTelephoneFill, BsChevronLeft, BsFillSendFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
// import BsFillSendFill
import Driver from '../../Assests/driver.png'
import { useNavigate } from 'react-router-dom'
// import 
function Chat() {
    const Navigate = useNavigate()
    const [Date, setDate] = useState("06/09/2023")
    const [autoMessage, setautoMessage] = useState("I am on the way prepare food packages to be brought to make it easier for the driver")
    // const [MyMessage, setMyMessage] = useState()
    const myMessage = [
        {
            message: 'Hi',
        },
        {
            message: 'Where are You ',
        },
        {
            message: '..?',
        },
        {
            message: '..?',
        }, {
            message: '..?',
        }, {
            message: '..?',
        }, {
            message: '..?',
        },
    ]
    return (
        <>
            <Box className='container' sx={{ height: '100vh', backgroundColor: 'white', width: '94%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mx: 2, p: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }} onClick={() => Navigate('/orders/OnDelivery')}>
                            <BsChevronLeft />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', }}>
                            On Delivery
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box >
                                <img src={Driver} alt="" style={{ borderRadius: '50%', border: '1px solid #9EA3AE', padding: '4px' }} />
                            </Box>
                            <Box sx={{ mx: 2 }}>
                                <Typography sx={{ color: '#9EA3AE' }}>
                                    DEC - 12345
                                </Typography>
                                <Typography sx={{ color: '#1A1824', fontWeight: 'bold' }}>
                                    Philip Bodogeza
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ padding: '8px', borderRadius: '5px', color: '#2B817B', border: '1px solid #2B817B', mr: 3 }}>
                                <BsFillTelephoneFill />
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Box sx={{ display: 'block', margin: '10px auto', width: 'fit-content' }}>
                            <Typography sx={{ backgroundColor: '#E1E1E6', px: 3, borderRadius: '20px', color: '#9EA3AE' }}>
                                {Date}
                            </Typography>
                        </Box>

                        <Box sx={{ p: 2 }}>
                            <Box sx={{ height: '60vh', overflowY: 'scroll', }}>
                                <Box sx={{ p: 1, backgroundColor: '#E1E1E6', width: '30%', borderRadius: '5px', my: 1 }}>
                                    <Typography sx={{ color: '#1A1824', fontWeight: 'bold', }}>
                                        {autoMessage}
                                    </Typography>
                                    <Typography sx={{ color: '#9EA3AE' }}>
                                        this is an automatic message
                                    </Typography>
                                </Box>

                                <Box sx={{ textAlign: 'right' }}>
                                    {
                                        myMessage.map((message, index) => {
                                            return (
                                                <>
                                                    <Box sx={{ display: 'flex', justifyContent: 'right', width: '30%', marginLeft: 'auto' }}>

                                                        <Box sx={{ backgroundColor: '#2B817B', fontWeight: 'bold', my: 1, borderRadius: '5px', color: 'white', p: 1, width: 'fit-content', display: 'flex', justifyContent: 'right', mr: 1 }}>
                                                            <Typography>
                                                                {message.message}
                                                            </Typography>
                                                        </Box>
                                                    </Box >

                                                </>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex', alignItems: 'center', padding: '10px 20px', justifyContent: 'center',

                            position: 'fixed', bottom: '0', width: '94%'
                        }}>
                            <Box>
                                <Typography sx={{ color: '#2B817B', mx: 2 }}>
                                    <AiOutlinePlus />
                                </Typography>
                            </Box>
                            <Box sx={{ width: '75%', }}>
                                <input type="text" name="" id="" style={{ padding: '10px', outline: 'none', border: 'none', backgroundColor: '#F6F6F6', mx: 1, width: '90%' }} placeholder='Type some message' />
                            </Box>
                            <Box>
                                <Button variant="contained" endIcon={<BsFillSendFill />} sx={{
                                    textTransform: 'capitalize', backgroundColor: '#2B817B', '&:hover': {
                                        backgroundColor: '#2B817B'
                                    }
                                }}>
                                    Send
                                </Button>
                            </Box>
                        </Box>


                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default Chat
