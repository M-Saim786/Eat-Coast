import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import OnDeliveryImg from '../../Assests/OnDelivery.png'
import { CgSandClock } from 'react-icons/cg'
import { FaTruckMoving } from 'react-icons/fa'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Driver from '../../Assests/driver.png'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFillChatSquareTextFill } from 'react-icons/bs'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { TbCurrentLocation } from 'react-icons/tb'

import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'


const data = [
    {
        address: 'ECS - 12345',
        orderType: 'Single Order',
        orderName: 'Salmon with chili sauce',
        details:
        {
            time: '10.00 am - 01.00 pm',
            date: 'Thursday, Sept 02, 2021',
            dish: 'Kabasa',
            total: '$ 10.00'
        }
    },
    {
        address: 'ECS - 12345',
        orderType: 'Personal subscription',
        orderName: 'Salmon with chili sauce',
        details:
        {
            time: '10.00 am - 01.00 pm',
            date: 'Thursday, Sept 02, 2021',
            dish: 'Kabasa',
            total: '$ 10.00'
        }
    }

]



function OnDelivery() {
    const Navigate = useNavigate()
    const [onWay, setonWay] = useState(true)
    const [InQueue, setInQueue] = useState(false)
    const [InDelivery, setInDelivery] = useState(false)
    const [Complete, setComplete] = useState(false)
    const handleQueue = () => {
        setInQueue(true)
        setInDelivery(false)
        setComplete(false)
    }
    const handleInDelivery = () => {
        setInQueue(false)
        setInDelivery(true)
        setComplete(false)
    }
    const handleComplete = () => {
        setInQueue(false)
        setInDelivery(false)
        setComplete(true)
    }
    const handleClose = () => {
        setInQueue(false)
        setComplete(false)
        setInDelivery(false)
    }
    const seeAllOrders = () => {
        setInDelivery(true)
        setInQueue(true)
        setComplete(true)
    }


    return (
        <>
            <Box className='container' >
                <Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', m: 2, mb: 1 }}>
                        On Delivery
                    </Typography>
                </Box>



                {
                    onWay === false ? <>
                        <Box sx={{ margin: '10px auto', border: '1px solid #E1E1E6', width: '40%', borderRadius: '20px', p: 2, textAlign: 'center' }}>
                            <Box>
                                <img src={OnDeliveryImg} alt="" />
                            </Box>
                            <Box sx={{ color: '#545359', my: 3, }}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Waiting for driver
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', my: 4, mt: 8, justifyContent: 'center' }}>
                                <Box sx={{ mx: 2, width: '12%' }}>
                                    <Typography sx={{ border: '1px solid #6A82CF', borderRadius: '50%', padding: '20px', color: '#6A82CF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CgSandClock />
                                    </Typography>
                                    <Typography sx={{ color: '#545359' }}>
                                        In Queue
                                    </Typography>
                                </Box>
                                <Box sx={{ mx: 2, width: '12%', }}>
                                    <Typography sx={{ border: '1px solid #FAA641', borderRadius: '50%', padding: '20px', color: '#FAA641', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <FaTruckMoving />
                                    </Typography>
                                    <Typography sx={{ color: '#545359' }}>
                                        Being
                                        Delivered
                                    </Typography>
                                </Box>
                                <Box sx={{ mx: 2, width: '12%' }}>
                                    <Typography sx={{ border: '1px solid #42C677', borderRadius: '50%', padding: '20px', color: '#42C677', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <BsFillCheckCircleFill />
                                    </Typography>
                                    <Typography sx={{ color: '#545359' }}>Complete</Typography>

                                </Box>
                            </Box>
                        </Box>
                    </> : <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ p: 2, width: '35%' }}>
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
                                <Box sx={{ display: 'flex', border: '1px solid #D5E6E5', p: 1, borderRadius: '5px', my: 2 }}>
                                    <Button sx={{
                                        backgroundColor: '#2B817B', "&:hover": {
                                            backgroundColor: '#2B817B'
                                        }, color: 'white', textTransform: 'capitalize',
                                        width: '50%'
                                    }}>
                                        <BsFillTelephoneFill style={{ marginRight: '10px' }} />
                                        Call
                                    </Button>
                                    <Button sx={{
                                        backgroundColor: '#2B817B', "&:hover": {
                                            backgroundColor: '#2B817B'
                                        }, color: 'white', textTransform: 'capitalize',
                                        width: '50%', mx: 1
                                    }} onClick={() => Navigate('/orders/chats')}>
                                        <BsFillChatSquareTextFill style={{ marginRight: '10px' }} />
                                        Chat
                                    </Button>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography sx={{ color: '#9EA3AE', fontSize: '12px' }}>
                                            Verification code :
                                        </Typography>
                                        <Typography sx={{ color: '#1A1824', fontWeight: 'bold' }}>
                                            D - 267045
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: '#9EA3AE', fontSize: '12px' }}>
                                            Total order :
                                        </Typography>
                                        <Typography sx={{ color: '#1A1824', fontWeight: 'bold' }}>
                                            30 Order
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#9EA3AE', width: '40%', fontSize: '14px', my: 3 }}>
                                        *Provide the verification code to the courier
                                    </Typography>
                                </Box>
                                <Box sx={{}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                        <Typography sx={{ color: '#9EA3AE', fontSize: '14px' }}>
                                            <CalendarMonthRoundedIcon />    Date
                                        </Typography>
                                        <Typography sx={{ padding: '5px 10px', border: '1px solid #9EA3AE', borderRadius: '5px' }}>
                                            Thursday, 9 Dec, 2021
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                        <Typography sx={{ color: '#9EA3AE', fontSize: '14px' }}>
                                            <TimerOutlinedIcon />      Time
                                        </Typography>
                                        <Typography sx={{ padding: '5px 10px', border: '1px solid #9EA3AE', borderRadius: '5px' }}>
                                            03.00 Pm - 07.00 Pm
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '1rem', px: 3, py: 1.5, textAlign: 'center', mt: -3, mr: 2 }}>
                                <Box>
                                    <img src={OnDeliveryImg} alt="" style={{ width: '65%' }} />
                                </Box>
                                <Box sx={{ color: '#545359', my: 2, px: 8 }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>
                                        The driver is on the way to your place
                                    </Typography>
                                </Box>

                                <Box sx={{ width: '50%', margin: '10px auto', border: '1px solid #E1E1E6', p: 1, borderRadius: '5px' }}>
                                    <Typography sx={{ color: '#9EA3AE', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                        <TbCurrentLocation style={{ marginRight: '10px' }} />
                                        Estimated arrival in
                                    </Typography>
                                    <hr color='#E1E1E6' />
                                    <Typography sx={{ fontWeight: 'bold' }}>
                                        23 Min
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', my: 4, justifyContent: 'center' }}>
                                    <Box sx={{ mx: 2 }}>
                                        <Typography sx={{ border: '1px solid #6A82CF', borderRadius: '50%', padding: '20px', color: '#6A82CF', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '36%', }} onClick={handleQueue}>
                                            <CgSandClock />
                                        </Typography>
                                        <Typography sx={{ color: '#545359' }}>
                                            In Queue
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mx: 2, width: '20%', textAlign: 'center' }}>
                                        <Typography sx={{ border: '1px solid #FAA641', borderRadius: '50%', padding: '20px', color: '#FAA641', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '37%' }} onClick={handleInDelivery} >
                                            <FaTruckMoving />
                                        </Typography>
                                        <Typography sx={{ color: '#545359', }}>
                                            Being
                                            Delivered
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mx: 2 }}>
                                        <Typography sx={{ border: '1px solid #42C677', borderRadius: '50%', padding: '20px', color: '#42C677', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '37%' }} onClick={handleComplete}>
                                            <BsFillCheckCircleFill />
                                        </Typography>
                                        <Typography sx={{ color: '#545359', }}>Complete</Typography>

                                    </Box>
                                </Box>
                                <Button sx={{ border: '1px solid #80B3B0', color: '#2B817B', textTransform: 'capitalize', fontWeight: 'bold', px: 16 }} onClick={seeAllOrders}>
                                    See all order
                                </Button>
                            </Box>

                            <Box sx={{ width: '28%', border: '1px solid #E1E1E6', borderRadius: '10px', display: `${InQueue || Complete || InDelivery === true ? 'block' : 'none'}`, transition: 'all 1s ease' }}>
                                <Box sx={{ position: 'relative', p: 4, ml: 1, height: 'auto', }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
                                        <Typography sx={{ color: '#E75C62' }}>
                                            <CloseIcon onClick={handleClose} />
                                        </Typography>
                                        {
                                            InQueue === true && InDelivery === true && Complete === true ?
                                                <Typography sx={{ fontWeight: 'bold', margin: '0px auto' }}>
                                                    See All Orders
                                                </Typography> :
                                                <>

                                                    {InQueue &&
                                                        <Typography sx={{ fontWeight: 'bold', margin: '0px auto' }}>
                                                            InQueue
                                                        </Typography>
                                                    }
                                                    {
                                                        InDelivery &&
                                                        <Typography sx={{ fontWeight: 'bold', margin: '0px auto' }}>
                                                            Being Delivered
                                                        </Typography>
                                                    }
                                                    {
                                                        Complete &&
                                                        <Typography sx={{ fontWeight: 'bold', margin: '0px auto' }}>
                                                            Completed
                                                        </Typography>
                                                    }
                                                </>
                                        }
                                    </Box>
                                    <Box sx={{ height: '60vh', width: '110%', overflowY: 'scroll', ml: -1, p: 0.5 }}>
                                        {InQueue && <InQueuee />}
                                        {InDelivery && <InnDelivery />}
                                        {Complete && <Completed />}
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', border: '1px solid #E1E1E6', p: 2, mt: 3, mb: 0 }}>
                                    <Typography sx={{ color: '#9EA3AE' }}>
                                        Waiting:
                                    </Typography>
                                    <Typography sx={{ color: '#1A1824', fontWeight: 'bold' }}>
                                        4 Order
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </>
                }


            </Box>
        </>
    )
}

export default OnDelivery


export function InQueuee() {


    const [Details, setDetails] = useState(false)
    const seeDetails = () => {
        setDetails(true)
    }
    return (
        <>
            {
                data.map((order, index) => {
                    return (
                        <>
                            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '5px', my: 1, p: 1, px: 3, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <Box>
                                        <Typography sx={{ border: '1px solid #6A82CF', borderRadius: '50%', padding: '10px', color: '#6A82CF', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                            <CgSandClock />
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ padding: '4px 10px', fontSize: '14px', backgroundColor: `${order.orderType === 'Single Order' ? '#7ECC49' : '#7B49E5'}`, borderRadius: '5px', color: 'white', }}>
                                            {order.orderType}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ my: 2 }}>
                                    <Typography sx={{ color: '#1A1824', fontWeight: 'bold' }}>
                                        {order.address}
                                    </Typography>
                                    <Typography sx={{ color: '#9EA3AE', fontSize: '14px' }}>
                                        {order.orderName}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#2B817B', textAlign: 'center', textDecoration: 'underline', fontSize: '14px', px: 4, my: 2 }} onclick={seeDetails}>
                                        Detail
                                    </Typography>
                                </Box>
                            </Box>
                        </>
                    )
                })
            }
        </>
    )
}


