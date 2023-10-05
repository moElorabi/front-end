import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { extractYearFromDate } from "../utils/utils-functions";

interface MovieCardProps {
  title: string;
  date: string;
  poster: string;
  allData: { allData: {} };
}

const MovieCard: React.FC<MovieCardProps> = ({ title, date, poster }) => {
  let navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/movie");
  };
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleOnclick} className="pointer">
      <CardMedia
        component="img"
        height="194"
        image={poster}
        alt="Movie Poster"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {extractYearFromDate(date)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
