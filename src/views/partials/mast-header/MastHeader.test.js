import React from "react";
import { shallow } from "enzyme";
import MastHeader from ".";

it("Renders <MastHeader /> without crashing", () => {
  shallow(<MastHeader />);
});