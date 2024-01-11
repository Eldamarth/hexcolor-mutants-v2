// App.js
// ... (imports)
import "./App.css";
import React, { useContext } from "react";
import Bacterium from "./Bacterium";
import Microscope from "./Microscope";
import { AppContext } from "./ContextHOC";

export default function App() {
  const { game, entities } = useContext(AppContext);

  return (
    <div className="main-app">
      <Microscope />;
    </div>
  );
}
