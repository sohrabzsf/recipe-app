import { useContext } from "react";
import { RecipesContext } from "../contexts/RecipesContext";
import RecipeList from "../components/RecipeList";

function MyCollection() {
  const { recipes, addNewRecipe } = useContext(RecipesContext);
  return (
    <>
      <button
        onClick={addNewRecipe}
        className="btn btn-secondary self-center mb-6 text-gray-900"
      >
        Add Recipe
      </button>
      <RecipeList recipes={recipes} />
    </>
  );
}

export default MyCollection;
