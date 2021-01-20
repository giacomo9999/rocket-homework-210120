import React from "react";
import { shallow } from "enzyme";
import HotelList from "./HotelList";
import dummyData from "../../../test/dummyData";

describe("HotelList", () => {
  const wrapper = shallow(
    <HotelList
      hotels={dummyData}
      searchTerm={"Marriott"}
      sortMethod={"recommended"}
    />
  );

  it("renders the component", () => {
    expect(wrapper.find(".hotel-list").exists()).toBe(true);
  });
});
