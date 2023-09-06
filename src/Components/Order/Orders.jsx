import { Box, List, ListItem, Typography, Checkbox, Button } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import './Upcoming.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
// import SelectDishes from './SelectDishes';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import dishImg from '../../Assests/dish.png'
import OnDelivery from '../OnDelivery/OnDelivery';
import Upcoming from '../Upcoming/Upcoming';
// import './style.css'
const data = [
    {
        plan: 'Mazahr Lebanese Meal Plan',
        order: '25 Order',
        time: '04.00 am - 06.00 pm',
        dishes: 10
    },
    {
        plan: 'Mazahr Arabian Special',
        order: '25 Order',
        time: '10.00 am - 01.00 pm',
        dishes: 10

    },
    {
        plan: 'Mazahr Lebanese Vegan Meal Plan',
        order: '25 Order',
        time: '10.00 am - 01.00 pm',
        dishes: 10

    },
    {
        plan: 'Mazahr Catering',
        order: '25 Order',
        time: '04.00 am - 06.00 pm',
        dishes: 10

    },
]

const MenuDishes = [
    {
        dishName: 'Kabasa',
        month: 'December',
        dates: [28, 29, 30]
    },
    {
        dishName: 'Kabasa',
        month: 'December',
        dates: [28, 29, 30]
    }, {
        dishName: 'Maqluoba',
        month: 'December',
        dates: [30, 31]
    }, {
        dishName: 'Kibbeh',
        month: 'December',
        dates: [28, 29, 30]
    }, {
        dishName: 'Shawarma Plate',
        month: 'December',
        dates: [28, 29, 30]
    }, {
        dishName: 'Mandi',
        month: 'December',
        dates: [28, 29, 30]
    }, {
        dishName: 'Falafel Plate',
        month: 'December',
        dates: [28, 29, 30]
    },
]

function Orders() {

    const [Delivery, setDelivery] = useState(false)
    // const [Upcoming, setUpcoming] = useState(true)

    // const handleShowUpcoming = () => {
    //     setDelivery(false)
    //     setUpcoming(true)
    // }
    // const handleShowDelivery = () => {
    //     setDelivery(true)
    //     setUpcoming(false)
    // }
    return (
        <Box className='container' sx={{
            height: '100vh',
            width: '94%',
            border: '1px solid red'
        }}>
            {/* <TopNav /> */}
            {/* <Routes> */}
            {/* dfgggd */}
            {/* <Upcoming /> */}
            {/* {Delivery && <OnDelivery />}
            {Upcoming && <UpcomingFunc />} */}

        </Box >
    )
}


export default Orders




export function TopNav() {

    const Navigate = useNavigate()
    return (
        <>
            <Box className='topNav' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'white', }}>
                <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', cursor: 'pointer' }} className='upcomingNav'>
                    <ListItem sx={{ fontWeight: 'bold', color: '#9EA3AE' }} className='nav-button'  >Reuqest</ListItem>

                    <ListItem sx={{ fontWeight: 'bold', color: '#1A1824', }} onClick={() => Navigate('/orders/')} className='nav-button'  > Upcoming</ListItem>

                    <ListItem sx={{ fontWeight: 'bold', color: '#9EA3AE' }} className='nav-button' >Prepare</ListItem>

                    <ListItem sx={{ fontWeight: 'bold', color: '#9EA3AE' }} className='nav-button' >Pack</ListItem>
                    
                    <ListItem sx={{ fontWeight: 'bold', color: '#9EA3AE' }} onClick={() => Navigate('/orders/onDelivery')} className='nav-button' >On Delivery</ListItem>
                </List>
                <Typography sx={{ fontWeight: 'bold', color: '#9EA3AE', mr: 3, mb: 1 }} >
                    Order History
                </Typography>
            </Box>

        </>
    )
}