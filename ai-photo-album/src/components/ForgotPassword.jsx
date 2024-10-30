import React from "react";
import {Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg from '../assets/mainbg.png'

const ForgotPassword = () => {
    const navigate = useNavigate();
  return (
      <div className="min-h-screen flex flex-col">
        <div
          className="flex-grow bg-cover bg-center relative flex items-center justify-center flex-col"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/*Forgot password form*/}
          <div className="z-10 w-full max-w-md p-8 bg-white bg-opacity-95 rounded-lg shadow-md">
            <Typography variant="h5" className="text-center pb-4 text-red-800">
              Reset your password
            </Typography>
            <Box component="form" NoValidate autoComplete="off">
                <div className="space-y-4">
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: '#991b1b',
                        '&:hover': {
                            backgroundColor: '#7f1d1d',
                        },
                        color: '#fff', // White text color
                        marginTop: '10px'
                    }}
                >
                    Submit
                </Button>
            </Box>
            {/*Back to Sign in*/}
            <div className="flex justify-center text-sm mt-4">
              <a href="/" className="text-red-800 hover:underline">
                  Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ForgotPassword;
