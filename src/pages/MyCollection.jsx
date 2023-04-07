import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";

function MyCollection() {
  const { collection, form, handleRecipeAdd } = useContext(AppContext);

  return (
    <>
      <button
        onClick={handleRecipeAdd}
        className="btn btn-secondary self-center mb-6 text-lg text-gray-900"
      >
        Add Recipe
      </button>
      {form.shown && <RecipeForm recipe={form.inputs} />}
      <RecipeList recipes={collection} />
    </>
  );
}

export default MyCollection;
