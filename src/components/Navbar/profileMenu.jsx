import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profileFlex"
      >
        <MenuIcon />
        <AccountCircleIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ borderRadius: "2rem" }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/register">Sign up</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/login">Sign in</Link>
        </MenuItem>
        <div
          style={{ height: "1px", backgroundColor: "grey", width: "100%" }}
        />
        <MenuItem onClick={handleClose}>Airbnb Your Home</MenuItem>
        <MenuItem onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}
