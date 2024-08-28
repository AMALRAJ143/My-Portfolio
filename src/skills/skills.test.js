import React from "react";
import { shallow } from "enzyme";
import Skills from "./skills";

describe("Skills", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Skills />);
    expect(wrapper).toMatchSnapshot();
  });
});
