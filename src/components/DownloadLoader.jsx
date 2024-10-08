import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DownloadLoader = () => {
  const [count, setCount] = useState(20);
  const [isCounting, setIsCounting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const fileLink = useSelector((state) => {
    return state.fileLink.link;
  });

  useEffect(() => {
    let timer;
    if (isCounting && count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0) {
      setShowMessage(true);
      setIsCounting(false);
    }
    return () => clearInterval(timer);
  }, [isCounting, count]);

  // click to countdonw
  const handleDownloader = () => {
    setIsCounting(true);
    setShowMessage(false);
    setCount(20);
  };
  return (
    <div className="p-2">
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          modi beatae. Consectetur ad sequi exercitationem assumenda ipsa,
          corrupti pariatur maiores ex, quasi eveniet dolore labore optio ab
          officia voluptatum dolorum.
        </p>
        <img src="/web.jpg" className="w-[400px] h-full mx-auto" alt="" />
      </div>
      <div className="p-10 flex justify-center flex-col text-center">
        {showMessage ? (
          <>
          <p className="text-blue-500">Your File is Ready...</p>
          <Link to={fileLink} target="_blank">Download Now</Link>
          </>          
        ) : (
          <>
            <p>Click Here To Start Download File... <span className="text-blue-500 font-semibold">{count}</span></p>
            <Link onClick={handleDownloader} to="#">
              Click Here
            </Link>
          </>
        )}
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, modi
        beatae. Consectetur ad sequi exercitationem assumenda ipsa, corrupti
        pariatur maiores ex, quasi eveniet dolore labore optio ab officia
        voluptatum dolorum.
      </p>
      {/* <span>{fileLink}</span> */}
      <img src="/ads-2.jpeg" className="w-[400px] h-full mx-auto" alt="" />
      <h2>Conclusion: </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, modi
        beatae. Consectetur ad sequi exercitationem assumenda ipsa, corrupti
        pariatur maiores ex, quasi eveniet dolore labore optio ab officia
        voluptatum dolorum.
      </p>
    </div>
  );
};

export default DownloadLoader;
