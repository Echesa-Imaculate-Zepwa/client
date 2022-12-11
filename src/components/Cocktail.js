import React from "react";


const Cocktail = ({cocktails}) => {
    // console.log(cocktails)

    return (
         <div className="card-container">
            <h1>OUR DRINKS</h1>
            <hr></hr>
        {cocktails.map(cocktail => (
          <div className="card">
              <img src={cocktail.image} alt="our-drinks" className="card-image" /> 
              <h1>{cocktail.name}</h1>
              <p className="price">Price: {cocktail.price}</p>
              <p className="category">Category: {cocktail.category}</p>
              <hr></hr>

          </div>
           
           ))}
        </div>
    );
}

export default Cocktail;
