function RecipeCard({ recipe, onToggleFavorite, isFavorite }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>

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
