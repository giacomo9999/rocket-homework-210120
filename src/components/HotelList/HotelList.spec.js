import React from "react";
import { shallow } from "enzyme";
import HotelList from "./HotelList";
import dummyData from "../../../test/dummyData";

describe("HotelList", () => {
  const setup = (props = {}) => {
    return shallow(<HotelList {...props} />);
  };

  it("renders the component", () => {
    const wrapper = setup({
      hotels: dummyData,
      searchTerm: "Marriott",
      sortMethod: "recommended",
    });
    expect(wrapper.find(".hotel-list").exists()).toBe(true);
  });
});
