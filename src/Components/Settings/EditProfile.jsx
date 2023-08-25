import { Box, FormControl, Input, InputLabel, TextField, Typography, Select, MenuItem, OutlinedInput, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
import { RiUserAddLine } from 'react-icons/ri'
import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const countryCodes = [
    '+92',
    '+91',
    '+86',
    '+81',
    '+82',
];

function getStyles(name, CountryCode, theme) {
    return {
        fontWeight:
            CountryCode.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function EditProfile() {


    // const handleChange = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setCountryCode(
    //         // On autofill we get a stringified value.
    //         typeof value === 'string' ? value.split(',') : value,
    //     );
    // };
    const theme = useTheme();
    const [CountryCode, setCountryCode] = useState([])


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log(event.target.value)
        setCountryCode(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };





    // const handleChange = (event) => {
    //     setCountryCode(event.target.value);
    // };
    return (
        <Box className='container'>
            <Box className='top'>
                <Box className="heading">
                    <Typography sx={{ alignItems: 'center' }}>
                        <Link to='/profile' style={{ display: 'flex', fontSize: '18px', color: '#2B817B', marginLeft: '20px', alignItems: 'center', fontWeight: 'bold' }}>
                            <BsChevronLeft style={{ marginRight: '10px' }} />
                            Back
                        </Link>
                    </Typography>
                    <h2 style={{
                        // border: '1px solid red',
                        margin: '0px auto',
                        fontWeight: 'bold',
                    }}>
                        Change Location
                    </h2>
                </Box>

            </Box>

            <Box sx={{
                // border: '1px solid red',
                display: 'flex', color: '#9EA3AE', mt: 2
            }}>
                <Typography sx={{ padding: '5px 10px', borderBottom: '2px solid #2B817B', color: 'black', fontWeight: 'bold', mr: 3 }} >
                    Profile Setting :
                </Typography>
                <Typography sx={{
                    padding: '5px 10px',
                    //  borderBottom: '2px solid #2B817B'
                }}>
                    {/* <Link to='/restaurantSettings' style={{fontWeight:'bold',color:'#9EA3AE'}}> */}
                    <Link style={{ fontWeight: 'bold', color: '#9EA3AE' }}>
                        Restaurant Setting :
                    </Link>
                </Typography>
            </Box>
            <Box sx=
                {{
                    margin: '2rem auto',
                    // border: '1px solid red',
                    width: '60%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    // alignItems:'center'
                }}>
                <Box sx={{ width: '25%', p: 2, fontWeight: 'bold' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Profile Picture
                    </Typography>
                    <InputLabel htmlFor='label' sx={{ padding: '20px', backgroundColor: '#F6F6F6', width: '30%', textAlign: 'center', fontSize: '2rem', my: 2 }}>
                        <RiUserAddLine />
                    </InputLabel>
                    <Input
                        type='file'
                        id='label' sx={{ display: 'none' }}
                    />
                    <Button sx={{ color: '#2B817B' }}>
                        + Change Photo
                    </Button>
                    <Typography sx={{ color: '#9EA3AE' }}>
                        *uploaded photos are 1 : 1 in size and a maximum of 2 mb
                    </Typography>
                </Box>

                <Box sx={{ width: 'inherit' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between', color: '#9EA3AE'
                    }}>
                        <Typography>
                            ID : 192-120-102
                        </Typography>
                        <Button sx={{
                            background: '#2B817B', color: 'white', '&:hover': {
                                background: '#2B817B'
                            }
                        }} varaint='cotained'>
                            Save
                        </Button>
                    </Box>
                    <Grid>
                        <Grid>

                            <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                                Onwer Name
                            </InputLabel>
                            <input placeholder='Ilham Syaif' varaint='filled' className='input' fullWidth />
                        </Grid>
                        <Grid>
                            <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                                Email
                            </InputLabel>
                            <input placeholder='Ilhamsyaif@gmail.com' varaint='filled' className='input'
                            />

                        </Grid>
                        <Grid>
                            <Box>
                                <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                                    Phone Number
                                </InputLabel>
                                <Select sx={{ backgroundColor: '#F6F6F6', mr: 1, height: '7vh' }}
                                    multiple
                                    displayEmpty
                                    value={CountryCode}
                                    onChange={handleChange}
                                    input={<OutlinedInput />}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <b>Select Code</b>;
                                        }
                                        return selected.join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem disabled value="">
                                        <em>Select Code</em>
                                    </MenuItem>
                                    {countryCodes.map((code) => (
                                        <MenuItem
                                            key={code}
                                            value={code}
                                            style={getStyles(code, CountryCode, theme)}
                                        >
                                            {code}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <input placeholder='XXXX - XXXX - XXXX' varaint='filled' className='input' />
                            </Box>
                        </Grid>
                        <Grid>
                            <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                                Set PIN
                            </InputLabel>
                            <input placeholder='X - X - X - X' varaint='filled' className='input' style={{ width: '30%' }} />
                        </Grid>
                    </Grid>
                </Box>

            </Box>


        </Box>

    )

}

export default EditProfile
