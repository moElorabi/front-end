import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { setSearchWord } from "../actions/market-action";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = async (newValue: String | null) => {
    dispatch(setSearchWord(newValue));
  };

  return (
    <Autocomplete
      onChange={(event, newValue) => handleSearch(newValue)}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="search"
      options={[]}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Press enter to search" />
      )}
    />
  );
};

export default SearchBar;
