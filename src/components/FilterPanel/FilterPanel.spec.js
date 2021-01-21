import React from "react";
import { shallow, mount } from "enzyme";
import FilterPanel from "./FilterPanel";

describe("HotelList", () => {
  const setup = (props = {}) => {
    return shallow(<FilterPanel {...props} />);
  };

  const setupMount = (props = {}) => {
    return shallow(<FilterPanel {...props} />);
  };

  const testProps = {
    searchTerm: "",
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
      handleSetSearchAndSortParams: { testFn },
    });
    expect(wrapper.find('input[name="searchTerm"]').prop("value")).toBe(
      "wakalixes"
    );
    expect(wrapper.find('select[name="sortMethod"]').prop("value")).toBe(
      "ooblegort"
    );
  });

  //   it("on change of value in the field, the state of that field in the component should be updated", () => {
  //     const wrapper = setup(testProps);
  //     wrapper.find('input[name="searchTerm"]').simulate("change", {
  //       target: {
  //         value: "slogblap",
  //       },
  //     });
  //     expect(wrapper.find('input[name="searchTerm"]').prop("value")).toBe(
  //       "slogblap"
  //     );
  //     wrapper.find('select[name="sortMethod"]').simulate("change", {
  //       target: {
  //         value: "newSortMethod",
  //       },
  //     });
  //     expect(wrapper.find('select[name="sortMethod"]').prop("value")).toBe(
  //       "newSortMethod"
  //     );
  //   });

  it("clicking 'reset' should trigger a handler function", () => {
    const fn = jest.fn();
    const wrapper = setupMount({
      searchTerm: "",
      sortMethod: "recommended",
      handleSetSearchAndSortParams: fn,
    });
    wrapper.find('button[name="reset"]').simulate("click");
    expect(fn).toHaveBeenCalled();
  });
});
