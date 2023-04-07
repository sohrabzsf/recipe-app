import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import RecipeSearch from "../components/RecipeSearch";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import RecipeList from "../components/RecipeList";

function FindRecipes() {
  const { results, loading } = useContext(AppContext);

  return (
    <>
      <RecipeSearch />
      <Alert />
      {loading ? <Spinner /> : <RecipeList recipes={results} />}
    </>
  );
}

export default FindRecipes;
