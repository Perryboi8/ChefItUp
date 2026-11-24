function RecipeCard({ recipe, onToggleFavorite, isFavorite }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <button onClick={() => onToggleFavorite(recipe)}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
      </div>
    </article>
  );
}

export default RecipeCard;
