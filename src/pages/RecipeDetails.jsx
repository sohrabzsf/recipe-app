import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaReply } from "react-icons/fa";

function RecipeDetails() {
  const { collection, results } = useContext(AppContext);
  const id = useParams().id;
  const navigate = useNavigate();
  const isFromCollection = useLocation().pathname.startsWith("/mycollection");
  const previousPage = isFromCollection ? "/mycollection" : "/findrecipes";
  const recipe = isFromCollection
    ? collection.find((recipe) => recipe.id === id)
    : results.find((recipe) => recipe.id === id);

  return (
    <>
      {recipe && (
        <div className="flex gap-10 flex-col xl:flex-row">
          <img
            src={recipe.imagePath}
            alt="Recipe Image"
            className="self-center xl:self-start w-full max-w-xl rounded-2xl"
          />
          <div className="">
            <h2 className="text-5xl font-bold mb-6">{recipe.name}</h2>
            <p className="text-xl mb-3">
              <span className="font-bold mr-3">Cuisine:</span>
              {recipe.cuisine}
            </p>
            <div className="text-xl mb-3">
              <p className="font-bold">Instructions:</p>
              <p className="text-justify">{recipe.instructions}</p>
            </div>
            <div className="text-xl">
              <p className="font-bold mb-3">Ingredients:</p>
              <div className="grid gap-6 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <div
                      key={ingredient.id}
                      className="text-center p-2 rounded-lg bg-neutral"
                    >
                      <span className="font-bold mr-3">{ingredient.name}:</span>
                      <span>{ingredient.measure}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => navigate(previousPage)}
        className="btn btn-secondary self-start text-lg text-gray-900 mt-6 lg:mt-10"
      >
        Return <FaReply className="ml-3" />
      </button>
    </>
  );
}

export default RecipeDetails;
