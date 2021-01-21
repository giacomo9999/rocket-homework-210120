import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
// import dummyData from "../../../test/dummyData";

describe("App displays non-conditional elements", () => {
  const wrapperShallow = shallow(<App />);
  const wrapperMount = mount(<App />);

  it("renders the component", () => {
    expect(wrapperShallow.find(".app-container").exists()).toBe(true);
  });

  it("should render a FilterPanel component", () => {
    expect(wrapperMount.find(".filters").exists()).toBe(true);
  });
});

//  The tests below don't work. I struggled mightily to mock or spy the useState hooks from the App component, but it was simply beyond my present ability.

// describe("App displays conditional elements", () => {
//   let hotels;
//   let errorState;

//   it("should render a HotelListDisplay component when 'hotels' data is present", () => {
//     setHotels = jest.fn((x) => dummyData);
//     React.useState = jest
//       .fn()
//       .mockImplementationOnce((x) => [x, setHotels]);

//     wrapper = mount(<App />);
//     expect(wrapper.find(".hotel-list").exists()).toBe(true);
//   });

//   it("should render an ErrorDisplay component when hotels data is not present", () => {
//     setErrorText = jest.fn((x) => "Data Not Present.");
//     React.useState = jest
//       .fn()
//       .mockImplementationOnce((x) => [x, setErrorText]);
//     wrapper = mount(<App />);
//     expect(wrapper.find(".error-card").exists()).toBe(true);
//   });
// });
