import React, { useState, useEffect } from "react";
import HotelListDisplay from "../HotelList/HotelList";
import FilterPanel from "../FilterPanel/FilterPanel";
import Aux from "../HOC/Aux";
import "./App.style.scss";

import hotelResultService from "../../services/hotel-result/hotel-result.service";
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [errorText = "Loading...", setErrorText] = useState();
  const [searchAndSortParams, setSearchAndSortParams] = useState({
    searchTerm: "",
    sortMethod: "recommended",
  });

  useEffect(() => {
    hotelResultService
      .get()
      .then((response) => {
        setHotels(response.results.hotels);
      })
      .catch((err) => {
        setErrorText("A database error occurred.");
      });
  }, []);

  const handleSetSearchAndSortParams = (property, value) => {
    setSearchAndSortParams((prevSSP) => {
      return { ...prevSSP, [property]: value };
    });
  };

  return (
    <div className="app-container">
      <div className="content">
        <Aux>
          <FilterPanel
            searchTerm={searchAndSortParams.searchTerm}
            sortMethod={searchAndSortParams.sortMethod}
            handleSetSearchAndSortParams={handleSetSearchAndSortParams}
          />
          {hotels.length === 0 ? (
            <ErrorDisplay errorText={errorText} />
          ) : (
            <HotelListDisplay
              hotels={hotels}
              searchTerm={searchAndSortParams.searchTerm}
              sortMethod={searchAndSortParams.sortMethod}
            />
          )}
        </Aux>
      </div>
    </div>
  );
};

export default App;
