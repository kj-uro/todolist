import React from "react";
import "./App.scss";
import { Routes, Route, HashRouter } from "react-router-dom";
import Data from "./Data/Data";
import List from "./Components/List";
import Insert from "./Components/Insert";
import Update from "./Components/Update";
function App() {
  return (
      <HashRouter>
        <Data>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </Data>
      </HashRouter>
  );
}

export default App;
