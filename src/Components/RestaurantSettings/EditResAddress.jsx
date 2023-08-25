import { Box, FormControl, Input, InputLabel, TextField, Typography, Select, MenuItem, OutlinedInput, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
import { RiUserAddLine } from 'react-icons/ri'
import { FiChevronRight } from 'react-icons/fi'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

// export default function MyApp() {
//   return ;
// }
function EditResAddress() {
    const [Note, setNote] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")
    let NoteLength = Note.split(' ').length
    console.log(NoteLength)
    // const [Words, setWords] = useState(Note)
    const Navigate = useNavigate()
    return (
        <Box className='container' >

            <Box className="heading" sx={{ mt: 1 }}>
                <Typography sx={{ alignItems: 'center' }}>
                    <Link to='/restaurantSettings' style={{ display: 'flex', fontSize: '18px', color: '#2B817B', marginLeft: '20px', alignItems: 'center', fontWeight: 'bold' }}>
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
                    Change Location
                </h2>


                <Button variant='contained' sx={{ textTransform: 'capitalize', backgroundColor: '#2B817B', mr: 4 }} onClick={Navigate("/notification")} >
                    Save
                </Button>

            </Box>

            <Box sx={{
                //  border: '1px solid red',
                width: '95%', margin: '10px auto', display: 'flex'
            }}>
                <Box sx={{
                    //  border: '1px solid red', 
                    width: '50%'
                }}>
                    <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                        Details Name
                    </InputLabel>
                    <input placeholder='4474 Bridgeport Rd. Canada' varaint='filled' className='input' style={{ width: '90%' }} />



                    {/* <Box sx={{}}> */}
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid sx={{ width: '50%' }}>

                            <InputLabel sx={{
                                fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1,
                                //  border: '1px solid red',
                            }} >
                                New Latitude Coordinate
                            </InputLabel>
                            <input placeholder='41.40338' varaint='filled' className='input' style={{ width: '80%' }} />
                        </Grid>
                        <Grid sx={{ width: '50%' }}>

                            <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                                New Longtitude Coordinate
                            </InputLabel>
                            <input placeholder='41.40338' varaint='filled' className='input' style={{ width: '80%' }} />
                        </Grid>
                    </Grid>

                    {/* </Box>s */}
                </Box>
                <Box sx={{ width: '50%', ml: 2, }}>
                    <Box sx={{ justifyContent: 'space-between', display: 'flex', width: '95%' }}>

                        <InputLabel sx={{ fontWeight: 'bold', color: '#1A1824', fontSize: '14px', my: 1 }} >
                            Note
                        </InputLabel>

                        <Typography sx={{ fontWeight: 'bold' }}>
                            {NoteLength}/80
                        </Typography>
                    </Box>
                    <textarea className='input' style={{ color: '#1A1824', width: '90%', height: '16.5vh' }} value={Note} onChange={(e) => setNote(e.target.value)} />
                </Box>




            </Box>
            <Box sx={{
                // border: '1px solid red',
                height: '46vh', width: '90%',
                margin: '10px auto', borderRadius: '10px'
            }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.7833341383803!2d-123.1406885242424!3d49.261552472251225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673b8a148ad51%3A0x811f2535717c3893!2s1488%20W%2011th%20Ave%2C%20Vancouver%2C%20BC%20V6H%203J3%2C%20Canada!5e0!3m2!1sen!2s!4v1692947730541!5m2!1sen!2s" width='100%' height='100%' style={{ border: 0, borderRadius: '10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>

        </Box>
    )
}

export default EditResAddress
