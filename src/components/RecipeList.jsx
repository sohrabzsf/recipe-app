import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <section className="flex flex-wrap gap-6 justify-center">
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </section>
  );
}

export default RecipeList;
