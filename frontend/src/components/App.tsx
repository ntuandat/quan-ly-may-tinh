import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Sign from "../pages/Sign";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/sign" element={<Sign />} />
                </MainLayout>
              }
            />
            <Route path="/login" element={<div />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
