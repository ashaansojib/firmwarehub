import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch("/data/marquee.json")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);
  return (
    <Marquee pauseOnHover={true} className="mb-2 max-w-[750px] mx-auto">
      {ads.map((ad) => (
        <h3 className="px-4 underline text-primary" key={ad.id}>
          <Link to="https://wa.me/+8801892932859" target="_blank">{ad.name}</Link>
        </h3>
      ))}
    </Marquee>
  );
};

export default Upcoming;
