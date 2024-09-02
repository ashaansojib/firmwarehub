import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Upcoming from "../sidebar/Upcoming";
import { useGetFirmwaresQuery } from "../../redux/features/PostSlice";

const Home = () => {
  const [age, setAge] = useState("");
  const { data } = useGetFirmwaresQuery();
  console.log(data);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="py-2">
      <Upcoming />
      <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
        <input type="text" placeholder="Type Your File Name..." className="" />
        {/* <button className='default-btn'>Brand</button> */}
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel id="demo-select-small-label">Select Brand</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* <Button variant='contained' size='small'>brand</Button>
                <Button variant='contained' size='small'>unlocked</Button> */}
        {/* <button className='default-btn'>Models</button> */}
        {/* <button className='default-btn'>Countries</button> */}
      </div>
      {/* files area */}
      <article className="post">
        <h3 className="pb-2">Oppo F21s EFS Reset Firmware v12.3.00</h3>
        <div className="space-x-1 text-sm py-1">
          <span className=" px-2 text-white bg-red-400">Paid</span>
          {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
          <span className="px-2 bg-green-50">1.9 GB</span>
          <span className="px-2 bg-orange-50">Chipset</span>
          <span className="px-2 bg-gray-50">Jan 2024</span>
        </div>
        <Link to="/download/1" className="post-btn">
          DOWNLOAD
        </Link>
      </article>
      <article className="post">
        <h3 className="pb-4">Symphony L42 Flash File HW2 SC6531E</h3>
        <div className="space-x-1 text-sm">
          <span className=" px-2 text-white bg-red-400">Paid</span>
          {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
          <span className="px-2 bg-green-50">1.9 GB</span>
          <span className="px-2 bg-orange-50">Chipset</span>
          <span className="px-2 bg-gray-50">Jan 2024</span>
        </div>
        <Link to="/download/1" className="post-btn">
          DOWNLOAD
        </Link>
      </article>
      <article className="post">
        <h3 className="pb-4">Xiaomi Note 9 Flash File MT6765</h3>
        <div className="space-x-1 text-sm">
          <span className=" px-2 text-white bg-red-400">Paid</span>
          {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
          <span className="px-2 bg-green-50">1.9 GB</span>
          <span className="px-2 bg-orange-50">Chipset</span>
          <span className="px-2 bg-gray-50">Jan 2024</span>
        </div>
        <Link to="/download/1" className="post-btn">
          DOWNLOAD
        </Link>
      </article>
      <article className="post">
        <h3 className="pb-4">Bravo B901 Flash File SC6531E</h3>
        <div className="space-x-1 text-sm">
          {/* <span className=' px-2 text-white bg-red-400'>Paid</span> */}
          <span className="text-sm px-2 text-white bg-green-400">Free</span>
          <span className="px-2 bg-green-50">1.9 GB</span>
          <span className="px-2 bg-orange-50">Chipset</span>
          <span className="px-2 bg-gray-50">Jan 2024</span>
        </div>
        <Link to="/download/1" className="post-btn">
          DOWNLOAD
        </Link>
      </article>
      <article className="post">
        <h3 className="pb-4">Lava Benco P30 Flash File HW2 SC6531E</h3>
        <div className="space-x-1 text-sm">
          <span className=" px-2 text-white bg-red-400">Paid</span>
          {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
          <span className="px-2 bg-green-50">1.9 GB</span>
          <span className="px-2 bg-orange-50">Chipset</span>
          <span className="px-2 bg-gray-50">Jan 2024</span>
        </div>
        <Link to="/download/1" className="post-btn">
          DOWNLOAD
        </Link>
      </article>
      <article className="post">
        <h3 className="pb-4">Tinmo F21 Flash File MT6261DA</h3>
        <div className="space-x-1 text-sm">
          <span className=" px-2 text-white bg-red-400">Paid</span>
          {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
          <span className="px-2 bg-green-50">1.9 GB</span>
          <span className="px-2 bg-orange-50">Chipset</span>
          <span className="px-2 bg-gray-50">Jan 2024</span>
        </div>
        <Link to="/download/1" className="post-btn">
          DOWNLOAD
        </Link>
      </article>
      <article className="post">
        <h3 className="pb-4">Itel IT2127 Flash File HW2 SC6531E</h3>
        <div className="space-x-1 text-sm">
          {/* <span className=' px-2 text-white bg-red-400'>Paid</span> */}
          <span className="text-sm px-2 text-white bg-green-400">Free</span>
          <span className="px-2 bg-green-50">1.9 GB</span>
          <span className="px-2 bg-orange-50">Chipset</span>
          <span className="px-2 bg-gray-50">Jan 2024</span>
        </div>
        <Link to="/download/1" className="post-btn">
          DOWNLOAD
        </Link>
      </article>
      <div className="py-3 flex justify-center">
        <Pagination count={10} shape="rounded" />
      </div>
    </div>
  );
};

export default Home;
