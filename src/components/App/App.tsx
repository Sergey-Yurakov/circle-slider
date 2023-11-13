import React from "react";
import cl from "./App.module.scss";
import { HistoricalDates } from "../HistoricalDates";

function App() {
  return (
    <div className={cl.App}>
      <HistoricalDates />
    </div>
  );
}

export default App;
