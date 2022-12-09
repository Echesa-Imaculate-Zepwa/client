import { useState, useEffect } from "react";
import Cocktail from "./components/Cocktail";
import SearchBar from './components/SearchBar';

function App() {
  const [cocktails, setCocktails] = useState([]);
  // const [loading, setLoading] = useState([])



  // useEffect(() => {
    // const fetchCocktailList = async () => {
        // const baseUrl = "/cocktails";

        // setLoading(true);

        // try {
            // const res = await fetch(`${baseUrl}filter.php?c=Cocktail`);
            // const data = await res.json();
            // console.log(data);

            // setCocktails(data);
            // setLoading(false);
        // } catch (err) {
            // console.log("Error fetching data");

            // setLoading(false);
        // }
      // };

    // fetchCocktailList();
  // }, []);


  useEffect(() => {
    fetch("/cocktails")
    .then((response) => response.json())
    .then((data) => setCocktails(data));
  },[])
  // console.log(cocktails)



  // const fetchData = () => {
    // return fetch("http:/localhost:3000/cocktails")
          // .then((response) => response.json())
          // .then((data) => setCocktails(data));
  // }
  // useEffect(() => {
    // fetchData();
  // },[])



 



  return (
    <>
     <SearchBar cocktails={cocktails} setCocktails={setCocktails} />
     <Cocktail cocktails={cocktails}/>
    </>
  );
}

export default App;
