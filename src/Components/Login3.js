import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField,
  CircularProgress,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { useLocation } from "react-router-dom";
// import { useGetEmployeeByIdQuery } from "api/employee";
// import swal from "sweetalert";
// import { useVerifyPINMutation } from "api/authenticate";

const DecreaaseonMobile = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("dm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Login3 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { data: user, isLoading } = (lsocation.state.id);
  // const [verifyPin] = useVerifyPINMutation();
  const [clicked, setClicked] = React.useState(false);
  const [dataArray, setDataArray] = useState([]);
  const numberArray = ["→", 0, "X", 9, 8, 7, 6, 5, 4, 3, 2, 1].reverse();
  const [loading, setLoading] = useState(false);

  const handleClick = (value) => {
    // if (value === "X") {
    //   const tmpArray = dataArray;
    //   tmpArray.pop();
    //   setDataArray([...tmpArray]);
    //   setClicked(false);
    // } else if (value === "→") {
    //   if (dataArray.length === 4) {
    //     setLoading(true);
    //     verifyPin({id:user.data._id,pin:dataArray.join("")}).then((res) => {
    //       if (res.data){
    //       localStorage.setItem("employee", JSON.stringify(user.data));
    //       setLoading(false);
    //       navigate("/dashboard");}
    //       else{
    //         setLoading(false);
    //       }
    //     });
    //   } else swal("Warning!", "Please enter the complete PIN", "warning");
    // } else if (dataArray.length < 4) {
    //   setDataArray([...dataArray, value]);
    //   setClicked(true);
    // }
  };

  return (<>

  {/* // isLoading ? ( */}
    {/* <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box> */}
  {/* // ) : (/ */}
    <>
      {/* {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      ) : ( */}
        <>
          <Grid container spacing={0} mt={2}>
            <Grid item xs={12} sx={{ padding: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      marginLeft: 9,
                      color: "#1A1824",
                      fontWeight: "600",
                      fontFamily: "Outfit",
                      fontSize: "24px",
                    }}
                  >
                    Enter Pin
                  </Typography>
                  <DecreaaseonMobile>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{
                        color: "#9EA3AE",
                        fontFamily: "Outfit",
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Please enter your 4 digit PIN.
                    </Typography>
                  </DecreaaseonMobile>
                </Box>
              </Box>
              <Box>
                <Link to={"/operators"}>
                  <Button
                    sx={{
                      position: "absolute",
                      content: '""',
                      marginTop: "-40px",
                      maxWidth: 3,
                    }}
                  >
                    <img
                      src="images/leftAngle.svg"
                      style={{ fontSize: "20px", color: "#1A1824" }}
                    />
                  </Button>
                </Link>
              </Box>
            </Grid>
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
              <Typography sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Link to={"/forgotpin"}>
                  <span
                    style={{
                      color: "#2B817B",
                      fontFamily: "Outfit",
                      textDecorationLine: "underline",
                      fontSize: "16px",
                    }}
                  >
                    Forgot Pin ?
                  </span>{" "}
                </Link>
              </Typography>
              {/* -------------button ------ */}

            </Container>
          </Grid>
        </>
      {/* )} */}
    </>
  </>
  );
};
