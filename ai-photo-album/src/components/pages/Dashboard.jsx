import React from 'react';
import {Avatar, Box, Button, Card, CardContent, Typography} from "@mui/material";
import Images from "./Images";

const Dashboard = () => {

    const albums = ["Christmas Party 2023", "Summer Outing 2024", "Outreach 2024", "At the Room 202", "Dinner at 7/11"];
    const tags = ["Investiture", "Outreach program", "Etesep defense", "Graduation 2022"];
    const faces = ["Leogin", "Majo", "Mykel","John", "Patrick","Alfred"];

    // split faces into 3 columns
    const splitToColumn = (arr, chunkSize) => {
      const result = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
          result.push(arr.slice(i, i + chunkSize));
      }
      return result;
    }

    const faceRows = splitToColumn(faces, 3);

    return (
        <div className="min-h-screen bg white">
            <Images/>
            <div className="p4 grid grid-cols-1 lg:grid-cols-4 gap-12 w-[75%] max-w-full" style={{margin:'0px auto'}}>
                {/*albums*/}
                <Card className="bg-white shadow-lg !rounded-lg">
                    <CardContent>
                        {/*<Typography variant="h6" className="p-1 text-center bg-custom-maroon text-white shadow-lg rounded-lg">Album</Typography>*/}
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
                        }}>Albums</Button>
                        {albums.map((album, index) => (
                            <Typography key={index} variant="body2" className="p-1">{album}</Typography>
                        ))}
                    </CardContent>
                </Card>
                {/*tags*/}
                <Card className="bg-white shadow-lg !rounded-lg">
                    <CardContent>
                        {/*<Typography variant="h6" className="p-1 text-center bg-custom-maroon text-white shadow-lg rounded-lg">Tags</Typography>*/}
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
                            }}>Tags</Button>
                        {tags.map((tag,index) => (
                            <Typography key={index} variant="body2" className="p-1">{tag}</Typography>
                        ))}
                    </CardContent>
                </Card>
                {/*faces*/}
                <Card className="bg-white shadow-lg !rounded-lg">
                    <CardContent>
                        {/*<Typography variant="h6" className="p-1 text-center bg-custom-maroon text-white shadow-lg rounded-lg">Faces</Typography>*/}
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
                            }}>Faces</Button>
                            {faceRows.map((row,rowIndex) => (
                                <Box key={rowIndex} className="flex justify-around mb-2 pt-2">
                                    {row.map((face, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <Avatar className="bg-red-800">{face[0]}</Avatar>
                                            <Typography variant="caption">{face}</Typography>
                                        </div>
                                    ))}
                                </Box>
                            ))}
                    </CardContent>
                </Card>
                {/*Upload single/bulk images*/}
                <Card className="bg-white shadow-lg !rounded-lg">
                    <CardContent>
                        {/*<Typography variant="h6" className="p-1 text-center mb-2 bg-custom-maroon text-white shadow-lg rounded-lg">Upload Photo</Typography>*/}
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
                            }}>Upload Photos</Button>
                            <div>
                                <Button
                                className="p-1 underline text-custom-maroon hover:cursor-pointer hover:underline"
                                style={{padding:10, minWidth:'auto', background:'none', textTransform:'none',
                                    boxShadow:'none', fontSize: '1.25rem'}}
                                >
                                    Batch Folder
                                </Button>
                                </div>
                            <div>
                                <Button
                                className="p-1 underline text-custom-maroon hover:cursor-pointer hover:underline"
                                style={{padding:10, minWidth:'auto', background:'none', textTransform:'none',
                                    boxShadow:'none', fontSize: '1.25rem'}}
                                >
                                    Folder
                                </Button>
                            </div>
                            <div>
                                <Button
                                className="p-1 underline text-custom-maroon hover:cursor-pointer hover:underline"
                                style={{padding:10, minWidth:'auto', background:'none', textTransform:'none',
                                    boxShadow:'none', fontSize: '1.25rem'}}
                                >
                                    Photo
                                </Button>
                            </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
