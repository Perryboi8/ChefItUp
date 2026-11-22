function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
      </div>
    </article>
  );
}

export default RecipeCard;
