import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Background from "./components/background";
import Foreground from "./components/foreground";

function App() {
  return (
    <>
      <div className="">
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;
