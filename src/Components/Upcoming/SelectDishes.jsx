
import { Box, List, ListItem, Typography, Checkbox } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CancelIcon from '@mui/icons-material/Cancel';

function SelectDishes() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
     
        </>
    )
}

export default SelectDishes
