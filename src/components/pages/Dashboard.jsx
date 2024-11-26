import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Images from "./Images";
import HeaderMenu from "./HeaderMenu";
import { useEffect, useState } from "react";
import API from "../../api/backend";

const Dashboard = () => {
  const [tags, setTags] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    const responseTags = await API.call('folders/tags', "GET", null);
    setTags(responseTags.res);
    const responseAlbums = await API.call('folders/albums', "GET", null);
    setAlbums(responseAlbums.res)
  }

  const faces = ["Leogin", "Majo", "Mykel", "John", "Patrick", "Alfred"];

  const splitToColumn = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const faceRows = splitToColumn(faces, 3);

  return (
    <div className="min-h-screen bg-white">
      <HeaderMenu />
      <Images />
      <div
        className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-12 w-[75%]  max-w-full"
        style={{ margin: "0px auto" }}
      >
        {/* Albums */}
        <Card className="bg-white shadow-lg !rounded-lg">
          <CardContent>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#872434",
                "&:hover": {
                  backgroundColor: "#7f1d1d",
                },
                color: "#fff",
              }}
            >
              Albums
            </Button>
            {albums.map((album, index) => (
              <Typography key={index} variant="body2" className="p-1">
                {album.name}
              </Typography>
            ))}
          </CardContent>
        </Card>
        {/* Tags */}
        <Card className="bg-white shadow-lg !rounded-lg">
          <CardContent>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#872434",
                "&:hover": {
                  backgroundColor: "#7f1d1d",
                },
                color: "#fff",
              }}
            >
              Tags
            </Button>
            {tags.map((tag, index) => (
              <Typography key={index} variant="body2" className="p-1">
                {tag.name}
              </Typography>
            ))}
          </CardContent>
        </Card>
        {/* Faces */}
        <Card className="bg-white shadow-lg !rounded-lg">
          <CardContent>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#872434",
                "&:hover": {
                  backgroundColor: "#7f1d1d",
                },
                color: "#fff",
              }}
            >
              Faces
            </Button>
            {faceRows.map((row, rowIndex) => (
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
        {/* Upload Photos */}
        <Card className="bg-white shadow-lg !rounded-lg">
          <CardContent>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#872434",
                "&:hover": {
                  backgroundColor: "#7f1d1d",
                },
                color: "#fff",
              }}
            >
              Upload Photos
            </Button>
            {["Batch Folder", "Folder", "Photo"].map((text, index) => (
              <Box key={index} mb={1}>
                <Button
                  className="p1 underline text-custom-maroon hover:cursor-pointer hover:underline"
                  style={{
                    padding: 10,
                    minWidth: "auto",
                    background: "none",
                    textTransform: "none",
                    boxShadow: "none",
                    fontSize: "1.25rem",
                  }}
                >
                  {text}
                </Button>
              </Box>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
