import { Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../actions/market-action";
import { drawerWidth } from "../utils/constants";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: any) => state.market.drawerIsOpen);
  const cart = useSelector((state: any) => state.market.cart);

  const handleDrawerOpen = () => {
    dispatch(setDrawer(true));
  };

  return (
    <div>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className="header">
            <Typography variant="h6" noWrap component="div">
              SHOPY
            </Typography>
            <Typography>Cart ({cart.length})</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
