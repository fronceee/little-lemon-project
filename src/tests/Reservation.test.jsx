import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Reservation from "../containers/Reservation";
import { beforeEach, expect } from "vitest";

describe("Reservation Component Tests", () => {
  const mockState = {
    date: "",
    time: "",
    guestsNum: 1,
    occasion: "Birthday",
  };
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmit.mockClear();
  });

  it("renders the reservation form with all input elements", () => {
    const { getByLabelText, getByTestId } = render(
      <Reservation
        state={mockState}
        dispatch={mockDispatch}
        allVacantTime={["10:00 AM", "11:00 AM"]}
        handleSubmit={jest.fn()}
      />
    );

    const dateInput = getByLabelText("Choose date");
    const timeSelect = getByLabelText("Choose time");
    const guestsInput = getByLabelText("Number of guests");
    const occasionSelect = getByLabelText("Occasion");
    const submitButton = getByTestId("submit-btn");

    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("calls dispatch when date input changes", () => {
    const { getByTestId } = render(
      <Reservation
        state={mockState}
        dispatch={mockDispatch}
        allVacantTime={["10:00 AM", "11:00 AM"]}
        handleSubmit={jest.fn()}
      />
    );

    const dateInput = getByTestId("res-date");
    fireEvent.change(dateInput, { target: { value: "2023-09-05" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update_date",
      payload: "2023-09-05",
    });
  });

  it("calls dispatch when time input changes", () => {
    const { getByTestId } = render(
      <Reservation
        state={mockState}
        dispatch={mockDispatch}
        allVacantTime={["10:00 AM", "11:00 AM"]}
        handleSubmit={jest.fn()}
      />
    );

    const timeSelect = getByTestId("res-time");
    fireEvent.change(timeSelect, { target: { value: "10:00 AM" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update_time",
      payload: "10:00 AM",
    });
  });

  it("calls dispatch when guests input changes", () => {
    const { getByTestId } = render(
      <Reservation
        state={mockState}
        dispatch={mockDispatch}
        allVacantTime={["10:00 AM", "11:00 AM"]}
        handleSubmit={jest.fn()}
      />
    );

    const guestsInput = getByTestId("guests");
    fireEvent.change(guestsInput, { target: { value: "5" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update_guestsNum",
      payload: 5,
    });
  });

  it("calls dispatch when occasion input changes", () => {
    const { getByTestId } = render(
      <Reservation
        state={mockState}
        dispatch={mockDispatch}
        allVacantTime={["10:00 AM", "11:00 AM"]}
        handleSubmit={jest.fn()}
      />
    );

    const occasionSelect = getByTestId("occasion");
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update_occasion",
      payload: "Anniversary",
    });
  });
  it("blocked user from submit form when time is empty", () => {
    const mockSubmit = jest.fn();
    const { getByTestId } = render(
      <Reservation
        state={mockState}
        dispatch={mockDispatch}
        allVacantTime={[]}
        handleSubmit={mockSubmit}
      />
    );
    const submitButton = getByTestId("submit-btn");
    fireEvent.click(submitButton);
    expect(mockSubmit).toBeCalledTimes(0);
  });
});
