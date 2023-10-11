import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./profileMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
        className="navbar-logo"
      />
      <div className="search-bar">
        <div className="searchBarText"> Any where</div>
        <div className="searchBarText">Any week</div>
        <div className="searchBarText2">Add guests </div>
        <div className="search-icon-div">
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="yourHome">Airbnb your home</div>
        <div className="yourHome">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profileDiv">
          <BasicMenu />
          {/* <AccountCircleIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
