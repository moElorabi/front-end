import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import SearchBar from "./Search";
import { useSelector } from "react-redux";

const BreadcrumbsComponent = () => {
  const category = useSelector((state: any) => state.market.category);

  return (
    <div role="presentation" className="breadcrumbs-div">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Products
        </Link>
        <Typography color="text.primary">{category}</Typography>
      </Breadcrumbs>
      <SearchBar />
    </div>
  );
};
export default BreadcrumbsComponent;
