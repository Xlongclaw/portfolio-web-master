import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
