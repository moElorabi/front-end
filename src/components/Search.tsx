import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { searchMovie } from "../services/search-service";
import { getMovie, setMovie } from "../actions/movie-action";

export default function FreeSoloCreateOption() {
  const dispatch = useDispatch();
  const handleSearch = async (newValue: String | null) => {
    dispatch(getMovie());
    const res = await searchMovie(newValue);
    let payload = {
      title: res.data.Title,
      date: res.data.Released,
      poster: res.data.Poster,
      loading: false,
    };
    dispatch(setMovie(payload));
  };

  return (
    <Autocomplete
      onChange={(event, newValue) => handleSearch(newValue)}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={[]}
      sx={{ width: "auto" }}
      freeSolo
      renderInput={(params) => <TextField {...params} label="Search movies" />}
    />
  );
}
