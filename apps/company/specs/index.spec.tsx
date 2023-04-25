import React from "react";
import { render } from "@testing-library/react";

import Index from "../pages/ind";

describe("Index", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
