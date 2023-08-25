import React, { useState } from 'react'
import './Style.css'
import Button from '@mui/material/Button';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CallMadeIcon from '@mui/icons-material/CallMade';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import ScotiaBank from '../../Assests/scotiaCard.jpg'
import CBICbank from '../../Assests/CBICbank.jpg'

import DateTimePicker from 'react-datetime-picker';


import { styled } from "@mui/material/styles";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { BarChart } from "./Chart";
import { Link, useNavigate } from 'react-router-dom';
import { Input, InputLabel, Table } from '@mui/material';

// import { useNavigate } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { useLocation } from "react-router-dom";



Chart.register(CategoryScale);




const Data = [
    {
        id: 1,
        month: 'Jan',
        userGain: 8000,
        userLost: 823
    },
    {
        id: 2,
        month: 'Feb',
        userGain: 4677,
        userLost: 345
    },
    {
        id: 3,
        month: 'Mar',
        userGain: 7888,
        userLost: 555
    },
    {
        id: 4,
        month: 'Apr',
        userGain: 9000,
        userLost: 4555
    },
    {
        id: 5,
        month: 'May',
        userGain: 4300,
        userLost: 234
    },
    {
        id: 6,
        month: 'June',
        userGain: 9000,
        userLost: 4555
    },
    {
        id: 7,
        month: 'July',
        userGain: 9000,
        userLost: 4555
    },
    {
        id: 8,
        month: 'Aug',
        userGain: 9000,
        userLost: 4555
    },
    {
        id: 9,
        month: 'Sep',
        userGain: 9000,
        userLost: 4555
    },
    {
        id: 10,
        month: 'Oct',
        userGain: 9000,
        userLost: 4555
    },
    {
        id: 11,
        month: '  Nov',
        userGain: 4000,
        userLost: 4555
    },
    {
        id: 12,
        month: '  Dec',
        userGain: 8600,
        userLost: 4555
    },
];
const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
            label: 'Popularity of colours',
            data: [55, 23, 96],
            // you can set indiviual colors for each bar
            backgroundColor: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)'
            ],
            borderWidth: 1,
            barThickness:'100px'
            // borderRadius: '10px',
        }
    ]
}



const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: '5px'
};


const DecreaaseonMobile = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("dm")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
    },
}));

