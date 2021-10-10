import { useState, useEffect } from "react";
import "./App.css";
import lbon from "./images/lbon.png";
import lboff from "./images/lboff.png";
import firebase from "./config";

function App() {
  const [state, setState] = useState({
    state: null,
    status: null,
  });
  const stateRef = firebase.database().ref("Status");

  useEffect(() => {
    stateRef.on("value", (snapshot) => {
      setState(snapshot.val());
    });
  });

  return (
    <div class="container">
      <h1>LED Controller</h1>
      <div class="img-box">
        <img alt="Light Bulb" src={state.state === 1 ? lbon : lboff}></img>
      </div>
      <label>
        Now Led is :
        <span class={state.state === 1 ? "green-span" : "red-span"}>
          {state.status}
        </span>
      </label>
      <label>
        State from database is :
        <span class={state.state === 1 ? "green-span state" : "red-span state"}>
          &nbsp;{state.state}
        </span>
      </label>
      <input
        type="submit"
        class="btn"
        onClick={() => {
          stateRef.set({ state: 1, status: " On" });
          stateRef.on("value", (snapshot) => {
            setState(snapshot.val());
          });
        }}
        value="Turn On"
      />
      <input
        type="submit"
        class="btn btn-off"
        onClick={() => {
          stateRef.set({ state: 0, status: " Off" });
          stateRef.on("value", (snapshot) => {
            setState(snapshot.val());
          });
        }}
        value="Turn Off"
      />
    </div>
  );
}

export default App;
