import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import Header from "./Header";
import Images from "./pages/Images";

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Full-screen background images */}
            <div className="absolute inset-0 z-0">
                <Header />
                <Images />
            </div>

            {/* Overlay for Subtle Blur Effect */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10" />

            {/* Centered Login Form with Subtle Blur Effect */}
            <div className="flex-grow flex flex-col items-center justify-center relative z-20">
                {/* Login Form Modal */}
                <div className="w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-md backdrop-blur-sm">
                    <Typography variant="h5" className="text-center pb-4 text-custom-maroon">
                        Log In
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

                    {/* Forgot password and Register Links */}
                    <div className="flex justify-between text-sm mt-4">
                        <Link to="/forgot-password" className="text-gray-600 hover:underline">
                            Forgot password?
                        </Link>
                        <Link to="/register" className="text-gray-600 hover:underline">
                            Register
                        </Link>
                    </div>
                </div>

                {/* Title Below the Login Form with Subtle Blur Effect */}
                <div className="mt-6 bg-white/20 backdrop-blur-sm p-2 rounded-lg z-20">
                    <Typography variant="h3" className="text-center text-custom-maroon">
                        University of Batangas<br />
                        Photo Album
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Login;
