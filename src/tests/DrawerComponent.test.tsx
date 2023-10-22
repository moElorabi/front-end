import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { getCategories } from "../services/product-service";
import DrawerComponent from "../components/Drawer";
import "@testing-library/jest-dom";
import { MockStore, mockStore } from "./types/interfaces";

// Mock the product-service call
jest.mock("../services/product-service");

const mockReducer = (state = mockStore): MockStore => state;

const renderWithRedux = (
  component: React.ReactElement,
  {
    initialState = mockStore,
    store = createStore(mockReducer, initialState),
  }: { initialState?: MockStore; store?: Store<MockStore> } = {}
) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("DrawerComponent", () => {
  it("renders the drawer correctly", async () => {
    (getCategories as jest.Mock).mockResolvedValue({
      data: ["electronics", "jewelery", "men's clothing", "women's clothing"],
    });

    renderWithRedux(<DrawerComponent />);

    expect(await screen.findByText("Categories")).toBeInTheDocument();
    expect(await screen.findByText("electronics")).toBeInTheDocument();
    expect(await screen.findByText("jewelery")).toBeInTheDocument();
    expect(await screen.findByText("men's clothing")).toBeInTheDocument();
    expect(await screen.findByText("women's clothing")).toBeInTheDocument();
  });

  it("dispatches setCategory action when category is clicked", async () => {
    (getCategories as jest.Mock).mockResolvedValue({
      data: ["electronics", "jewelery", "men's clothing", "women's clothing"],
    });

    renderWithRedux(<DrawerComponent />);

    const categoryButton = await screen.findByText("electronics");
    fireEvent.click(categoryButton);
  });

  it("dispatches setDrawer action when close button is clicked", async () => {
    (getCategories as jest.Mock).mockResolvedValue({ data: [] });

    renderWithRedux(<DrawerComponent />);

    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);
  });
});
