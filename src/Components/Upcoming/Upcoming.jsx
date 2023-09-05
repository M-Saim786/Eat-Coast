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
import './Upcoming.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import SelectDishes from './SelectDishes';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import dishImg from '../../Assests/dish.png'
import OnDelivery from '../OnDelivery/OnDelivery';
import { TopNav } from '../Order/Orders';

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
// function Upcoming() {

//     const [Delivery, setDelivery] = useState(false)
//     const [Upcoming, setUpcoming] = useState(true)
//     const Navigate = useNavigate()

//     const handleShowUpcoming = () => {
//         setDelivery(false)
//         setUpcoming(true)
//     }
//     const handleShowDelivery = () => {
//         setDelivery(true)
//         setUpcoming(false)
//     }
//     return (
//         <Box className='container' sx={{
//             height: '100vh',
//             width: '94%',
//             // border: '1px solid red'
//         }}>
//             <Box className='topNav' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'white' }}>
//                 <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', cursor: 'pointer' }} className='upcomingNav'>
//                     <ListItem sx={{ fontWeight: 'bold', color: '#9EA3AE' }}>Reuqest</ListItem>
//                     <ListItem sx={{ fontWeight: 'bold', color: '#1A1824', borderBottom: '2px solid #2B817B' }} onClick={() => Navigate('/orders/')}>Upcoming</ListItem>
//                     <ListItem sx={{ fontWeight: 'bold', color: '#9EA3AE' }}>Prepare</ListItem>
//                     <ListItem sx={{ fontWeight: 'bold', color: '#9EA3AE' }}>Pack</ListItem>
//                     <ListItem sx={{ fontWeight: 'bold', color: '#9EA3AE' }} onClick={() => Navigate('/orders/onDelivery')}>On Delivery</ListItem>
//                 </List>
//                 <Typography sx={{ fontWeight: 'bold', color: '#9EA3AE', mr: 3, mb: 1 }} >
//                     Order History
//                 </Typography>
//             </Box>


//             <Routes>
//                 <Route path='/orders/' element={<UpcomingFunc />} />
//                 <Route path='/orders/onDelivery' element={<OnDelivery />} />

//             </Routes>

//             {Delivery && <OnDelivery />}
//             {Upcoming && <UpcomingFunc />}

//         </Box >
//     )
// }

// export default Upcoming



