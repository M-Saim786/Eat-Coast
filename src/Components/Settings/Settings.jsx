import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

import { BsChevronRight } from 'react-icons/bs'

import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineStar } from 'react-icons/hi'
import { MdSupportAgent, MdOutlinePrivacyTip } from 'react-icons/md'
import { TbHelpOctagon } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom';
// import {MdOutlinePrivacyTip} from 'react-icons/tb'
// import {TbHelpOctagon} from 'react-icons/tb'


function Settings() {


  const data = {
    labels: [],
    datasets: [
      {
        data: [32, 25, 9, 10, 24],
        color: ['#FF9933', '#158FAD', '#FF8D85', '#7B49E5', '#7ECC49'],
        // hovercolor: [/'#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    cutoutPercentage: 50, // Adjust this to control the thickness of the donut
  };


  const Navigate = useNavigate()

  return (
    <Box className='container' >
      <Box className="settings" sx={{ p: 2 }}>

        <Box sx={{
          // border: '1px solid red',
          display: 'flex',
          // p: 2
          // flexDirection:'row'
        }}>

          <Box className="" sx={{
            border: '1px solid #E1E1E6', width: '50%',
            borderRadius: '5px',
            textAlign: 'center',
            // border: '1px solid red',
            // height:'28vh'
          }}>
            <Typography variant='h6' sx={{ fontFamily: 'outfit', fontWeight: 'bold' }}>
              Total Subcription
            </Typography>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

            }}>

              <Box sx={{ width: '30%', mt: -1 }}>
                <Doughnut data={data} options={options} />
              </Box>
              <Box sx={{
                // border:'1px solid red',
                my: -1,
                fontSize: '14px'
              }}>
                <List>
                  <ListItem sx={{ color: '#FF8D85', padding: '5px 10px' }}>
                    <Typography sx={{ mr: 3 }}>
                      9%
                    </Typography>
                    Dietary subscription
                  </ListItem>
                  <ListItem sx={{ color: '#158FAD', padding: '5px 10px' }}>
                    <Typography sx={{ mr: 3 }}>
                      25%
                    </Typography>
                    Multiple subscription
                  </ListItem>
                  <ListItem sx={{ color: '#7B49E5', }}>
                    <Typography sx={{ mr: 3 }}>
                      10%
                    </Typography>
                    Personal subscription
                  </ListItem>
                  <ListItem sx={{ color: '#7ECC49', padding: '5px 10px' }}>
                    <Typography sx={{ mr: 3 }}>
                      24%
                    </Typography>
                    Single order
                  </ListItem>
                  <ListItem sx={{ color: '#FF9933', padding: '5px 10px' }}>
                    <Typography sx={{ mr: 3 }}>
                      32%
                    </Typography>
                    Bussines subscription
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>


          <Box className="" sx=
            {{
              border: '1px solid #E1E1E6',
              width: '50%',
              borderRadius: '5px',
              textAlign: 'center',
              p: 2, ml: 2
            }}>
            <Typography variant='h6' sx={{
              color: '#545359', fontFamily: 'outfit',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Total Meals Prepared
            </Typography>
            <Typography variant='h1' sx={{ color: '#000000', fontSize: '30px', fontWeight: 'bold', my: 4 }}>
              1352
            </Typography>
            <Typography sx={{ color: '#9EA3AE', fontSize: '1rem', fontWeight: 'bold' }}>
              Meals Plan
            </Typography>
          </Box>
        </Box>

        <Box >
          <List sx={{ width: '40%', margin: '10px auto', cursor: 'pointer' }}>

            <ListItem onClick={() => Navigate("/profile")} sx={{ borderBottom: '1px solid #E1E1E6', padding: '8px' }}>
              {/* <Link onChange={()=>Navigate("/profile")}> */}
              <AiOutlineUser style={{ padding: '5px', border: '1px solid #E1E1E6', fontSize: '16px', color: '#2B817B', marginRight: '10px', borderRadius: '5px' }} />
              Profile <BsChevronRight style={{ position: 'absolute', right: '1rem' }} />
              {/* </Link> */}
            </ListItem>

            <ListItem sx={{ borderBottom: '1px solid #E1E1E6', padding: '8px' }}>
              <AiOutlineUser style={{ padding: '5px', border: '1px solid #E1E1E6', fontSize: '16px', color: '#2B817B', marginRight: '10px', borderRadius: '5px' }} />
              Dokumens <BsChevronRight style={{ position: 'absolute', right: '1rem' }} />
            </ListItem>

            <ListItem sx={{ borderBottom: '1px solid #E1E1E6', padding: '8px', display: 'flex', alignItems: 'center' }} onClick={()=>Navigate('/helpcenter')}>
              {/* <Link to='/helpcenter' style={{ display: 'flex', alignItems: 'center' }}> */}
                <MdSupportAgent style={{ padding: '5px', border: '1px solid #E1E1E6', fontSize: '16px', color: '#2B817B', marginRight: '10px', borderRadius: '5px' }} />
                Help Center <BsChevronRight style={{ position: 'absolute', right: '1rem' }} />
              {/* </Link> */}
            </ListItem>

            <ListItem sx={{ borderBottom: '1px solid #E1E1E6', padding: '8px' }}>
              <HiOutlineStar style={{ padding: '5px', border: '1px solid #E1E1E6', fontSize: '16px', color: '#2B817B', marginRight: '10px', borderRadius: '5px' }} />
              Customer Feedback <BsChevronRight style={{ position: 'absolute', right: '1rem' }} />
            </ListItem>

            <ListItem sx={{ borderBottom: '1px solid #E1E1E6', padding: '8px' }}>
              <TbHelpOctagon style={{ padding: '5px', border: '1px solid #E1E1E6', fontSize: '16px', color: '#2B817B', marginRight: '10px', borderRadius: '5px' }} />
              Contact Support <BsChevronRight style={{ position: 'absolute', right: '1rem' }} />
            </ListItem>

            <ListItem sx={{ borderBottom: '1px solid #E1E1E6', padding: '8px' }}>
              <Link to='/PrivacyPolicy'>
                <MdOutlinePrivacyTip style={{ padding: '5px', border: '1px solid #E1E1E6', fontSize: '16px', color: '#2B817B', marginRight: '10px', borderRadius: '5px' }} />    Privacy & Policy <BsChevronRight style={{ position: 'absolute', right: '1rem' }} />
              </Link>
            </ListItem>

            <ListItem sx={{ border: '1px solid #FFF1F1', mt: 2, borderRadius: '5px', justifyContent: 'center', color: '#E75C62', fontWeight: 'bold' }}>
              {/* <Link to='/profile'> */}
              Logout
              {/* </Link> */}
            </ListItem>
          </List>
        </Box>


      </Box>


    </Box>


  )
}

export default Settings
