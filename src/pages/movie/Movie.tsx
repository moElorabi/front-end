import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";
import { extractYearFromDate } from "../../utils/utils-functions";

const Movie: React.FC = () => {
  const data = useSelector((state: any) => state.movie);

  return data.allData ? (
    <div className="movie-div">
      <div>
        <div className="time-div">
          <p>
            {data.allData.Runtime} |{" "}
            {extractYearFromDate(data.allData.Released)} | {data.allData.Rated}
          </p>
        </div>
        <h1>{data.allData.Title}</h1>
        <p className="title">IMBD Rating</p>
        <p>{data.allData.imdbRating}</p>
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
          height="auto"
          image={data.allData.Poster}
          alt="Poster"
        />
      </Card>
    </div>
  ) : (
    <p className="no-data">No data</p>
  );
};

export default Movie;
