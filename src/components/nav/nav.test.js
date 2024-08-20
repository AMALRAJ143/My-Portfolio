import React from "react";
import { shallow } from "enzyme";
import Nav from "./nav";

describe("Nav", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });
});
