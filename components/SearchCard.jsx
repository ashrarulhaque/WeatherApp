import { useRef, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function CitySearchForm({ inputSubmit, inputChange, cityInput, setCityInput }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["(cities)"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place && place.name) {
        setCityInput(place.name); // Update your state
      }
    });
  }, [setCityInput]);

  return (
    <form onSubmit={inputSubmit}>
      <TextField
        inputRef={inputRef}
        className="search-input"
        label="Enter a city name to get the current weather..."
        value={cityInput}
        onChange={inputChange} // Still allows manual typing
        variant="filled"
      />
      <Button variant="contained" type="submit" className="btnsearch">
        <SearchIcon sx={{ fontSize: "2rem" }} />
      </Button>
    </form>
  );
}
