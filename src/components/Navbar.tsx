import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const Layout = () => {
  return (
    <div>
      <NavBar title={"What's in"} />
      <Outlet />
    </div>
  );
};
export default Layout;
