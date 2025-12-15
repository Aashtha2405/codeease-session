import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
