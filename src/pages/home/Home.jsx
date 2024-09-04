import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TablePagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Upcoming from "../sidebar/Upcoming";
import { useGetFirmwaresQuery } from "../../redux/features/PostSlice";
import MyLoader from "../../components/MyLoader";
import moment from "moment";

const Home = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {
    data: firmwares,
    isLoading,
    refetch,
  } = useGetFirmwaresQuery({
    page: page + 1,
    limit: rowsPerPage,
  });
  // console.log(firmwares.data);

  const handleChange = (event) => {
    setBrand(event.target.value);
  };
  useEffect(() => {
    refetch();
  }, [page, rowsPerPage, refetch]);
  console.log(page, rowsPerPage);
  return (
    <div className="py-2">
      <Upcoming />
      <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type Your File Name..."
          className=""
        />
        {/* <button className='default-btn'>Brand</button> */}
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel id="demo-select-small-label">Select Brand</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={brand}
            label="brand"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Oppo">Oppo</MenuItem>
            <MenuItem value="Vivo">Vivo</MenuItem>
            <MenuItem value="Xiaomi">Xiaomi</MenuItem>
            <MenuItem value="Realme">Realme</MenuItem>
            <MenuItem value="Symphony">Symphony</MenuItem>
            <MenuItem value="Itel">Itel</MenuItem>
            <MenuItem value="Tecno">Tecno</MenuItem>
            <MenuItem value="Infinix">Infinix</MenuItem>
            <MenuItem value="Featured">Featured</MenuItem>
          </Select>
        </FormControl>
        {/* <Button variant='contained' size='small'>brand</Button>
                <Button variant='contained' size='small'>unlocked</Button> */}
        {/* <button className='default-btn'>Models</button> */}
        {/* <button className='default-btn'>Countries</button> */}
      </div>
      {/* files area */}
      {isLoading ? (
        <MyLoader />
      ) : (
        firmwares?.data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? true // Corrected this part
              : item.title.toLowerCase().includes(search.toLowerCase());
          })
          .map(
            (
              firm // Corrected the chaining issue
            ) => (
              <article key={firm._id} className="post">
                <h3 className="pb-2">{firm.title}</h3>
                <div className="space-x-1 text-sm py-1">
                  <span
                    className={`px-2 text-white ${
                      firm.status === "Paid" ? "bg-red-400" : "bg-green-400"
                    }`}
                  >
                    {firm.status}
                  </span>
                  <span className="px-2 bg-green-50">{firm.size}</span>
                  <span className="px-2 bg-orange-50">{firm.chipset}</span>
                  <span className="px-2 bg-gray-50">
                    {moment(firm.createdAt).format("DD MMM, YYYY")}
                  </span>
                </div>
                <Link to={`/page/${firm.filename}`} className="post-btn">
                  DOWNLOAD
                </Link>
              </article>
            )
          )
      )}

      <div className="py-3 flex justify-center">
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
    </div>
  );
};

export default Home;
