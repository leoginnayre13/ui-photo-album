import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/backend";

function MyPhotos() {
  const { state } = useLocation(); 
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchTagDetails();
  }, [])

  const fetchTagDetails = async () => {
    const response = await API.call('photos/' + state.id, "GET", null);
    console.error("jjjj", response.res)
    setImages(response.res.urls[0]? response.res.urls[0].split(","): [])
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-[75%] m-auto mt-8">
        <div className="text-center text-4xl font-bold text-custom-red">
         {state.title}
        </div>

        {/* Back Icon */}
        <Box className="mt-4">
          <IconButton
            onClick={() => navigate(-1)} // This will navigate back
            className="!text-custom-red !p-2"
          >
            <ArrowBackIcon />
            Back
          </IconButton>
        </Box>

        <div className="grid grid-cols-4 gap-2 p-4">
          {images.map((image, index) => (
            <div key={index} className="relative p-2 rounded">
              <img
                src={image}
                className="w-[250px] h-[150px] object-cover rounded"
              />
              {/* <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1">
                {image.name}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPhotos;
