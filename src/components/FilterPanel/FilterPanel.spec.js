import React from "react";
import { shallow } from "enzyme";
import FilterPanel from "./FilterPanel";

describe("HotelList", () => {
  const wrapper = shallow(<FilterPanel />);

  it("renders the component", () => {
    expect(wrapper.find(".filters").exists()).toBe(true);
  });
});
