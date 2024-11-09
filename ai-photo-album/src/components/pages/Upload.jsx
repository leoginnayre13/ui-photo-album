import {
  Button,
  TextField,
  Box,
  InputAdornment,
  Typography,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UploadIcon from "@mui/icons-material/Upload";
import HeaderMenu from "./HeaderMenu";
import { Delete } from "@mui/icons-material";

const Upload = () => (
  <div className="min-h-screen bg-white">
    <HeaderMenu />

    {/* Search and Create Album Button */}
    <div className="w-[75%] m-auto mt-8">
      <div className="text-center text-4xl font-bold text-custom-maroon">
        UPLOAD IMAGE
      </div>
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
          <Button variant="outlined" className="!bg-gray-200 !text-black">
            Back
          </Button>
          <div className="flex m-1 p-1">
            <Typography className="!text-left">Album Name:</Typography>
            <Typography className="!text-left !font-bold text-custom-red">
              Sample Album
            </Typography>
          </div>
        </div>
        <div>
          <div className="flex">
            <Button variant="text" className="!text-custom-red">
              <Delete />
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="flex justify-between items-start w-[100%]">
        <div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">Select All</label>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Placeholder for images */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative bg-gray-300 p-2 rounded">
                <img
                  src={`https://picsum.photos/150?random=${index}`}
                  alt={`Image ${index}`}
                  className="w-[150px] h-[150px] object-cover rounded"
                />
                <input type="checkbox" className="absolute top-2 left-2" />
                <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1">
                  Image {index + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-4 flex space-x-2">
            <Button variant="outlined" className="!text-black">
              Tag 1
            </Button>
            <Button variant="outlined" className="!text-black">
              Tag 2
            </Button>
            <Button variant="outlined" className="!text-black">
              Tag 3
            </Button>
          </div>
        </div>

        <div className="w-1/4">
          <Button variant="contained" className="bg-red-800 !mb-4 w-full">
            Create Tag
          </Button>
          <ul className="space-y-2">
            {/* Placeholder for selected images */}
            {[...Array(3)].map((_, index) => (
              <li
                key={index}
                className="bg-gray-200 p-2 rounded flex items-center justify-between"
              >
                <img
                  src={`https://picsum.photos/150?random=${index + 4}`}
                  alt={`preview-${index}`}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                Image {index + 4}
                <input type="checkbox" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <Button variant="outlined" className="!mr-4">
          &larr; Previous
        </Button>
        <span>Pages 1/10</span>
        <Button variant="outlined" className="!ml-4">
          Next &rarr;
        </Button>
      </div>

      {/* File Upload */}
      <div className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg mt-4">
        <input
          accept="image/*"
          className="hidden"
          id="file-input"
          type="file"
          multiple
        />
        <label htmlFor="file-input" className="cursor-pointer">
          <Button variant="text" component="span" startIcon={<UploadIcon />}>
            Upload File
          </Button>
        </label>
      </div>
    </div>

    {/* Modal for creating a new tag */}
    <Modal
      open={false}
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
        <TextField label="Tag Name" fullWidth />
        <div className="!flex !justify-end">
          <Button
            className="!mt-4 !bg-custom-red !text-white"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </Box>
    </Modal>
  </div>
);

export default Upload;
