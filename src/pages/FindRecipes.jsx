import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import RecipeSearch from "../components/RecipeSearch";
import RecipeList from "../components/RecipeList";

function FindRecipes() {
  const { results } = useContext(AppContext);

  return (
    <>
      <RecipeSearch />
      <RecipeList recipes={results} />
    </>
  );
}

export default FindRecipes;
