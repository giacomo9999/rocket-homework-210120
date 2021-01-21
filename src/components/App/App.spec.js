import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App", () => {
  const wrapperShallow = shallow(<App />);
  const wrapperMount = mount(<App />);

  it("renders the component", () => {
    expect(wrapperShallow.find(".app-container").exists()).toBe(true);
  });

  it("should render a FilterPanel component", () => {
    expect(wrapperMount.find(".filters").exists()).toBe(true);
  });

  it("should render a HotelListDisplay component", () => {
    expect(wrapper.find(".hotel-list").exists()).toBe(true);
  });
});
