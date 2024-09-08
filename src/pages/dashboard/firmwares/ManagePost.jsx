import React from "react";
import { DTitile } from "../../../components/DTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAllFirmwaresQuery } from "../../../redux/features/PostSlice";
import MyLoader from "../../../components/MyLoader";

const ManagePost = () => {
  const { data: firmwares, isLoading } = useAllFirmwaresQuery([]);
  // console.log(firmwares?.data);
  return (
    <section className="p-2">
      <DTitile title="Manage Titile" />
      {/* table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>One</TableCell>
            <TableCell>two</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <MyLoader />
          ) : (
            firmwares?.data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default ManagePost;
