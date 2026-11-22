import "./App.css";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipes";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  // Normalize query - make it lower case and trim spaces
  const query = searchQuery.toLowerCase().trim;
  // Filter Recipes based on these conditions
  const filteredRecipes = recipes.filter((recipe) => {
    const nameMatches = recipe.name.toLowerCase().includes(query);
    const ingredientsMatch = recipe.ingredients.some((ingredient) =>
      ingredient.includes(query),
    );

    return nameMatches || ingredientsMatch;
  });
  return (
    // Need to add the <> </> to let me group multiple elements
    <>
      <Header />
      <main>
        <p>Find your next favorite recipe.</p>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search recipes..."
        />
        <p>You searched for: {searchQuery}</p>

        <div className="recipes">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
