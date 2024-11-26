import {
  Button,
  TextField,
  Box,
  InputAdornment,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenu from "./HeaderMenu";
import { Close, Delete } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import API from "../../api/backend";

const AlbumUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [openTag, setOpenTag] = useState(false);
  const [imageURLS, setImageURLs] = useState([]);
  const [tags, setTags] = useState([]);
  const [albumName, setAlbumName] = useState(null);
  const [newTag, setNewTag] = useState(null);

  useEffect(() => {
    if (selectedImages.length < 1) return;
    const newImageUrls = [];
    selectedImages.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [selectedImages]);

  useEffect(() => {
    fetchTags();
  }, [])

  function onImageChange(e) {
    setSelectedImages([...e.target.files]);
  }

  const fetchTags = async () => {
    const response = await API.call('folders/tags', "GET", null);
    setTags(response.res);
  }

  const createTag = async () => {
    const payload = {
      name: newTag,
      type: 'TAG'
    }
    const response = await API.call('folders', "POST", payload);
  }

  const createAlbum = async () => {
    const payload = {
      name: albumName,
      type: 'ALB'
    }
    const response = await API.call('folders', "POST", payload);
    console.error("LLLL", response)
    if (response.success) {
      let folderIds = selectedTags.map(tag => tag.id);
      folderIds.push(response.res.id);
      upload(folderIds)
    }
  }

  const upload = async (folderIds) => {
    const formData = new FormData();
    selectedImages.forEach((file) => formData.append("files", file), {
      type: 'application/octet-stream'
    });
    formData.append("request", new Blob([JSON.stringify({ 'tagIds': folderIds})], {
      type: 'application/json'
    }))

    const accessToken = localStorage.getItem('accessToken');

    const requestOptions = {
      method: "POST",
      headers: {
        //  "Content-Type": `multipart/form-data; boundary=----somefixedboundary`,
        "Authorization": "Bearer " + accessToken,
      },
      body: formData,
    };

    const url = 'http://localhost:8083/photos';
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        alert("INN N")
      })
      .catch(error => {
        alert("ERRR")
      });
  }

  const assignTags = (item, event) => {
    if (event.target.checked) {
      setSelectedTags(prevArray => [...prevArray, item]);
    } else {
      setSelectedTags(selectedTags.filter(tag => tag.name !== item.name))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderMenu />
      <div className="w-[75%] m-auto mt-8">
        <div className="text-center text-4xl font-bold text-custom-maroon">
          UPLOAD IMAGE
        </div>
        <Box sx={{ fontSize: "1.25rem" }}>
          <IconButton
            onClick={() => navigate(-1)}
            className="!text-custom-red !p-1.5"
            sx={{
              fontSize: "1.5rem",
              padding: "8px",
            }}
          >
            <ArrowBackIcon />
            <span style={{ fontSize: "1rem" }}>Back</span>{" "}
            {/* Adjust font size of the text */}
          </IconButton>
        </Box>

        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="flex justify-end"
        >
          <TextField
            id="input-with-icon-textfield"
            className="!rounded-lg px-4 bg-gray-100 !mb-2"
            variant="outlined"
            size="small"
            placeholder="Search"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </div>

      <div className="w-[75%] m-auto flex flex-col items-center py-8">
        <div className="!flex w-[100%] mb-2 justify-between">
          <div className="!flex">
            <div className="flex m-1 p-1">
              <Typography className="!text-left" variant="h6">
                Album Name:&nbsp;
              </Typography>
              <TextField label="Album Name" onChange={(txt) => setAlbumName(txt.target.value)}/>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="flex justify-between items-start w-[100%]">
          <div>
            <input
              type="file"
              multiple
              name="myImage"
              enctype="multipart/form-data"
              // Event handler to capture file selection and update the state
              onChange={(event) => onImageChange(event)}
            />
            <div className="grid grid-cols-4 gap-4">
              {/* Placeholder for images */}
              {imageURLS.map((item, index) => (
                <div key={index} className="relative bg-gray-300 p-2 rounded">
                  <img
                    src={item}
                    alt={`Image ${index}`}
                    className="w-[150px] h-[150px] object-cover rounded"
                  />
                  <input type="checkbox" className="absolute top-2 left-2" />
                  <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1">
                    item.name
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-4 flex space-x-2">
              {selectedTags.map((item, index) => (
                <Button variant="outlined" className="!text-black !bg-gray-200">
                  {item.name}
                  <Close className="ml-2" sx={{ fontSize: "16px" }} />
                </Button>
              ))}
            </div>
          </div>

          <div className="w-1/4">
            <Button variant="contained" className="!bg-blue-900 !mb-4 w-full" onClick={() => setOpenTag(!openTag)}>
              Create Tag
            </Button>
            <ul className="space-y-2">
              {/* Placeholder for selected images */}
              {tags.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-200 p-2 rounded flex items-center justify-between"
                >
                  <img
                    src={`https://picsum.photos/150?random=${index + 4}`}
                    alt={`preview-${index}`}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  {item.name}
                  <input type="checkbox" onChange={(event) => assignTags(item, event)} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Upload Button: Updated placement and style */}
        <div className="mt-4 flex ml-80">
          <Button
            variant="outlined"
            className="!text-white !bg-blue-500 w-[150px] mr-4"
            onClick={() => createAlbum()}
          >
            UPLOAD
          </Button>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-between items-center">
          <Button variant="outlined" className="!mr-4">
            &larr; Previous
          </Button>
          <span>Pages 1/10</span>
          <Button variant="outlined" className="!ml-4">
            Next &rarr;
          </Button>
        </div>
      </div>

      {/* Modal for creating a new tag */}
      <Modal
        open={openTag}
        aria-labelledby="create-tag-modal"
        aria-describedby="modal-for-creating-new-tag"
      >
        <Box
          className="bg-white p-4 shadow-lg"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            borderRadius: 2,
          }}
        >
          <h2 id="create-tag-modal" className="mb-4 text-lg font-bold">
            Create Tag
          </h2>
          <TextField label="Tag Name" fullWidth onChange={(txt) => setNewTag(txt.target.value)}/>
          <div className="!flex !justify-end">
            <Button
              className="!mt-4"
              variant="contained"
              onClick={() => setOpenTag(!openTag)}
            >
              Close
            </Button>
            <Button
              className="!mt-4 !bg-custom-red !text-white"
              variant="contained"
              onClick={() => createTag()}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default AlbumUpload;
