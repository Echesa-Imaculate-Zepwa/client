// client/src/components/App.js
import { useState, useEffect } from "react";
import Cocktail from "./components/Cocktail";
import Navbar from "./components/Navbar";
//import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <Navbar />
      <Cocktail />
    </>
  );
}

export default App;