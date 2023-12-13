import React from "react";
import { Routes, Route } from "react-router-dom";
import Tile from "../table";
import Pagination from "../pagination/pagination";
import Form from "../form";
import Header from "../header";
import Navbar from "../navbar";
import "./app.scss";

export function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/Table"
          element={
            <>
              <Tile />
              <Pagination />
            </>
          }
        />
        <Route
          path="/Table/:id"
          element={
            <>
              <Tile />
              <Pagination />
            </>
          }
        />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
