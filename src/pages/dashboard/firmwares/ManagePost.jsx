import {
  TablePagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import {
  useGetFirmwaresQuery,
  useRemoveFirmwareMutation,
} from "../../../redux/features/PostSlice";
import MyLoader from "../../../components/MyLoader";

const ManagePost = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [removeId] = useRemoveFirmwareMutation();
  const { data: firmwares, isLoading } = useGetFirmwaresQuery({
    page: page,
    limit: rowsPerPage,
  });
  const handleRemove = (id) => {
    removeId(id);
  };
  return (
    <div>
      <TableContainer>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <MyLoader />
            ) : (
              firmwares?.data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <span
                      onClick={() => handleRemove(item._id)}
                      className="px-2 bg-green-50 cursor-pointer"
                    >
                      Delete
                    </span>
                    {/* <span className="px-2 bg-green-50">Edit</span> */}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <DataTable firmwares={firmwares?.data} /> */}
      <TablePagination
        component="div"
        count={firmwares?.count || 0}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) =>
          setRowsPerPage(parseInt(event.target.value))
        }
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 30]}
      />
    </div>
  );
};

export default ManagePost;
