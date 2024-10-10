import React from "react";
import { TopicTitle } from "../../components/TopicTitle";
import { Link } from "react-router-dom";
import { useAllSharedLinksQuery } from "../../redux/features/SharedLinkSlice";
import MyLoader from "../../components/MyLoader";

const Drivers = () => {
  const { data: allLinks, isLoading } = useAllSharedLinksQuery();

  return (
    <div className="aside-item">
      <TopicTitle title="Update Tools & Drivers" />
      {isLoading ? (
        <MyLoader />
      ) : (
        allLinks?.data.map((item) => (
          <Link key={item._id} to={item.url} className="inline-block mb-1 text-sm underline">
            {item.title}
          </Link>
        ))
      )}
    </div>
  );
};

export default Drivers;
