import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, setCategory, setDrawer } from "../actions/market-action";
import { getCategories } from "../services/product-service";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { drawerWidth } from "../utils/constants";

const DrawerHeader = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
}));

function DrawerComponent() {
  const dispatch = useDispatch();
  const open = useSelector((state: any) => state.market.drawerIsOpen);
  const categoryIsLoading = useSelector(
    (state: any) => state.market.categoryIsLoading
  );

  const [categories, setCategories] = useState(["All"]); // [] is the initial value

  // get categories from api
  const getCategoriesApi = async () => {
    dispatch(getCategory());
    const res = await getCategories(); // get products from api
    setCategories(["All", ...res.data]); // set products in state
    dispatch(setCategory("All"));
  };

  // close drawer
  const handleDrawerClose = () => {
    dispatch(setDrawer(false));
  };

  // handle category click
  const hadnleCategoryClick = (e: any) => {
    dispatch(setCategory(e.target.innerText));
  };

  useEffect(() => {
    getCategoriesApi();
  }, []);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader className="categories-div">
        <Typography>Categories</Typography>
        <IconButton data-testid="close-button" onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {categoryIsLoading ? (
        <Loading />
      ) : (
        <List>
          {categories.map((text, key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton onClick={hadnleCategoryClick}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Drawer>
  );
}

export default DrawerComponent;
