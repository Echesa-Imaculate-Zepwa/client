// client/src/components/App.js
import { useState, useEffect } from "react";
import Cocktail from "./components/Cocktail";
import SearchBar from './components/SearchBar';

function App() {
  const [cocktails, setCocktails] = useState([]);
useEffect(() => {
  fetch("https://cocktail-shop-production.up.railway.app/cocktails")
  .then((response) => response.json())
  .then((data) => setCocktails(data));
},[])

  console.log(cocktails)

  return (
    <>
     <SearchBar cocktails={cocktails} setCocktails={setCocktails} />
     <Cocktail cocktails={cocktails}/>
    </>
  );
}

export default App;

