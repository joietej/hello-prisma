import { findByText, screen } from "@testing-library/react";
import { getPage } from "next-page-tester";
import "unfetch/polyfill"
describe("test", () => {
  it("works", async () => {
    const { render } = await getPage({ route: "/" });
    render();
    const element = await screen.findByText("Tejas");
    expect(element).toBeTruthy();
  });
});
