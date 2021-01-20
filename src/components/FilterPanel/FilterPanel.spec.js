import React from "react";
import { shallow } from "enzyme";
import FilterPanel from "./FilterPanel";

describe("HotelList", () => {
  const setup = (props = {}) => {
    return shallow(<FilterPanel {...props} />);
  };

  it("renders the component", () => {
    const wrapper = shallow(<FilterPanel />);
    expect(wrapper.find(".filters").exists()).toBe(true);
  });
});
