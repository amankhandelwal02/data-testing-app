import React from "react";
import logo from "../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { set } from "../features/SearchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-3 flex items-center sticky top-0 bg-white z-10 shadow-md">
      <div className="flex-1 sm:flex-none"
      >
        <Link to="/">
        <img src={logo} width={70} height={40} alt="" />
        </Link>
      </div>
      <div className="bg-[#f6f6f4] px-5 rounded-lg items-center justify-center hidden sm:flex flex-1">
        <SearchIcon />
        <input
          type="text"
          className="p-2 bg-[#f6f6f4] flex-1 border-none outline-none"
          placeholder="search here..."
          onChange={(e) => {
            dispatch(set({ type: "SET_SEARCH", search: e.target.value }));
          }}
        />
      </div>
      <Link to="/teams">
        <div className="mx-3 flex items-center justify-center space-x-3">
          <button className="bg-[#000000] hover:opacity-60 active:opacity-80 duration-300 text-white font-semibold px-8 py-2 rounded-md">
            Teams View
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Header;
