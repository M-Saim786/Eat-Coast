import React, { useState } from 'react'
import { Box, Button, Typography, Modal, InputLabel, TextField, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled, Pagination, Stack, Select, MenuItem, FormControl } from '@mui/material'
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import { AiOutlinePlus, AiOutlineClose, AiFillDelete } from 'react-icons/ai'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from '../../Assests/profile.png'
import CloseIcon from '@mui/icons-material/Close';
import { CiSearch } from 'react-icons/ci'
const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    width: '89%',
    height: '100vh',
    bgcolor: 'white',
    position: 'absolute',
    right: 0,
    border: 'none',
    // boxShadow: 24,
    p: 4,
}



const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '30vh',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '5px',
    p: 4,
};


const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: 11,
        minWidth: 110,
    },
}));
const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500,
    },
});

function Emloyee() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const rows = [
        {
            // id:'1',
            name: 'Siam',
            email: 'saimra3344@gmail.com',
            role: 'Staff',

        },
        {
            // id:'1',
            name: 'Siam',
            email: 'saimra3344@gmail.com',
            role: 'Staff',

        },
        {
            // id:'1',
            name: 'Siam',
            email: 'saimra3344@gmail.com',
            role: 'Staff',

        }, {
            // id:'1',
            name: 'Siam',
            email: 'saimra3344@gmail.com',
            role: 'Staff',

        },

    ]

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (e, index) => {
        setAnchorEl(e.currentTarget);
        console.log(index);
    };
    const handleCloseAnchor = () => {
        setAnchorEl(null);
    };


    // ------- Modal Delete
    const [DeleteModal, setDeleteModal] = useState(false)
    // const [open, setOpen] = React.useState(falsse);
    const handleOpenDeleteModal = () => setDeleteModal(true);
    const handleCloseDeleteModal = () => setDeleteModal(false);



    // const [age, setAge] = React.useState('');/
    const [SortedValue, setSortedValue] = useState('')
    const handleChange = (event) => {
        setSortedValue(event.target.value);

    };

    return (
        <Box className='container' >
            <Box sx={{
                margin: '20px auto 10px auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                // border: '1px solid red'
            }}>
                <Typography sx={{
                    fontFamily: 'outfit',
                    fontWeight: 'bold',
                    fontSize: '20px',

                }}>
                    Emloyee
                </Typography>

                {/* <Button sx={{color:'white'}}> */}
                <Typography variant='contained' color={'white'} sx={{
                    backgroundColor: '#2B817B',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '5px',
                    mr: 3
                }} onClick={handleOpen}>

                    <AiOutlinePlus color='white' />
                    <Typography sx={{ ml: 1 }}>
                        Add Emloyee
                    </Typography>
                </Typography>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <AiOutlineClose color='#E75C62' size={'25px'} onClick={handleClose} />
                        <Typography id="modal-modal-title" sx={{
                            // border: '1px solid red',
                            textAlign: 'center', fontSize: '20px', fontWeight: 'bold'
                        }}>

                            Add Emloyee
                        </Typography>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group">
                                <FormControlLabel value="staff" control={<Radio sx={{
                                    border: '1px solid red', '&:focus': {
                                        border: '1px solid green'

                                    }
                                }}  />} label="Staff" />
                                <FormControlLabel value="manager" control={<Radio />} label="Manager" />
                            </RadioGroup>
                        </FormControl>


                        <Box sx={{ border: '1px solid red', display: 'flex', }}>
                            <Box sx={{ border: '1px solid red', width: '50%', margin: '0px auto', height: 'auto', padding: '20px' }}
                                className='addEmloyeeForm'
                            >
                                <InputLabel>
                                    Name
                                </InputLabel>
                                <input type="text" placeholder='Name' />
                                <InputLabel>
                                    Email
                                </InputLabel>
                                <input type="text" placeholder='Email' />
                                <InputLabel>
                                    Set Pin
                                </InputLabel>
                                <input type="number" placeholder='X-X-X-X' style={{ width: '35%', fontSize: '18px' }} />

                                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Button variant='outlined' sx={{ border: '1px solid #2B817B', color: '#2B817B' }}>
                                        Save as draft
                                    </Button>
                                    <Button variant='contained' sx={{
                                        backgroundColor: '#2B817B', width: '20%',
                                        '&:hover': {
                                            backgroundColor: '#2B817B'
                                        }
                                    }}>
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                        </Typography>
                    </Box>
                </Modal>

            </Box>
            <Box sx={{
                // border: '1px solid red',
                height: 'auto', display: 'flex'
                , justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2

            }}>
                {/* <TextField variant='contained'/> */}
                {/* <Input variant='contained'  /> */}
                <Box sx={{ position: 'relative', width: '25%' }}>
                    <input type="text" placeholder='Search your emloyee' style={{
                        backgroundColor: '#F6F6F6',
                        color: '#9EA3AE',
                        outline: 'none',
                        border: '1px solid #E1E1E6',
                        borderRadius: '5px',
                        padding: '10px',
                        width: '100%'
                    }} />
                    <CiSearch style={{ position: 'absolute', right: '0px', top: '10px' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mr: 3 }}>
                    <Typography color={'#9EA3AE'}>
                        Sort By:
                    </Typography>
                    <select name="" id="" onChange={handleChange} style={{ border: '1px solid #E1E1E6' }}>
                        <option value="name">Name</option>
                        <option value="type">Type</option>
                    </select>

                </Box>

            </Box>
            {
                rows.length > 0 ?
                    <>
                        <Box>

                            <TableContainer component={Paper} className='tableContainer' >
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
                                            }}>Photo</TableCell>
                                            <TableCell sx={{
                                                color: '#9EA3AE',
                                                fontSize: '16px',
                                                // border:'1px solid red'
                                                // fontWeight: 'bold'
                                            }}>Name</TableCell>

                                            <TableCell sx={{
                                                color: '#9EA3AE',
                                                fontSize: '16px'
                                                // fontWeight: 'bold'
                                            }}>Email</TableCell>

                                            <TableCell sx={{
                                                color: '#9EA3AE',
                                                fontSize: '16px'
                                            }}>Type</TableCell>

                                            <TableCell sx={{
                                                color: '#9EA3AE',
                                                fontSize: '16px'
                                            }}>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {

                                            rows.map((row, index) => (

                                                // index<=5?
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                                                >
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontFamily: 'outfit' }}>
                                                        {++index}
                                                    </TableCell>
                                                    <TableCell style={{ width: '10%' }}>
                                                        <img src={Profile} alt="" style={{ width: '40%' }} />
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontFamily: 'outfit' }}>
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', fontFamily: 'outfit' }}>{row.email}</TableCell>
                                                    <TableCell sx={{
                                                        fontWeight: 'bold',
                                                        // color: '#FFFFFF'
                                                        fontFamily: 'outfit'
                                                    }}>
                                                        {row.role}
                                                    </TableCell>
                                                    {/* <TableCell sx={{ fontWeight: 'bold' }}>{row.carbs}</TableCell> */}
                                                    <TableCell>
                                                        <LightTooltip
                                                            placement='bottom-end'
                                                            sx={{ minWidth: 20, color: 'red' }}
                                                            title={
                                                                <>
                                                                    <Box>

                                                                        <Box
                                                                            // onClick={() => handleApprove(row._id)}
                                                                            sx={{
                                                                                padding: "4px 5px",
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                cursor: "pointer",
                                                                                // color: 'green'
                                                                                // "&:hover": {
                                                                                //     borderLeft: "4px solid blue",
                                                                                //     borderRight: "4px solid blue",
                                                                                // },
                                                                            }}
                                                                        >
                                                                            <Typography
                                                                                sx={{
                                                                                    padding: "0 5px",
                                                                                    fontSize: "12px",
                                                                                    cursor: "pointer",
                                                                                    display: 'flex',
                                                                                    alignItems: 'center'
                                                                                }}
                                                                            >
                                                                                <DriveFileRenameOutlineOutlinedIcon style={{ marginRight: '10px' }} />
                                                                                Edit Account
                                                                            </Typography>
                                                                        </Box>
                                                                        <Box
                                                                            sx={{
                                                                                padding: "4px 5px",
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                cursor: "pointer",
                                                                                color: '#E75C62'
                                                                                // "&:hover": {
                                                                                //     borderLeft: "4px solid red",
                                                                                //     borderRight: "4px solid red",
                                                                                // },
                                                                            }}
                                                                        // onClick={() => handleApprove(row._id)}
                                                                        >
                                                                            <Typography
                                                                                sx={{
                                                                                    padding: "0 5px",
                                                                                    fontSize: "12px",
                                                                                    cursor: "pointer",
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    // border: '1px solid red'
                                                                                }}
                                                                                onClick={handleOpenDeleteModal}
                                                                            >
                                                                                <DeleteOutlineOutlinedIcon style={{ marginRight: '10px' }} />
                                                                                Delete
                                                                            </Typography>



                                                                            {/* Open MOdal for Delete */}
                                                                            <Modal
                                                                                open={DeleteModal}
                                                                                onClose={handleCloseDeleteModal}
                                                                                aria-labelledby="modal-modal-title"
                                                                                aria-describedby="modal-modal-description"
                                                                            >

                                                                                <Box sx={styleModal}>
                                                                                    <Box sx={{ display: 'flex', }}>
                                                                                        <Typography sx={{
                                                                                            // position: 'absolute',
                                                                                            // top: '3rem',
                                                                                            // left: '3rem'
                                                                                            color: '#E75C62'
                                                                                        }}>
                                                                                            <CloseIcon onClick={handleCloseDeleteModal} />
                                                                                        </Typography>

                                                                                        <Box sx={{
                                                                                            // border: '1px solid red',
                                                                                            // textAlign:'center'
                                                                                            margin: '0px auto',
                                                                                        }} >

                                                                                            <Typography sx={{
                                                                                                fontWeight: 'bold',
                                                                                                fontSize: '20px'
                                                                                            }}>
                                                                                                Delete Account
                                                                                            </Typography>

                                                                                        </Box>
                                                                                    </Box>
                                                                                    <Typography id="modal-modal-description" sx={{ my: 5 }}>
                                                                                        Something you delete can not be returned again, Are you sure?                                                                            </Typography>
                                                                                    {/* </Typography> */}
                                                                                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                                                                        <Button variant='outlined' sx={{
                                                                                            color: '#E75C62',
                                                                                            border: '1px solid #E75C62'
                                                                                        }}>
                                                                                            Delete
                                                                                        </Button>
                                                                                        <Button variant='contained' sx={{
                                                                                            backgroundColor: '#2B817B', color: 'white',
                                                                                            '&:hover': {
                                                                                                backgroundColor: '#2B817B'
                                                                                            },
                                                                                        }}>
                                                                                            Cancel
                                                                                        </Button>
                                                                                    </Box>
                                                                                </Box>
                                                                            </Modal>
                                                                        </Box>

                                                                    </Box>
                                                                </>
                                                            }
                                                        >
                                                            <Box
                                                                sx={{
                                                                    border: "1px solid rgb(137, 138, 154)",
                                                                    height: "30px",
                                                                    width: "30px",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={handleMenuClick}
                                                            // onMouseOut={handleCloseAnchor}
                                                            >
                                                                <MoreHorizIcon
                                                                    sx={{ fontSize: "16px", p: 0 }}
                                                                />
                                                            </Box>
                                                        </LightTooltip>

                                                    </TableCell>
                                                </TableRow>
                                                // :<>  fdjskl </>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer >

                            <Box sx={{
                                // border: '1px solid red',
                                marginTop: '2rem',
                                display: 'flex',
                                alignItems: 'center',

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

                    </>
                    :

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '35vh',
                        border: '2px solid #E1E1E6',
                        color: '#9EA3AE',
                        borderRadius: '5px'

                    }}>
                        <Typography>
                            No emloyee added
                        </Typography>


                    </Box>

            }



        </Box >
    )
}

export default Emloyee
