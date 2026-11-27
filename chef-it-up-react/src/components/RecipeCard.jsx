function RecipeCard({ recipe, onToggleFavorite, isFavorite }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>

        <details className="recipe-details">
          <summary>View Recipe</summary>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>
                {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
              </li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </details>

        <button
          type="button"
          className={isFavorite ? "favorite-btn saved" : "favorite-btn"}
          onClick={() => onToggleFavorite(recipe)}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;
