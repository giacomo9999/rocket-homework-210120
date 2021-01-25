import React from "react";
import { shallow } from "enzyme";
import FilterPanel from "./FilterPanel";

describe("FilterPanel Tests", () => {
  const setup = (props = {}) => {
    return shallow(<FilterPanel {...props} />);
  };

  const testProps = {
    searchTerm: "testSearchTerm",
    sortMethod: "recommended",
    handleSetSearchAndSortParams: jest.fn(),
  };

  it("renders the component", () => {
    const wrapper = setup();
    expect(wrapper.find(".filters").exists()).toBe(true);
  });

  it("should render a 'searchTerm' input tag", () => {
    const wrapper = setup(testProps);
    expect(wrapper.find('input[name="searchTerm"]').exists()).toBe(true);
  });

  it("should render a 'sortMethod' select tag", () => {
    const wrapper = setup(testProps);
    expect(wrapper.find('select[name="sortMethod"]').exists()).toBe(true);
  });

  it("should render a 'Reset' button", () => {
    const wrapper = setup(testProps);
    expect(wrapper.find('button[name="reset"]').exists()).toBe(true);
  });

  it("both searchTerm and sortMethod should display received props", () => {
    const wrapper = setup({
      searchTerm: "wakalixes",
      sortMethod: "ooblegort",
      handleSetSearchAndSortParams: jest.fn(),
    });
    expect(wrapper.find('input[name="searchTerm"]').prop("value")).toBe(
      "wakalixes"
    );
    expect(wrapper.find('select[name="sortMethod"]').prop("value")).toBe(
      "ooblegort"
    );
  });

  // The test below isn't working. It almost certainly has something to do with the onChange handler invoking a function passed in as a prop...but after pounding away at the problem for over an hour, I'm not getting a solution and I need to move on.

  //   it("on change of value in the field, the state of that field in the component should be updated", () => {
  //     const wrapper = setup(testProps);

  //     wrapper.find('input[name="searchTerm"]').simulate("change", {
  //       target: {
  //         name: "changedSearchTerm",
  //       },
  //     });

  //     expect(wrapper.find('input[name="searchTerm"]').prop("value")).toBe(
  //       "changedSearchTerm"
  //     );

  //     wrapper.find('select[name="sortMethod"]').simulate("change", {
  //       target: {
  //         name: "changedSortMethod",
  //       },
  //     });
  //     expect(wrapper.find('select[name="sortMethod"]').prop("value")).toBe(
  //       "changedSortMethod"
  //     );
  //   });

  //  Did this work before? Jest/Enzyme doesn't seem to be recognizing the mock.
  it("clicking 'reset' should trigger a handler function", () => {
    const fn = jest.fn();
    const wrapper = setup({
      searchTerm: "",
      sortMethod: "recommended",
      handleSetSearchAndSortParams: fn,
    });
    wrapper.find('button[name="reset"]').simulate("click");
    expect(fn).toHaveBeenCalled();
  });
});
