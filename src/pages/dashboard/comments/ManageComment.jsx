import React from "react";
import { DTitile } from "../../../components/DTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  useAllCommentsQuery,
  useRemoveCommentMutation,
} from "../../../redux/features/CommentSlice";
import MyLoader from "../../../components/MyLoader";

const ManageComment = () => {
  const [removeComment] = useRemoveCommentMutation();
  const { data: comment, isLoading } = useAllCommentsQuery();

  const handleRemove = (id) => {
    removeComment(id);
  };
  return (
    <section className="p-2">
      <DTitile title="Manage all comments..." />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <MyLoader />
          ) : (
            comment?.data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.comment}</TableCell>
                <TableCell>
                  <span onClick={() => handleRemove(item._id)}>delete</span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default ManageComment;
