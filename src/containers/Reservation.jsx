import React, { useEffect, useState } from "react";
import { v4 as id } from "uuid";

function Reservation({ state, dispatch, allVacantTime, handleSubmit }) {
  function handleDateChange(e) {
    dispatch({ type: "update_date", payload: e.target.value });
  }

  function handleTimeChange(e) {
    dispatch({ type: "update_time", payload: e.target.value });
  }

  function handleGuestsChange(e) {
    dispatch({ type: "update_guestsNum", payload: parseInt(e.target.value) });
  }

  function handleOccasionChange(e) {
    dispatch({ type: "update_occasion", payload: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    handleSubmit()
  }

  return (
    <section id="reservation-section">
      <h1 id="reservation-title" className="heading heading-1">
        reserve a table
      </h1>
      <form id="reservation-form" onSubmit={submitForm}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          data-testid="res-date"
          value={state.date}
          className="reservation-input"
          onChange={handleDateChange}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          data-testid="res-time"
          value={state.time}
          className="reservation-input"
          onChange={handleTimeChange}
          required
        >
          {allVacantTime?.map((item) => (
            <option key={id()}>{item}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          data-testid="guests"
          value={state.guestsNum}
          className="reservation-input"
          onChange={handleGuestsChange}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          data-testid="occasion"
          value={state.occasion}
          className="reservation-input"
          onChange={handleOccasionChange}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input aria-label="On Click" data-testid="submit-btn" type="submit" value="Make Your reservation" />
      </form>
    </section>
  );
}

export default Reservation;
