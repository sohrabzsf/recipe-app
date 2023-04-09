import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaEnvelopeOpenText,
  FaPencilAlt,
  FaTrash,
  FaSdCard,
} from "react-icons/fa";

function Recipe({ recipe }) {
  const { handleRecipeSave, handleRecipeEdit, handleRecipeDelete } =
    useContext(AppContext);
  const isOnMyCollection = useLocation().pathname.startsWith("/mycollection");
  const navigate = useNavigate();
  const ingredientsNames = recipe.ingredients.map(
    (ingredient) => ingredient.name
  );

  function makeDescription(str) {
    if (str.length <= 100) {
      return str;
    } else {
      let limit = str.lastIndexOf(" ", 100);
      return str.substring(0, limit) + "...";
    }
  }

  return (
    <section className="card card-compact w-full max-w-lg shadow-md bg-neutral">
      <figure className="h-80 opacity-75">
        <img src={recipe.imagePath} alt="Recipe Image" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h3 className="card-title text-2xl text-primary font-bold">
            {recipe.name}
          </h3>
          <div className="card-actions flex-none ml-2">
            <div className="tooltip tooltip-info" data-tip="More Details">
              <button
                onClick={() => navigate(`recipes/${recipe.id}/details`)}
                className="btn btn-sm btn-square btn-info text-lg text-gray-900"
              >
                <FaEnvelopeOpenText />
              </button>
            </div>
            {isOnMyCollection ? (
              <>
                <div className="tooltip tooltip-success" data-tip="Edit Recipe">
                  <button
                    onClick={() => handleRecipeEdit(recipe)}
                    className="btn btn-sm btn-square btn-success text-lg text-gray-900"
                  >
                    <FaPencilAlt />
                  </button>
                </div>
                <div className="tooltip tooltip-error" data-tip="Delete Recipe">
                  <button
                    onClick={() => handleRecipeDelete(recipe.id)}
                    className="btn btn-sm btn-square btn-error text-lg text-gray-900"
                  >
                    <FaTrash />
                  </button>
                </div>
              </>
            ) : (
              <div
                className="tooltip tooltip-success"
                data-tip="Add to My Collection"
              >
                <button
                  onClick={() => handleRecipeSave(recipe)}
                  className="btn btn-sm btn-square btn-success text-lg text-gray-900"
                >
                  <FaSdCard />
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <span className="text-xl font-bold mr-2">Cuisine:</span>
          <span className="text-lg">{recipe.cuisine}</span>
        </div>
        <div>
          <span className="text-xl font-bold">Instructions:</span>
          <div className="text-lg text-justify whitespace-pre-wrap">
            {makeDescription(recipe.instructions)}
          </div>
        </div>
        <div>
          <span className="text-xl font-bold">Ingredients:</span>
          <div className="text-lg text-justify whitespace-pre-wrap">
            {makeDescription(ingredientsNames.join(", "))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipe;