export default function Upcoming() {

    const [Dishes, setDishes] = useState(false)
    const [CountDishes, setCountDishes] = useState(0)
    const [CountSalad, setCountSalad] = useState(2)
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <TopNav />
            <Box sx={{
                height: '89vh', overflowY: 'scroll',
                border: '1px solid blue',
                width: '94%'
            }} className='container'>
                {Dishes === false ?
                    <>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                <Typography sx={{ color: '#E1E1E6', fontWeight: 'bold' }}>
                                    Today:
                                </Typography>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        // inputProps={{ 'aria-label': 'Without label' }}
                                        sx={{ height: '5vh', fontWeight: 'bold' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Mon, 09 Sept, 2021</MenuItem>
                                        <MenuItem value={20}>Tue, 10 Sept, 2021</MenuItem>
                                        <MenuItem value={30}>Wed, 11 Sept, 2021</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <Typography sx={{ color: '#9EA3AE', mr: 3 }}>
                                    ( 4 Menu )
                                </Typography>
                            </Box>
                        </Box>

                        <List sx={{ display: 'flex' }} className='timerUl'>
                            <ListItem>
                                <TimerOutlinedIcon />  10.00 Am - 01.00 Pm
                            </ListItem>
                            <ListItem>
                                <TimerOutlinedIcon />  04.00 Pm - 06.00 Pm
                            </ListItem>
                            <ListItem>
                                <TimerOutlinedIcon /> Event Catering
                            </ListItem>
                        </List>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', height: 'auto', pb: 10 }}>
                            {
                                data.map((v, i) => {
                                    return (
                                        <>
                                            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '5px', width: '45%', p: 2, margin: '10px auto' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                                        <Checkbox {...label} />
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>
                                                            {v.plan}
                                                        </Typography>
                                                    </Box>

                                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                        25 Orders
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', color: '#9EA3AE', fontWeight: 'bold', fontSize: '14px' }}>
                                                        <TimerOutlinedIcon style={{ marginRight: 4 }} />   Time:
                                                    </Typography>
                                                    <Typography sx={{ border: '1px solid #D5E6E5', color: '#545359', borderRadius: '5px', padding: '5px' }}>
                                                        {v.time}
                                                    </Typography>
                                                </Box>
                                                <hr style={{ border: '1px solid #E1E1E6' }} />
                                                <Box sx={{ my: 2 }}>

                                                    {CountDishes >= 1 ?
                                                        <>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
                                                                <Box sx={{ display: 'flex', fontSize: '20px' }}>
                                                                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                                                                        25/25
                                                                    </Typography>
                                                                    <Typography sx={{ color: '#9EA3AE' }}>
                                                                        Main Course
                                                                    </Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography sx={{ color: '#42C677' }}>
                                                                        <CheckCircleIcon style={{ fontSize: '18px' }} />
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '5px', p: 1, display: 'flex', justifyContent: 'space-between' }}>
                                                                <List sx={{ width: '-webkit-fill-available' }}>
                                                                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            Kabasa
                                                                        </Typography>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            21 Servings
                                                                        </Typography>
                                                                    </ListItem>
                                                                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            Maqluoba
                                                                        </Typography>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            3 Servings
                                                                        </Typography>
                                                                    </ListItem>
                                                                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            Kibbeh
                                                                        </Typography>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            1 Servings
                                                                        </Typography>
                                                                    </ListItem>
                                                                </List>
                                                            </Box>
                                                        </> :
                                                        <>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>

                                                                <Box sx={{ display: 'flex', fontSize: '20px', mb: 1 }}>


                                                                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                                                                        0/25
                                                                    </Typography>
                                                                    <Typography sx={{ color: '#9EA3AE' }}>
                                                                        Main Course
                                                                    </Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography sx={{ color: '#E75C62' }}>
                                                                        <CancelIcon style={{ fontSize: '18px' }} />
                                                                    </Typography>
                                                                </Box>

                                                            </Box>
                                                            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '5px', p: 2, display: 'flex', justifyContent: 'space-between' }}>
                                                                <Typography sx={{ color: '#E75C62', fontWeight: 'bold' }}>
                                                                    some dishes have'nt selected
                                                                </Typography>
                                                                <Typography sx={{ color: '#2B817B', textDecoration: 'underline' }}
                                                                    onClick={() => setDishes(true)}
                                                                >
                                                                    Select the dishes
                                                                </Typography>
                                                            </Box>
                                                        </>
                                                    }



                                                    {CountSalad >= 1 ?
                                                        <>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 0.5, mt: 2 }}>
                                                                <Box sx={{ display: 'flex', fontSize: '20px' }}>


                                                                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                                                                        0/25
                                                                    </Typography>
                                                                    <Typography sx={{ color: '#9EA3AE' }}>
                                                                        Salad dishes
                                                                    </Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography sx={{ color: '#42C677' }}>
                                                                        <CheckCircleIcon style={{ fontSize: '18px' }} />
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '5px', p: 1, display: 'flex', justifyContent: 'space-between' }}>
                                                                <List sx={{ width: '-webkit-fill-available' }}>
                                                                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            Tabbouleh Salad
                                                                        </Typography>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            21 Servings
                                                                        </Typography>
                                                                    </ListItem>
                                                                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            Tabbouleh Salad
                                                                        </Typography>
                                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                                            4 Servings
                                                                        </Typography>
                                                                    </ListItem>

                                                                </List>
                                                            </Box>


                                                        </> :
                                                        <>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 0.5, mt: 2 }}>

                                                                <Box sx={{ display: 'flex', fontSize: '20px' }}>


                                                                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                                                                        0/25
                                                                    </Typography>
                                                                    <Typography sx={{ color: '#9EA3AE' }}>
                                                                        Salad dishes
                                                                    </Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography sx={{ color: '#E75C62' }}>
                                                                        <CancelIcon style={{ fontSize: '18px' }} />
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                            <Box sx={{ border: '1px solid #E1E1E6', borderRadius: '5px', p: 2, display: 'flex', justifyContent: 'space-between' }}>
                                                                <Typography sx={{ color: '#E75C62', fontWeight: 'bold' }}>
                                                                    some dishes have'nt selected
                                                                </Typography>
                                                                <Typography sx={{ color: '#2B817B', textDecoration: 'underline' }} onClick={() => setDishes(true)}>
                                                                    Select the dishes
                                                                </Typography>
                                                            </Box>

                                                        </>
                                                    }
                                                    {/* </Box> */}


                                                </Box>
                                            </Box>
                                        </>
                                    )
                                })
                            }
                        </Box >
                        {/* Bottom  */}
                        <Box sx={{ height: '10vh', backgroundColor: 'white', bottom: 0, width: '94%', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed' }}>
                            <Box>
                                <Typography SX={{ color: '#9EA3AE' }}>
                                    Dishes :
                                </Typography>
                                <Box sx={{ color: '#9EA3AE', border: '1px solid #E1E1E6', borderRadius: '5px', padding: '5px 10px' }}>
                                    <Typography>
                                        0 Dishes Selected
                                    </Typography>
                                </Box>


                            </Box>
                            <Box sx={{ width: '45%', border: '2px solid #2B817B', backgroundColor: '#80B3B0', display: 'flex', height: '6vh', alignItems: 'center', borderRadius: '5px', mr: 5 }}>
                                <Typography sx={{ height: '3vh', padding: '10px', borderRadius: '5px', backgroundColor: '#2B817B', display: 'flex', alignItems: 'center', color: 'white', fontSize: '20px' }}>
                                    <KeyboardArrowRightIcon />

                                </Typography>
                                <Typography sx={{ margin: '0px auto', color: 'white', fontWeight: 'bold' }}>
                                    On Process
                                </Typography>
                            </Box>
                        </Box>
                    </>
                    : <>
                        <Box sx={{
                            // border: '1px solid red',
                            width: '100%'
                        }}>
                            <Box sx={{
                                // border: '1px solid red',
                                position: 'relative', display: 'flex', justifyContent: 'left'
                            }}>
                                <Box sx={{ mt: '20px', ml: '20px', color: '#E75C62' }}>
                                    <Typography>
                                        <CloseIcon onClick={() => setDishes(false)} />
                                    </Typography>
                                </Box>
                                <Box sx={{ margin: '10px auto', left: '50%', right: '50%' }}>
                                    <Typography sx={{ color: '#1A1824', fontSize: '20px', fontWeight: 'bold' }}>
                                        Main Course
                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                    <Typography sx={{ color: '#E1E1E6', fontWeight: 'bold' }}>
                                        Today:
                                    </Typography>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            // inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ height: '5vh', fontWeight: 'bold' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Mon, 09 Sept, 2021</MenuItem>
                                            <MenuItem value={20}>Tue, 10 Sept, 2021</MenuItem>
                                            <MenuItem value={30}>Wed, 11 Sept, 2021</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#9EA3AE', mr: 3 }}>
                                        ( 4 Menu )
                                    </Typography>
                                </Box>
                            </Box>


                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                {
                                    MenuDishes.map((dish, index) => {
                                        return (
                                            <>
                                                <Box sx={{ border: '1px solid #E1E1E6', width: '28%', m: 2, borderRadius: '5px', p: 1 }}>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <img src={dishImg} alt="" />
                                                        <Box sx={{ mx: 2 }}>
                                                            <Typography sx={{ color: '#1A1824', fontWeight: 'bold' }}>
                                                                {dish.dishName}
                                                            </Typography>
                                                            <Typography sx={{ color: '#42C677', fontWeight: 'bold', mt: 2 }}>
                                                                See Detials
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                                            <Typography sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>

                                                                <RemoveIcon style={{ border: '1px solid #30A15F', borderRadius: '50%', p: 2, color: '#30A15F' }} />
                                                            </Typography>

                                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                                21
                                                            </Typography>
                                                            <Typography sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>

                                                                <AddIcon style={{ color: '#2B817B', border: '1px solid #30A15F', borderRadius: '50%', p: 2, }} />
                                                            </Typography>


                                                        </Box>
                                                    </Box>

                                                    <Box sx={{ padding: '5px', my: 2 }}>
                                                        <Box sx={{ color: '#9EA3AE', display: 'flex' }}>
                                                            <Typography>
                                                                <CalendarMonthRoundedIcon />
                                                            </Typography>
                                                            <Typography>
                                                                Schedule cook
                                                            </Typography>
                                                        </Box>


                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <Box sx={{ border: '1px solid #E1E1E6', width: '20%', }}></Box>
                                                            <Typography sx={{ mx: 1 }}>
                                                                {dish.month}
                                                            </Typography>
                                                            <Box sx={{ border: '1px solid #E1E1E6', width: '20%', }}></Box>
                                                        </Box>

                                                        <Box sx={{ display: 'flex', mt: 2 }}>
                                                            {dish.dates.map((date, i) => {
                                                                return (
                                                                    <>
                                                                        <Typography sx={{ border: '1px solid #E1E1E6', px: 1.5, py: 1, color: '#545359', fontWeight: 'bold', borderRadius: '5px', mx: 1 }}>
                                                                            {date}
                                                                        </Typography>
                                                                    </>
                                                                )
                                                            })}
                                                        </Box>
                                                    </Box>


                                                    <Box>
                                                    </Box>
                                                </Box>
                                            </>
                                        )
                                    })
                                }
                            </Box>
                            <Box sx={{ height: '10vh', backgroundColor: 'white', bottom: 0, width: '94%', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed' }}>
                                <Box sx={{ display: 'flex', }}>
                                    <Typography sx={{ color: '#1A1824', fontWeight: 'bold', }}>
                                        25/25
                                    </Typography>
                                    <Typography sx={{ color: '#9EA3AE', fontWeight: 'bold', ml: 1 }}>
                                        Servings
                                    </Typography>
                                </Box>


                                <Box sx={{ mr: 3 }}>
                                    <Button variant='outlined' sx={{ textTransform: 'capitalize', border: '1px solid #2B817B', color: '#2B817B', mx: 3 }}>
                                        Cancel
                                    </Button>
                                    <Button variant='contained' sx={{
                                        textTransform: 'capitalize', backgroundColor: '#2B817B', '&:hover': {
                                            backgroundColor: "#2B817B"
                                        }
                                    }}>
                                        Save
                                    </Button>
                                </Box>
                            </Box>

                        </Box>

                    </>}
            </Box>
        </>
    )
}