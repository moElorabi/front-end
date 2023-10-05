import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const Movie: React.FC = () => {
  const data = useSelector((state: any) => state.movie);
  return (
    <div className="movie-div">
      <div>
        <div className="time-div">
          <p>
            {data.allData.Runtime} | {data.allData.Released} |{" "}
            {data.allData.Rated}
          </p>
        </div>
        <h1>{data.allData.Title}</h1>
        <p>IMBD Rating {data.allData.imdbRating}</p>
        <p className="title">Plot</p>
        <p>{data.allData.Plot}</p>
        <p className="title">Cast</p>
        <p>{data.allData.Actors}</p>
        <p className="title">Genre</p>
        <p>{data.allData.Genre}</p>
        <p className="title">Director</p>
        <p>{data.allData.Director}</p>
      </div>
      <Card>
        <CardMedia
          component="img"
          height="auto" // Adjust the height as needed
          image={data.allData.Poster} // Replace with your image URL
          alt="Poster"
        />
      </Card>
    </div>
  );
};

export default Movie;
