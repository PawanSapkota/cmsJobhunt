import React from "react";
import { Link } from "react-router-dom";

const Branding = () => {
  return (
    <div className="site-branding flex items-center gap-2  w-4/5 mx-auto pt-4">
      <Link
        to="/"
        className="bg-gray-100 hover:bg-blue-700 p-2 rounded-full cursor-pointer group transition-all ease-in-out duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="fill-blue-700 group-hover:fill-white  transition  ease-in-out duration-100"
        >
          <path
            id="Union_1"
            data-name="Union 1"
            d="M2,16a1,1,0,0,1-1-1V13H15v2a1,1,0,0,1-1,1ZM0,11V5A1,1,0,0,1,1,4H4V1A1,1,0,0,1,5,0h6a1,1,0,0,1,1,1V4h3a1,1,0,0,1,1,1v6ZM10,4V2H6V4Z"
          ></path>
        </svg>
      </Link>
      <Link to="/">
        <h1 className="hover:text-white">
          <span className="text-lg font-semibold ">Job</span>
          <span className="font-medium ">hunt</span>
        </h1>
      </Link>
    </div>
  );
};

export default Branding;