export function InnDelivery() {
    return (
        <>
            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '5px', my: 1, p: 1, px: 3, }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Box>
                        <Typography sx={{ border: '1px solid #FAA641', borderRadius: '50%', padding: '10px', color: '#FAA641', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <FaTruckMoving />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ padding: '5px 10px', backgroundColor: '#7ECC49', borderRadius: '5px', color: 'white', fontSize: '14px', }}>
                            Single order
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ my: 2 }}>
                    <Typography sx={{ color: '#1A1824', fontWeight: 'bold' }}>
                        ECS - 12345
                    </Typography>
                    <Typography sx={{ color: '#9EA3AE', fontSize: '14px' }}>
                        Salmon with sweet chili
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ color: '#2B817B', textAlign: 'center', textDecoration: 'underline', fontSize: '14px', px: 4, my: 2 }}>
                        Detail
                    </Typography>
                </Box>
            </Box>


        </>
    )
}

export function Completed() {
    return (
        <>
            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '5px', my: 1, p: 1, px: 3, }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Box>
                        <Typography sx={{ border: '1px solid #42C677', borderRadius: '50%', padding: '10px', color: '#42C677', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <BsFillCheckCircleFill />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ padding: '5px 10px', backgroundColor: '#7ECC49', borderRadius: '5px', color: 'white', fontSize: '14px', }}>
                            Single order
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ my: 2 }}>
                    <Typography sx={{ color: '#1A1824', fontWeight: 'bold' }}>
                        ECS - 12345
                    </Typography>
                    <Typography sx={{ color: '#9EA3AE', fontSize: '14px' }}>
                        Salmon with sweet chili
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ color: '#2B817B', textAlign: 'center', textDecoration: 'underline', fontSize: '14px', px: 4, my: 2 }}>
                        Detail
                    </Typography>
                </Box>
            </Box>

        </>
    )
}


export function OrderDetails() {
    return (
        <>

        </>
    )
}