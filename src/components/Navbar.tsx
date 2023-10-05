import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBarProps } from "../types/interfaces";

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  let navigate = useNavigate();

  const handlOnClick = () => {
    navigate("/");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          onClick={handlOnClick}
          className="pointer"
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const Layout = () => {
  return (
    <div>
      <NavBar title={"Movie library"} />
      <Outlet />
    </div>
  );
};
export default Layout;