// static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
function Transaction() {
    // let ValuePiece = Date | null;
    // let Value = ValuePiece | [ValuePiece, ValuePiece];
    // const [value, onChange] = useState < Value > (new Date());


    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.month),
        datasets: [
            {
                label: "Users Gained ",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "#42C677",
                    "#A0E4B8",
                    // "#f3ba2f",
                    // "#2a71d0"
                ],
                // borderColor: "black",
                borderRadius: 50,

            }
        ]
    });

    // Customize bar width
    // data.datasets.barThickness = 5;



    const [AccountName, setAccountName] = useState('')
    const [Accountnumber, setAccountnumber] = useState('')
    const [confrimAccount, setconfrimAccount] = useState('')
    const [Bank, setBank] = useState('');
    // Modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Navigate = useNavigate()

    const withdrawHistory = [
        {
            id: '#123123123',
            amount: '-$200',
            status: 'waiting',
            date: '18',
            month: 'aug'
        },
        {
            id: '#123123123',
            amount: '-$200',
            status: 'completed',
            date: '18',
            month: 'aug'
        },
        {
            id: '#123123123',
            amount: '-$200',
            status: 'waiting',
            date: '18',
            month: 'aug'
        },
        {
            id: '#123123123',
            amount: '-200',
            status: 'waiting',
            date: '18',
            month: 'aug'
        }, {
            id: '#123123123',
            amount: '-200',
            status: 'waiting',
            date: '18',
            month: 'aug'
        },

    ]


    const handleAccountNumber = (e) => {
        setconfrimAccount(e.target.value)
        // let threshold =3
        // if (confrimAccount >3||confrimAccount >7) {
        //     confrimAccount.push("-")
        // }else{
        // setconfrimAccount(e.target.value)

        // }
    }


    // -- Child Modal
    const [openChild, setopenChild] = useState(false)
    // const [open, setOpen] = useState(false);
    const handleOpenChild = () => {
        if (AccountName || Accountnumber || Bank || confrimAccount !== '') {
            setopenChild(true)
        }
        // setOpen(true);
    };
    const handleCloseChild = () => {
        // setOpen(false);
        setopenChild(false)
    };

    const [clicked, setClicked] = React.useState(false);

    const [pressedButtonValue, setPressedButtonValue] = useState(null);
    const [PINVLAUE, setPINVLAUE] = useState([])
    let PIN = []
    const handleButtonClick = (value) => {
        setPressedButtonValue(value);
        setPINVLAUE([value])
        //   alert(value)
        PIN.push(value)
        console.log(PINVLAUE)
        console.log(value)
        console.log(PIN)
    };

    const confrimPIN = () => {
        console.log(PIN)
        if (PIN.length === 0 ||PIN.length<4) {
            alert("enter pin")
        }
        else if (PIN.length===4){
            alert("Success")
            alert(PIN)
        }
    }

    return (
        <>
            {/* --------------- Child Modal --------------- */}
            {/* <Button onClick={handleOpenChild}>Open Child Modal</Button> */}
            <Modal
                open={openChild}
                onClose={handleCloseChild}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >



                <Box sx={{
                    ...style, width: '100%'
                    , height: '100vh',
                    position: 'relative'
                }}>
                    <Typography sx={{ position: 'absolute', left: '6rem', top: '4rem', color: 'red' }}>
                        <CloseIcon onClick={handleCloseChild} />
                    </Typography>
                    <Box id="child-modal-title" sx={{
                        // border: '1px solid black', 
                        textAlign: 'center'
                    }}>
                        <h2 id="child-modal-title">Enter Pin</h2>
                        {/* <h2>
                            Enter Pin
                        </h2> */}
                        <span style={{ color: '#9EA3AE' }}>
                            Please enter your 4 digit PIN.
                        </span>
                    </Box>


                    <Grid container spacing={0} mt={2}>

                        <Container maxWidth="sm">
                            <Box
                                sx={{
                                    padding: 2,
                                    height: "92px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "70px",
                                        height: "70px",
                                        left: "0px",
                                        top: "0px",
                                        background: " #FFFFFF",
                                        border: "1px solid #E1E1E6",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <FormControl sx={{ margin: "0px auto", }}>
                                        <InputLabel htmlFor="my-input"></InputLabel>
                                        <Input
                                            id="my-input"
                                            aria-describedby="my-helper-text"
                                            type="password"
                                            sx={{
                                                color: "#2B817B",
                                                position: "absoliute",
                                                content: '""',
                                                width: "12px",
                                                fontSize: "22px",
                                                marginLeft: "24px",
                                                marginBottom: "-20px",

                                                '&:focus': { borderBottom: '1px solid #fff', background: '#fff', outlineColor: 'red' },
                                            }}
                                        // value={(dataArray[0] !==undefined)? dataArray[0] :""}
                                        />
                                    </FormControl>

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            content: '""',
                                            width: "60px",
                                            border: clicked ? "1px solid #2B817B" : "1px solid #E1E1E6",
                                            marginTop: "18px",
                                            marginLeft: "2px",
                                            marginRight: "2px",
                                        }}
                                    ></Box>
                                </Box>

                                <Box sx={{ position: "relative", width: "30px", height: "55px" }}>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            content: '""',
                                            width: "25px",
                                            border: "1px solid #E1E1E6",
                                            marginTop: "27.5px",
                                            marginLeft: "2px",
                                        }}
                                    ></Box>
                                </Box>
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "70px",
                                        height: "70px",
                                        left: "0px",
                                        top: "0px",
                                        background: " #FFFFFF",
                                        border: "1px solid #E1E1E6",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <FormControl sx={{ margin: "0px auto" }}>
                                        <InputLabel htmlFor="my-input"></InputLabel>
                                        <Input
                                            id="my-input"
                                            aria-describedby="my-helper-text"
                                            type="password"
                                            sx={{
                                                color: "#2B817B",
                                                position: "absoliute",
                                                content: '""',
                                                width: "12px",
                                                fontSize: "22px",
                                                marginLeft: "24px",
                                                marginBottom: "-20px",
                                                // '&:focus': { borderBottom: '1px solid #fff', background: '#fff', outlineColor: 'red'},
                                            }}
                                        // value={(dataArray[1] !==undefined)? dataArray[1] :""}
                                        />
                                    </FormControl>

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            content: '""',
                                            width: "60px",
                                            border: clicked ? "1px solid #2B817B" : "1px solid #E1E1E6",
                                            marginTop: "18px",
                                            marginLeft: "2px",
                                            marginRight: "2px",
                                        }}
                                    ></Box>
                                </Box>
                                <Box sx={{ position: "relative", width: "30px", height: "55px" }}>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            content: '""',
                                            width: "25px",
                                            border: "1px solid #E1E1E6",
                                            marginTop: "27.5px",
                                            marginLeft: "2px",
                                        }}
                                    ></Box>
                                </Box>
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "70px",
                                        height: "70px",
                                        left: "0px",
                                        top: "0px",
                                        background: " #FFFFFF",
                                        border: "1px solid #E1E1E6",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <FormControl sx={{ margin: "0px auto" }}>
                                        <InputLabel htmlFor="my-input"></InputLabel>
                                        <Input
                                            id="my-input"
                                            aria-describedby="my-helper-text"
                                            type="password"
                                            sx={{
                                                color: "#2B817B",
                                                position: "absoliute",
                                                content: '""',
                                                width: "12px",
                                                fontSize: "22px",
                                                marginLeft: "24px",
                                                marginBottom: "-20px",
                                                // '&:focus': { borderBottom: '1px solid #fff', background: '#fff', outlineColor: 'red'},
                                            }}
                                        // value={(dataArray[2] !==undefined)? dataArray[2] :""}
                                        />
                                    </FormControl>

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            content: '""',
                                            width: "60px",
                                            border: clicked ? "1px solid #2B817B" : "1px solid #E1E1E6",
                                            marginTop: "18px",
                                            marginLeft: "2px",
                                            marginRight: "2px",
                                        }}
                                    ></Box>
                                </Box>
                                <Box sx={{ position: "relative", width: "30px", height: "55px" }}>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            content: '""',
                                            width: "25px",
                                            border: "1px solid #E1E1E6",
                                            marginTop: "27.5px",
                                            marginLeft: "2px",
                                        }}
                                    ></Box>
                                </Box>
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "70px",
                                        height: "70px",
                                        left: "0px",
                                        top: "0px",
                                        background: " #FFFFFF",
                                        border: "1px solid #E1E1E6",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <FormControl sx={{ margin: "0px auto" }}>
                                        <InputLabel htmlFor="my-input"></InputLabel>
                                        <Input
                                            id="my-input"
                                            aria-describedby="my-helper-text"
                                            type="password"
                                            sx={{
                                                color: "#2B817B",
                                                position: "absoliute",
                                                content: '""',
                                                width: "12px",
                                                fontSize: "22px",
                                                marginLeft: "24px",
                                                marginBottom: "-20px",
                                                // '&:focus': { borderBottom: '1px solid #fff', background: '#fff', outlineColor: 'red'},
                                            }}
                                        // value={(dataArray[3] !==undefined)? dataArray[3] :""}
                                        />
                                    </FormControl>

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            content: '""',
                                            width: "60px",
                                            border: clicked ? "1px solid #2B817B" : "1px solid #E1E1E6",
                                            marginTop: "18px",
                                            marginLeft: "2px",
                                            marginRight: "2px",
                                        }}
                                    ></Box>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>



                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid red',
                        bottom: '0', position: 'absolute', width: '100%',
                        height: '65vh'
                    }}>
                        <Box>
                            <table>
                                <tr>
                                    <th><Button onClick={() => handleButtonClick('1')}>1</Button></th>
                                    <th><Button onClick={() => handleButtonClick('2')}>2</Button></th>
                                    <th><Button onClick={() => handleButtonClick('3')}>3</Button></th>
                                </tr>
                                <tr>
                                    <th><Button onClick={() => handleButtonClick('4')}>4</Button></th>
                                    <th><Button onClick={() => handleButtonClick('5')}>5</Button></th>
                                    <th><Button onClick={() => handleButtonClick('6')}>6</Button></th>
                                </tr>
                                <tr>
                                    <th><Button onClick={() => handleButtonClick('7')}>7</Button></th>
                                    <th><Button onClick={() => handleButtonClick('8')}>8</Button></th>
                                    <th><Button onClick={() => handleButtonClick('9')}>9</Button></th>
                                </tr>
                                <tr>
                                    <th><Button sx={{ color: '#9EA3AE !important', backgroundColor: '#D5E6E5' }}><CloseIcon /></Button></th>
                                    <th><Button>0</Button></th>
                                    <th><Button sx={{ color: '#42C677 !important', backgroundColor: '#D5E6E5' }} onClick={confrimPIN}> <CheckCircleIcon /></Button></th>
                                </tr>


                            </table>
                        </Box>
                    </Box>
                    {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
                </Box>






            </Modal>

            {/* </React.Fragment> */}
            {/* ); */}
            {/* // } */}





            <div className='container'>
                <div className="top">
                    <div className="headingTop">
                        Financials
                    </div>
                </div>
                <div className="middle">
                    <div className="leftSection">
                        <div className="Card">
                            <div className="cardContent">

                                <div className="lastDate">
                                    <span>Last update : 24 august 2021</span>
                                </div>
                                <div className="Cardvalue">
                                    <span>$</span>12.000
                                </div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="157" height="132" viewBox="0 0 157 132" fill="none">
                                <path d="M150.387 -12.8028C146.513 -9.84235 140.295 1.02792 146.413 20.8251C154.06 45.5716 169.268 96.5318 132.285 98.7572C95.302 100.983 67.4806 89.0278 72.9797 76.4708C78.4788 63.9138 107.988 74.1284 97.6095 108.849C87.2309 143.57 37.1161 160.108 0.622269 134.021" stroke="#80B3B0" />
                            </svg>
                        </div>

                        <div className="withdraw">
                            <div className="text">
                                Withdraw
                            </div>

                            {/* <EastIcon className='withDrawIcon' /> */}
                        </div>
                        <div className="yourATM">
                            <h3>
                                Your Card
                            </h3>
                            <div className="AtmDetails">
                                <div className="AtmCardDetails">
                                    <img src="https://www.transparentpng.com/thumb/atm-card/r05cSo-picture-credit-card-your-bank-atm-card-dowland.png" alt="" className="AtmImg" />

                                    <div className="AtmNumber">
                                        <span>
                                            1234-1324-1324-1345
                                        </span>
                                    </div>
                                </div>
                                <div className="onwerName">
                                    <span>
                                        Muhammad Saim
                                    </span>
                                </div>
                            </div>

                            <div className="changeAtm">
                                <Button onClick={handleOpen}>Change Card</Button>
                                <Modal
                                    aria-labelledby="spring-modal-title"
                                    aria-describedby="spring-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    slots={{ backdrop: Backdrop }}
                                    slotProps={{
                                        backdrop: {
                                            TransitionComponent: Fade,
                                        },
                                    }}

                                >
                                    <Fade in={open} sx={{ border: '1px solid red', }} className='addAcountModal'>
                                        <Box sx={style} >
                                            <Typography sx={{
                                                position: 'absolute',
                                                left: '20px', color: '#E75C62'
                                            }}>
                                                <CloseIcon onClick={handleClose} />
                                            </Typography>
                                            <Typography id="spring-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold', fontFamily: 'outfit', textAlign: 'center' }}>
                                                Add Bank Account
                                            </Typography>

                                            <Box id="spring-modal-description" sx={{
                                                mt: 2,
                                                // border: '1px solid red',

                                                // display:'flex'

                                            }} >
                                                <InputLabel sx={{ color: '#1A1824', fontWeight: 'bold', fontFamily: 'outfit' }}>
                                                    Name of account holder
                                                </InputLabel>
                                                <input id="filled-basic" variant="filled" placeholder='Your name of account holder' fullWidth onChange={(e) => setAccountName(e.target.value)} />


                                                <InputLabel id="demo-simple-select-filled-label" sx={{
                                                    color: '#1A1824',
                                                    fontWeight: 'bold',
                                                    fontFamily: 'outfit'
                                                }}>Select Bank</InputLabel>
                                                <FormControl fullWidth variant="filled">
                                                    <InputLabel id="demo-simple-select-filled-label">  Select your bank account</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-filled-label"
                                                        id="demo-simple-select-filled"
                                                        value={Bank}

                                                        onChange={(e) => setBank(e.target.value)}

                                                        sx={{
                                                            fontWeight: 'bold',
                                                            fontSize: '14px',
                                                            // display:'flex',
                                                            // alignItems:'center',
                                                            // justifyContent:'center',
                                                            // border: '1px solid red'
                                                        }}
                                                    >
                                                        {/* <MenuItem s selected={true} value='default'>
                                                            Select your bank account
                                                        </MenuItem> */}
                                                        <MenuItem value={'Scotiabank'} >
                                                            <img src={ScotiaBank} alt="" style={{ width: '12%', }} />
                                                            <span style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '14px' }}>
                                                                Scotiabank
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem value={'CBIC'}>
                                                            <img src={CBICbank} alt="" style={{ width: '12%' }} />
                                                            <span style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '14px' }}>
                                                                CBIC
                                                            </span>
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>



                                                <InputLabel sx={{ color: '#1A1824', fontWeight: 'bold', fontFamily: 'outfit' }} >
                                                    Account number
                                                </InputLabel>
                                                <input id="filled-basic" variant="filled" placeholder='XXXX-XXXX-XXXX' onChange={(e) => setAccountnumber(e.target.value)} />

                                                <InputLabel sx={{ color: '#1A1824', fontWeight: 'bold', fontFamily: 'outfit' }}>
                                                    Re-enter account number
                                                </InputLabel>
                                                <input
                                                    onChange={handleAccountNumber}
                                                    placeholder='XXXX-XXXX-XXXX' />

                                                <Box sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-evenly',
                                                    // color:'#2B817B'
                                                }}>

                                                    <Button variant='outlined' sx={{ width: 130, color: '#2B817B' }} onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                    <Button variant='filled' sx={{
                                                        backgroundColor: `${AccountName || Accountnumber === '' ? '#D5E6E5' : '#2B817B'}`,
                                                        // // backgroundColor: '#2B817B',
                                                        color: 'white',
                                                        width: 130,
                                                        fontWeight: 'bold',
                                                        '&:hover': {
                                                            backgroundColor: `${AccountName || Accountnumber === '' ? '#D5E6E5' : '#2B817B'}`
                                                        }
                                                    }}
                                                        disabled={AccountName || Accountnumber=== '' ? true : false}
                                                        onClick={handleOpenChild}
                                                    >

                                                        Save
                                                    </Button>
                                                    {/* <ChildModal /> */}

                                                </Box>

                                            </Box>
                                        </Box>
                                    </Fade>
                                </Modal>
                                {/* <Button variant="outlined">Change Card</Button> */}
                            </div>
                        </div>
                    </div>
                    <div className="rightSection">
                        <div className="heading">
                            <h3>
                                Revenue
                            </h3>
                            <Link to='/allTranactions'>Transaction Details</Link>
                        </div>
                        <div className="selectDiv">
                            <span>Sort By:</span>
                            <select name="" id="">
                                <option value="month">Month</option>
                                <option value="week">Week</option>
                                <option value="day">Days</option>
                            </select>
                        </div>
                        <div className="chart">
                            <BarChart chartData={chartData} />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="heading">
                        <h3>
                            Withdraw History
                        </h3>
                        <Link to="/AllWithdraws">
                            See more
                        </Link>
                    </div>

                    <div className="withdrawHistory">


                        {
                            withdrawHistory.map((v, i) => {
                                return (
                                    <>
                                        <div className="withdrawCard">
                                            <div className="iconDiv" >
                                                <div className="icon" style={{ color: `${v.status === 'waiting' ? '#FAA641' : '#42C677'}` }}>
                                                    {
                                                        v.status === 'waiting' ?
                                                            <AccessTimeFilledIcon />
                                                            : <CheckCircleIcon />
                                                    }
                                                </div>
                                            </div>
                                            <div className="withdrawDetails">
                                                <span>
                                                    #3243423
                                                </span>
                                                <span>
                                                    $1,200
                                                </span>
                                                <span className="date">
                                                    12-Aug-2032
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>

            </div>

        </>

    )
}

export default Transaction
