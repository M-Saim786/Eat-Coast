import { Box, FormControl, Input, InputLabel, TextField, Typography, Select, MenuItem, OutlinedInput, Button, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
function PrivacyPolicy() {
    return (
        <Box className='container' sx={{}}>
            <Box className="heading" sx={{ mt: 1 }}>
                <Typography sx={{ alignItems: 'center' }}>
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
                    Privacy Policy
                </h2>

            </Box>


            <Box sx={{ border: '1px solid #E1E1E6', lineHeight: '2', p: 2 }}>
                <Typography sx={{ color: '#9EA3AE' }}>
                    Effective date: 2022-01-08
                </Typography>
                <strong>
                    1. Introduction
                </strong>
                <br />

                Welcome to eatcoast.

                eatcoast (“us”, “we”, or “our”) operates eatcoast.com (hereinafter referred to as “Service”).

                Our Privacy Policy governs your visit to eatcoast.com, and explains how we collect, safeguard and disclose information that results from your use of our Service.

                We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.

                Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (“agreement”).
                <br />
                <strong>
                    2. Definitions
                </strong>
                <br />                <br />


                SERVICE means the eatcoast.com website operated by eatcoast.

                PERSONAL DATA means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possessi


                <br />
                <strong>
                    3   . Definitions
                </strong>
                <br />
                <br />
                SERVICE means the eatcoast.com website operated by eatcoast.

                PERSONAL DATA means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possessi
            </Box>
        </Box>
    )
}

export default PrivacyPolicy
