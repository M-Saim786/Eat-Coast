import React, { useEffect, useState } from 'react'
import './Style.css'
// import DashboardSidebar_icon from '@mui/Sidebar_icons-material/Dashboard';
import { Link } from 'react-router-dom';
import Logo from '../../Assests/Logo.png'
import Transaction from '../Transaction/Transaction';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Avatar from "@mui/material/Avatar";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CiLocationOn } from 'react-icons/ci'
import Profile from '../../Assests/profile.png'
import { BsChevronDown } from 'react-icons/bs'

function Sidebar() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [date, setdate] = useState('')

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [showBar, setshowBar] = useState(true)
    const hideSideBar = () => {

        setshowBar(false)
        if (showBar === false) {
            setshowBar(true)
        }
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };





    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className='SideBar'
        >
            <div className="logo" style={{ textAlign: 'center', marginTop: '20px' }}>
                <img src={Logo} alt="" />
            </div>
            <List>
                <ListItem>
                    <ListItemButton sx={{
                        padding: '20px', height: '5vh',
                        borderRadius: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        // border: '1px solid red',
                    }}>
                        <span class="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </ListItemButton>

                </ListItem>
                <ListItem >
                    <ListItemButton sx={{
                        padding: '20px', height: '5vh',
                        borderRadius: '10px',
                    }}>
                        <ListItemIcon>
                            <span className='material-symbols-outlined' >
                                dashboard
                            </span>
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        </ListItemIcon>
                        <ListItemText >
                        
                                <h4>
                                    Dashboard
                                </h4>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{
                        // padding: '20px', height: '5vh',
                        borderRadius: '10px',

                    }}>
                        <Link to='/orders' style={{ display: 'flex', alignItems: 'center', height: '5vh', width: '100%' }}>
                            <ListItemIcon>
                                <span class="material-symbols-outlined">
                                    deployed_code
                                </span>

                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>
                            <ListItemText >

                                <h4>
                                    Order
                                </h4>

                            </ListItemText>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{
                        padding: '20px', height: '5vh',
                        borderRadius: '10px',

                    }}>
                        <ListItemIcon>
                            <span className='material-symbols-outlined' >
                                content_paste
                            </span>
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        </ListItemIcon>
                        <ListItemText >
                            <Link>

                                <h4>
                                    Subscription
                                </h4>
                            </Link>

                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{
                        padding: '20px', height: '5vh',
                        borderRadius: '10px',

                    }}>
                        <ListItemIcon>
                            <span className='material-symbols-outlined' >
                                menu_book
                            </span>
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        </ListItemIcon>
                        <ListItemText >
                            <Link>

                                <h4>
                                    Menu
                                </h4>
                            </Link>

                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{ borderRadius: '10px' }} className='active' >
                        <Link to='/Transactions' style={{ display: 'flex', alignItems: 'center', height: '5vh', width: '100%' }}>
                            <ListItemIcon>
                                <span className='material-symbols-outlined' >
                                    receipt_long
                                </span>
                            </ListItemIcon>
                            <ListItemText>
                                <h4>
                                    Financials
                                </h4>
                            </ListItemText>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{
                        borderRadius: '10px',
                        // border: '1px solid red'
                    }} >
                        <Link to='/emloyees' style={{ display: 'flex', alignItems: 'center', height: '5vh', width: '100%' }}>
                            <ListItemIcon>
                                <span className='material-symbols-outlined' >
                                    groups
                                </span>
                            </ListItemIcon>
                            <ListItemText >
                                <h4>
                                    Emloyee
                                </h4>
                            </ListItemText>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{
                        padding: '20px', height: '5vh',
                        borderRadius: '10px',
                        // border: '1px solid red'
                    }} >
                        <Link to='/settings' style={{ display: 'flex', alignItems: 'center', height: '5vh', width: '100%' }}>
                            <ListItemIcon>
                                <span className='material-symbols-outlined' >
                                    settings
                                </span>
                            </ListItemIcon>
                            <ListItemText>
                                <h4>
                                    Setting
                                </h4>
                            </ListItemText>
                        </Link>
                    </ListItemButton>
                </ListItem>

            </List>

        </Box >
    );
    useEffect(() => {
        let date = new Date
        date = date.toString()
        console.log(date)
        setdate(date.slice(3, 15))

    }, [])


    return (
        <>
            <div className='expandMenu'>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <List className='expandMenuUl'>
                            <ListItem >
                                <img src={Logo} alt="" style={{ width: '75%' }} />
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={toggleDrawer(anchor, true)}>
                                    {/* <Button onClick={toggleDrawer(anchor, true)} > */}
                                    {/* <Button> */}
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                    {/* </Button> */}

                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    {/* <Button className='expandMenu'> */}
                                    <span className='material-symbols-outlined' >
                                        dashboard
                                    </span>
                                    {/* </Button> */}

                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    {/* <Button onClick={toggleDrawer(anchor, true)} className='expandMenu'> */}
                                    <span className='material-symbols-outlined' >
                                        deployed_code
                                    </span>
                                    {/* </Button> */}

                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    {/* <Button onClick={toggleDrawer(anchor, true)} className='expandMenu'> */}
                                    <span className='material-symbols-outlined' >
                                        content_paste
                                    </span>
                                    {/* </Button> */}

                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton>
                                    {/* <Button onClick={toggleDrawer(anchor, true)} className='expandMenu'> */}
                                    <span className='material-symbols-outlined' >
                                        menu_book
                                    </span>
                                    {/* </Button> */}

                                </ListItemButton>
                            </ListItem>
                            <ListItem className='active'>
                                <ListItemButton>
                                    {/* <Button onClick={toggleDrawer(anchor, true)} className='expandMenu'> */}
                                    <span className='material-symbols-outlined' >
                                        receipt_long
                                    </span>
                                    {/* </Button> */}

                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    {/* <Button onClick={toggleDrawer(anchor, true)} > */}
                                    <span className='material-symbols-outlined' >
                                        groups
                                    </span>
                                    {/* </Button> */}

                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    {/* <Button onClick={toggleDrawer(anchor, true)} className='expandMenu'> */}
                                    <span className='material-symbols-outlined' >
                                        settings
                                    </span>
                                    {/* </Button> */}

                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>

            <Box className="topNav">
                <Box sx={{ height: '7vh', display: 'flex', padding: '10px 20px' }}>
                    <Box sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            color: 'green',
                            padding: '5px 10px',
                            // border:'1px solid red'
                            borderRadius: '5px',
                            background: 'linear-gradient(136.11deg, #FFFFFF -18.81%, #F3F3F3 70.88%, #F3F3F3 115.09%)'
                        }}>
                            ML
                        </Typography>
                    </Box>
                    <Box sx={{ ml: 3 }}>
                  
                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                            Mazhar Lebanese Kitchen
                        </Typography>
                        <Typography sx={{ color: '#9EA3AE', fontSize: '12px' }}>
                            <CiLocationOn />  1488 W 11th Ave, Vancouver
                        </Typography>
                    </Box>

                </Box>
                <div className="right">
                    <ul>
                        <li>
                            <span>
                                Today:
                            </span>
                            <b>
                                {date}
                            </b>
                        </li>
                        <li>
                            <NotificationsIcon />
                        </li>
                        <li>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Box sx={{ width: '25%' }}>
                                    <img src={Profile} alt="" style={{
                                        width: '75%',
                                        padding: '3px',
                                        border: '1px solid #E1E1E6',
                                        borderRadius: '50%',

                                        // display:'inline'
                                    }} />
                                </Box>

                                <Typography sx={{ ml: 3, color: '#545359', fontWeight: 'bold', fontFamily: 'outfit' }}>
                                    Saimrashid
                                    <Typography sx={{ color: '#9EA3AE' }}>
                                        Manager
                                    </Typography>
                                </Typography>
                                <Typography sx={{ marginLeft: '20px' }}>
                                    <BsChevronDown />
                                </Typography>
                            </Box>
                        </li>
                    </ul>
                </div>
            </Box>

        </>
    );

}

export default Sidebar
