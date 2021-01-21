import React from "react";
import { shallow } from "enzyme";
import HotelList from "./HotelList";
import dummyData from "../../../test/dummyData";

describe("HotelList", () => {
  const setup = (props = {}) => {
    return shallow(<HotelList {...props} />);
  };

  const setupMount = (props = {}) => {
    return mount(<HotelList {...props} />);
  };

  it("renders the component", () => {
    const wrapper = setup({
      hotels: dummyData,
      searchTerm: "Marriott",
      sortMethod: "recommended",
    });
    expect(wrapper.find(".hotel-list").exists()).toBe(true);
  });

  it("displays an error panel if no hotel data is present", () => {
    const wrapper = setup({
      hotels: [],
      searchTerm: "Marriott",
      sortMethod: "recommended",
    });
    expect(wrapper.find(".hotel-list").exists()).toBe(false);
  });

  // sample data is at src/test/dummyData
  it("successfully displays at least one hotel when valid data is present", () => {
    const wrapper = setup({
      hotels: dummyData,
      searchTerm: "Marriott",
      sortMethod: "recommended",
    });
    expect(wrapper.find(".hotel-card").exists()).toBe(true);
  });
});
