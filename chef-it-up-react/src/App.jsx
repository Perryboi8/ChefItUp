import "./App.css";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipes";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");

      if (saved !== null) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      console.error("Failed to load favorites", error);
    }
    return [];
  });
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorites(recipe) {
    const isFavorite = favorites.some((favorite) => favorite.id === recipe.id);

    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  }

  // Normalize query - make it lower case and trim spaces
  const query = searchQuery.toLowerCase().trim();
  // Filter Recipes based on these conditions
  const filteredRecipes = recipes.filter((recipe) => {
    const nameMatches = recipe.name.toLowerCase().includes(query);
    const ingredientsMatch = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(query),
    );

    return nameMatches || ingredientsMatch;
  });
  return (
    // Need to add the <> </> to let me group multiple elements
    <>
      <Header onPageChange={setCurrentPage} />
      <main>
        {currentPage === "home" ? (
          <>
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
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onToggleFavorite={toggleFavorites}
                  isFavorite={favorites.some(
                    (favorite) => favorite.id === recipe.id,
                  )}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2>My Favorites</h2>
            {favorites.length === 0 ? (
              <p>You haven't saved any recipes yet.</p>
            ) : (
              <div className="recipes">
                {favorites.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onToggleFavorite={toggleFavorites}
                    isFavorite={true}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}

export default App;
