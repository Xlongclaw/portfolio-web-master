import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";

const App: React.FC = () => {
  return (
    <div className="overflow-y-hidden">

    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
