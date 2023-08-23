import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination, Stack } from '@mui/material'
// import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  CardMedia,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Menu,
  Modal,
  FormControl,
  ListItem,
  ListItemText,
  List,
  SwipeableDrawer,
  Drawer,
  ListItemSecondaryAction,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"

import dayjs from "dayjs";

import {
  AiOutlineClose,
  AiOutlineRight,
  AiOutlineCheckCircle,
  AiOutlineLeft,
  // AiOutlineClose
} from "react-icons/ai";
import { BsChevronDown } from 'react-icons/bs'
import { FaRegCalendarDays } from "react-icons/fa6";
// import usercircle from "../../Assets/icons/user-cirlce-add.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';





function AllTransactions() {

  const rows = [
    {

      name: 'saim',
      personalDetails: 'Personal Subscription',
      bg_Color: '#7B49E5',
      amount: '200'

    }, {

      name: 'saim',
      personalDetails: 'Fitness Subscription'
      ,
      bg_Color: '#FF8D85'
      ,
      amount: '200'
    }, {

      name: 'saim',
      personalDetails: 'Bussiness Subscription'
      ,
      bg_Color: '#FF9933'
      ,
      amount: '200'
    }, {

      name: 'saim',
      personalDetails: 'Multiple Subscription'
      ,
      bg_Color: '#158FAD'
      ,
      amount: '200'
    }, {

      name: 'saim',
      personalDetails: 'Personal Subscription'
      ,
      bg_Color: '#7B49E5'
      ,
      amount: '200'
    }, {

      name: 'saim',
      personalDetails: 'Single Subscription'
      ,
      bg_Color: '#7ECC49'
      ,
      amount: '200'
    }
    // , {

    //   name: 'saim',
    //   personalDetails: 'Multiple Subscription'
    //   ,
    //   bg_Color: '#158FAD'
    //   ,
    //   amount: '200'
    // },
  ];


  const [open1, setOpen1] = useState(false);

  const toggleDrawer1 = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen1(open);
    // setinputOpen1(false);
    // setinputOpen2(false);
  };

  const CloseDrawer = () => {
    setOpen1(false)
  }
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const [date, setdate] = useState('')
  useEffect(() => {

    let current = new Date();
    current = current.toString()
    console.log(current.slice(3, 15))
    setdate(current.slice(3, 15))
  }, [])
  // const date = `${342730}`;


  return (
    <Box className='container' sx={{
      // border: '1px solid green',
      height: 'auto', top: '4rem',
    }}>
      <Box className='top' >
        {/* <div className="top"> */}
        <div className="heading">
          <Link to='/Transactions' style={{ display: 'flex', fontSize: '20px', color: '#2B817B', marginLeft: '20px' }}>
            <ChevronLeftIcon size='2rem' /> <span>
              Back
            </span>
          </Link>
          <h2 style={{
            // border: '1px solid red',
            margin: '0px auto',
            fontWeight: 'bold',


          }}>
            Transaction Details
          </h2>
        </div>
        {/* </div> */}
      </Box>

      {/*  ------------------ Side Drawer for Date ----------- */}
      <Box sx={{
        // border: '1px solid red',
        display: 'flex', alignItems: 'center', ml: 4
      }}>
        <InputLabel
          align="left"
          htmlFor="first-select"
          sx={{
            mb: 1,
            mt: "17px",
            color: "#1A1824",
            fontWeight: "bold",
          }}
        >
          Select Date:
        </InputLabel>
        <OutlinedInput
          // fullWidth
          // placeholder="Select meal end date"
          value={
            value.format("YYYY/MM/DD") === "2022/04/17"
              ? `${date}`
              : value.format("YYYY/MM/DD")
          }
          // value={value.format('YYYY/MM/DD')}
          readOnly={true}
          onClick={toggleDrawer1(true)}
          // onKeyDown={toggleDrawer(true)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{ color: "#9EA3AE !important", fontSize: 15 }}
              >
                <BsChevronDown />
              </IconButton>
            </InputAdornment>
          }
          sx={{
            border: '1px solid #2B817B', width: '15%', marginLeft: '15px', color: '#2B817B', borderRadius: '5px'
          }}
        />
        <Drawer
          anchor="right"
          open={open1}
          onClose={toggleDrawer1(false)}
          align="center"
        >
          <div style={{ width: 500 }}>
            <Box align="center" sx={{ width: "100%", mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Button
                    onClick={toggleDrawer1(false)}
                    sx={{ color: "black" }}
                  >
                    <AiOutlineClose fontSize={20} color='#E75C62' />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  {/* <Typography fontWeight="bolder" fontSize={20} sx={{border:'1px solid red', ml:-3}}> */}
                  <span style={{ fontWeight: 'bold' }}>

                    Select Date
                  </span>
                  {/* </Typography> */}
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#2B817B",
                      "&:hover": { background: "#359C94" },
                    }}
                    onClick={CloseDrawer}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box align="center" sx={{ mt: 3, mx: 5 }}>
              <InputLabel
                align="left"
                htmlFor="first-select"
                sx={{
                  mb: 1,
                  mt: "17px",
                  color: "#9EA3AE",
                  fontSize: '14px'
                  // fontWeight: "bold",
                }}
              >
                Show Report for Date:
              </InputLabel>

              <OutlinedInput
                fullWidth
                placeholder="Select meal end date"
                value={value.format("YYYY/MM/DD")}
                readOnly={true}
                sx={{
                  color: "#9EA3AE",
                  backgroundColor: "#F6F6F6",
                  height: "45px",
                  outlineColor: "red !important",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#80B3B0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#80B3B0",
                  },
                }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  border: 2,
                  borderColor: "divider",
                  mt: 2,
                  mx: 5,
                  borderRadius: 2,
                  width: "100%",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateCalendar", "DateCalendar"]}
                    sx={{}}
                  >
                    <DemoItem label="">
                      <DateCalendar
                        value={value}
                        views={["month", "day"]}
                        onChange={(newValue) => setValue(newValue)}
                        sx={{
                          color: "#2B817B",
                          width: "100%",

                          "& .Mui-selected, & .Mui-focused, & .Mui-selected:hover":
                          {
                            backgroundColor: "#2B817B !important",
                            borderRadius: 1,
                          },
                          components: {
                            MuiIconButton: {
                              styleOverrides: {
                                root: {
                                  color: "red !important", // Change the icon button color here
                                },
                              },
                            },
                          },
                        }}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Box>
          </div>
        </Drawer>

      </Box>


      {/* --------------- Main container ----------------------- */}

      <Box sx={{
        // border: '1px solid red', 
        width: '95%',
        borderRadius: '10px',
        margin: '20px auto',
        display: 'block',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      }}>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ color: '#9EA3AE', }}>
              <TableRow >
                <TableCell sx={{
                  color: '#9EA3AE',
                  fontSize: '16px',
                  // border:'1px solid red',
                  // padding:'5px'

                }}>#</TableCell>
                <TableCell sx={{
                  color: '#9EA3AE',
                  fontSize: '16px',
                  // border:'1px solid red'
                  // fontWeight: 'bold'
                }}>Id Order</TableCell>
                <TableCell sx={{
                  color: '#9EA3AE',
                  fontSize: '16px'
                  // fontWeight: 'bold'
                }}>Meal Plans</TableCell>
                <TableCell sx={{
                  color: '#9EA3AE',
                  fontSize: '16px'
                }}>Order Type</TableCell>
                <TableCell sx={{
                  color: '#9EA3AE',
                  fontSize: '16px'
                }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {

                rows.map((row, index) => (

                  // index<=5?
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                      {++index}.
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, harum!</TableCell>
                    <TableCell sx={{
                      // fontWeight: 'bold',
                      color: '#FFFFFF'

                    }}>
                      <span style={{ backgroundColor: row.bg_Color, padding: '5px 10px', borderRadius: '5px', color: 'white' }}>
                        {row.personalDetails}
                      </span>
                    </TableCell>
                    {/* <TableCell sx={{ fontWeight: 'bold' }}>{row.carbs}</TableCell> */}
                    <TableCell sx={{ fontWeight: 'bold', color: '#42C677' }}>
                      <span style={{ marginRight: '5px' }}>$</span>
                      {row.amount}</TableCell>
                  </TableRow>
                  // :<>  fdjskl </>
                ))}
            </TableBody>
          </Table>
        </TableContainer>




      </Box>
      <Box sx={{
          // border: '1px solid red',
          marginTop: '2rem',
          display: 'flex'

        }}>
          <span>
            Show 1-10 of 50 Entriers
          </span>



          <Stack spacing={2} sx={{ position: 'absolute', right: '2rem' }}>
            {/* <Pagination count={10} shape="rounded" /> */}
            <Pagination count={10} variant="outlined" shape="rounded" className='pagination' />
          </Stack>
        </Box>

    </Box>
  )
}

export default AllTransactions
