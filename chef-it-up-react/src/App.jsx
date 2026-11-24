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
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {currentPage === "home" ? (
          <>
            <section className="welcome">
              <p className="eyebrow">YOUR KITCHEN STARTS HERE</p>
              <h1>What's cooking today?</h1>
              <p>
                Find delicious recipes, explore ingredients, and save your
                favorites.
              </p>
            </section>

            <div className="search-container">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes or ingredients..."
                aria-label="Search recipes or ingredients"
              />
            </div>
            <div className="section-heading">
              <h2>Explore Recipes</h2>
              <p>{filteredRecipes.length} recipes</p>
            </div>
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
        ) : currentPage === "favorites" ? (
          <>
            <section className="favorites-header">
              <p className="eyebrow">YOUR PERSONAL COOKBOOK</p>
              <h1>My Favorite Recipes</h1>
              <p>All your favorite dishes, saved in one place.</p>
            </section>
            <div className="section-heading favorites-heading">
              <h2>Saved Recipes</h2>
              <p>{favorites.length} saved</p>
            </div>
            {favorites.length === 0 ? (
              <div className="empty-favorites">
                <h2>No favorites yet!</h2>
                <p>Start exploring recipes and save the dishes you love.</p>

                <button type="button" onClick={() => setCurrentPage("home")}>
                  Explore Recipes
                </button>
              </div>
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
        ) : (
          <section className="chef-placeholder">
            <h1>Talk to Chef</h1>
            <p>AI cooking assistant — planned future feature.</p>
            <p>
              Get personalized recipe recommendations, cooking tips, and meal
              inspiration.
            </p>
            <button onClick={() => setCurrentPage("home")}>
              Back to Recipes
            </button>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
