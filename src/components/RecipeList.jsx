import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <section className="flex flex-wrap gap-6 lg:gap-10 justify-center">
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </section>
  );
}

export default RecipeList;
