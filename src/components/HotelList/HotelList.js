import React from "react";
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";

import "./HotelList.style.scss";

const HotelList = (props) => {
  const hotels = props.hotels;
  let searchTerm = props.searchTerm;
  let sortMethod = props.sortMethod;

  const filteredHotels =
    searchTerm && searchTerm !== ""
      ? hotels.filter((entry) => {
          let lCSearchTerm = searchTerm.toLowerCase();
          let lCHotelName = entry.hotelStaticContent.name.toLowerCase();
          return lCHotelName.includes(lCSearchTerm);
        })
      : hotels;

  if (filteredHotels.length === 0) {
    return (
      <ErrorDisplay errorText={`No hotel names include "${searchTerm}."`} />
    );
  }

  let sortedHotels = [];

  switch (sortMethod) {
    case "high-to-low":
      sortedHotels = filteredHotels.sort(
        (a, b) => b.lowestAveragePrice.amount - a.lowestAveragePrice.amount
      );
      break;
    case "low-to-high":
      sortedHotels = filteredHotels.sort(
        (a, b) => a.lowestAveragePrice.amount - b.lowestAveragePrice.amount
      );
      break;
    case "recommended":
    default:
      sortedHotels = filteredHotels.sort(
        (a, b) => b.hotelStaticContent.rating - a.hotelStaticContent.rating
      );
      break;
  }

  return (
    <div className="hotel-list">
      {sortedHotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`,
            }}
          ></div>
          <div className="hotel-details">
            <div className="hotel-name">{hotel.hotelStaticContent.name}</div>
            <div className="location">
              {hotel.hotelStaticContent.neighborhoodName}
            </div>
          </div>
          <div className="price-details">
            <span className="price">
              <span
                dangerouslySetInnerHTML={{
                  __html: hotel.lowestAveragePrice.symbol,
                }}
              ></span>
              {hotel.lowestAveragePrice.amount}
            </span>
            <span className="rewards">
              Rating: {hotel.hotelStaticContent.rating}
            </span>
            <span className="rewards">{hotel.rewards.miles} miles</span>
            <button
              className="button"
              onClick={() => console.log("Button Clicked.")}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
