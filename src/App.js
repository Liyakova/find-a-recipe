import './App.css';
import { useEffect, useState } from 'react';
import video from "./food.mp4";
import MyRecipesResult from './MyRecipesResult';

function App() {

  const MY_ID = "2cdd0a0d";
  const MY_KEY = "0972a3b4217a4209a0200ee8ce1ec1ab";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmmited, setWordSubmitted] = useState("avocado");

  useEffect(()=> {
      const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmmited}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const data = await response.json();
        setMyRecipes(data.hits)
      };
      getRecipe();
  }, [wordSubmmited])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
    console.log(setMySearch);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form className='form' onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
          <button>🍳</button> 
        </form>
      </div>

      {myRecipes.map(element => (
        <MyRecipesResult 
          label={element.recipe.label} 
          calories={element.recipe.calories} 
          image={element.recipe.image} 
          ingredients={element.recipe.ingredientLines}/>
      ))}


    </div>
  );
}

export default App;
