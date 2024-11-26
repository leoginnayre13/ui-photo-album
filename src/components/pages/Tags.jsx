import HeaderMenu from "./HeaderMenu.jsx";
import {
  Box,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import API from "../../api/backend.js";
import { Link } from "react-router-dom";

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags();
  }, [])

  const fetchTags = async () => {
    const response = await API.call('folders/tags', "GET", null);
    setTags(response.res)
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderMenu />

      {/* Search and Title */}
      <div className="w-[75%] m-auto mt-8">
        <div className="text-center text-4xl font-bold text-custom-maroon">
          TAGS
        </div>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="flex justify-end"
        >
          <TextField
            id="input-with-icon-textfield"
            className="!rounded-lg px-4 bg-gray-100 !mb-2"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            size="small"
            placeholder="Search"
          />
        </Box>
      </div>

      {/*Table*/}
      <TableContainer
        component={Paper}
        className="shadow-lg rounded-lg !w-[75%] m-auto my-8"
      >
        <Table>
          <TableHead className="bg-custom-maroon">
            <TableRow>
              {["Name", "Created Date", "Owner", "Total Photos"].map(
                (header, index) => (
                  <TableCell key={index} className="!text-white ">
                    <TableSortLabel
                      active={false}
                      direction="asc"
                      sx={{
                        color: "white !important",
                        "&:hover": { color: "white !important" },
                        "& .MuiTableSortLabel-icon": {
                          color: "white !important",
                        },
                      }}
                    >
                      {header}
                    </TableSortLabel>
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tags.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link to="/myphotos" state={{ title: row.name, id: row.id }} >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.createdBy}</TableCell>
                <TableCell>{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/*Pagination*/}
      <TablePagination
        component="div"
        count={10}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
        labelRowsPerPage="Rows per page"
        className="mt-4 !w-[75%] m-auto"
        sx={{
          "& .MuiPaginationItem-root": { color: "white" },
        }}
      />
    </div>
  );
};

export default Tags;
