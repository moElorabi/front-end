import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface MovieCardProps {
  title: string;
  date: string;
  poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, date, poster }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
          {date}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
