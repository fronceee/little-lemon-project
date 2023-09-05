import "./App.css";
import { useEffect, useReducer, useState } from "react";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Homepage from "./containers/Homepage";
import { Route, Routes, Outlet, redirect, useNavigate } from "react-router";
import { fetchAPI } from "./mockAPI";
import Reservation from "./containers/Reservation";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export const reducer = (state, action) => {
  if (action.type == "update_date") {
    return {
      ...state,
      date: action.payload,
    };
  }
  if (action.type == "update_time") {
    return {
      ...state,
      time: action.payload,
    };
  }
  if (action.type == "update_guestsNum") {
    return {
      ...state,
      guestsNum: action.payload,
    };
  }
  if (action.type == "update_occasion") {
    return {
      ...state,
      occasion: action.payload,
    };
  }
  return state;
};

function App() {
  const initialState = {
    date: "",
    time: "",
    guestsNum: "1",
    occasion: "Birthday",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [allVacantTime, setAllVacantTime] = useState([]);

  const navigate = useNavigate()
  useEffect(() => {
    if (state.date) {
      fetchAPI(new Date(state.date))
        .then((res) => res.json())
        .then((data) => {
          setAllVacantTime(data);
          dispatch({ type: "update_time", payload: data[0] });
        });
    }
  }, [state.date]);

  function handleSubmit() {
    alert(
      `Date: ${state.date}\nTime: ${state.time}\nGuests ${state.guestsNum}\nOcasion: ${state.occasion}\nYour Reservation is sent!`
    );
    navigate(0)
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route
          path="reservations"
          element={
            <Reservation
              state={state}
              dispatch={dispatch}
              allVacantTime={allVacantTime}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
