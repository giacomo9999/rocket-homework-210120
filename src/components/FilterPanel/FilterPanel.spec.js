import React from "react";
import { shallow } from "enzyme";
import FilterPanel from "./FilterPanel";

describe("HotelList", () => {
  const setup = (props = {}) => {
    return shallow(<FilterPanel {...props} />);
  };
  const testProps={}

  it("renders the component", () => {
    const wrapper = setup();
    expect(wrapper.find(".filters").exists()).toBe(true);
  });
  it("clears the search fields when 'Reset' is clicked", () => {

  });
});
