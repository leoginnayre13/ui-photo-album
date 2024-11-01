import React from 'react';
import bg from '../assets/mainbg.png';
import {Box, Button, TextField, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            {/*Login background image*/}
            <div className="flex-grow bg-cover bg-center relative flex items-center justify-center flex-col"
                 style={{backgroundImage: `url(${bg})`}}>
                {/*<div className="absolute inset-0 bg-black bg-opacity-30"></div>*/}

                {/* Login form modal*/}
                <div>
                    <div className="z-10 w-full max-w-md p-8 bg-white bg-opacity-95 rounded-lg shadow-md">
                        <Typography variant="h5" className="text-center pb-4 text-custom-maroon">
                            University of Batangas Photo Album
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            <div className="space-y-4">
                                <TextField
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    placeholder="username@ub.edu.ph"
                                    fullWidth
                                />
                                <TextField
                                    label="Password"
                                    name="password"
                                    variant="outlined"
                                    placeholder="password"
                                    fullWidth
                                />
                            </div>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: '#872434',
                                    '&:hover': {
                                        backgroundColor: '#7f1d1d',
                                    },
                                    color: '#fff',
                                    marginTop: '10px'
                                }}
                            >
                                Sign In
                            </Button>
                        </Box>

                        {/*Forgot password and Register Links*/}
                        <div className="flex justify-between text-sm mt-4">
                            <Link to = "/forgot-password" className="text-gray-600 hover:underline">
                                Forgot password?
                            </Link>
                            <Link to = "/register" className="text-gray-600 hover:underline">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
