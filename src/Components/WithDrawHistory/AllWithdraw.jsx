import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
function AllWithdraw() {
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
    const [date, setDate] = useState('')
    useEffect(() => {
        let month = new Date
        month = month.toDateString()
        month = month.slice(3, 8)
        setDate(month)
    }, [])

    return (
        <Box className='container' sx={{
            // border: '1px solid red',
            display: 'flex',
            justifyContent: 'center'
        }} >
            <Box sx={{
                position: 'absolute',
                left: '10px',
                top: '1.5rem'
                // border: '1px solid red'
            }}>
                <Link style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2B817B'
                }} to='/Transactions'>
                    <ArrowBackIosIcon />
                    Back
                </Link>
            </Box>
            {/* ------- Main Content  */}
            <Box sx={{
                width: '40%',
            }}>
                <Box>
                    <h2 style={{ textAlign: 'center' }}>
                        All Widthdraws
                    </h2>
                </Box>
                <Box sx={{
                    // border: '1px solid red',
                    backgroundColor: '#2B817B',
                    borderRadius: '10px',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '20vh'
                }}>
                    <Box sx={{
                        // border: '1px solid red',
                        // display: 'flex',
                        position: 'relative',
                        padding: '10px',

                        // justifyContent: 'space-around',
                        // alignItems: 'flex-end'
                    }}>

                        <Box>
                            Last Update: 24-August-2021
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            bottom: '10px',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            display: 'flex',
                        }}>
                            <CallMadeIcon style={{
                                // border: '1px solid red',
                                background: 'white',
                                color: '#2B817B',
                                borderRadius: '5px',
                                marginRight: '10px',
                                fontSize: '1rem'
                            }} />
                            <span>
                                12.000
                            </span>
                        </Box>
                    </Box>

                    <Box sx={{ overflow: 'hidden' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 157 132" fill="none">
                            <path d="M150.387 -12.8028C146.513 -9.84235 140.295 1.02792 146.413 20.8251C154.06 45.5716 169.268 96.5318 132.285 98.7572C95.302 100.983 67.4806 89.0278 72.9797 76.4708C78.4788 63.9138 107.988 74.1284 97.6095 108.849C87.2309 143.57 37.1161 160.108 0.622269 134.021" stroke="#80B3B0" />
                        </svg>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <h3>

                            {date}
                        </h3>
                    </Box>
                    <Box>
                        {
                            withdrawHistory.map((v, i) => {
                                return (
                                    <>
                                        <Box sx={{
                                            // border: '1px solid red',
                                            my: 2,
                                            display: 'flex',
                                            position: 'relative',
                                            padding: '0px 10px'
                                        }}>
                                            <Box sx={{
                                                padding: '10px 20px',
                                                border: '1px solid #E1E1E6',
                                                textAlign: 'center',
                                                borderRadius: '10px'

                                            }}>
                                                <Box sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: '20px',
                                                    color: '#1A1824',
                                                    marginBottom: '5px'
                                                }}>
                                                    {v.date}
                                                </Box>
                                                <span style={{ color: '#9EA3AE' }}>
                                                    {v.month.charAt(0).toUpperCase() + v.month.slice(1, v.month.length)}
                                                </span>
                                            </Box>
                                            <Box sx={{
                                                // border: '1px solid red',
                                                padding: '10px'
                                            }}>
                                                <Box>
                                                    {v.id}
                                                </Box>
                                                <Box>
                                                    {v.amount}
                                                </Box>

                                            </Box>
                                            <Box sx={{
                                                // border: '1px solid red',
                                                position: 'absolute',
                                                // top: 0
                                                right: 0,
                                                display: 'flex',
                                                color: `${v.status === 'waiting' ? '#FAA641' : '#42C677'}`
                                            }}>
                                                <span>
                                                    {v.status.charAt(0).toUpperCase() + v.status.slice(1, v.status.length)}
                                                </span>
                                                <span style={{ marginLeft: '10px' }}>

                                                    {
                                                        v.status === 'waiting' ?
                                                            <AccessTimeFilledIcon />
                                                            : <CheckCircleIcon />
                                                    }
                                                </span>

                                            </Box>
                                        </Box>
                                    </>
                                )
                            })
                        }
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default AllWithdraw
