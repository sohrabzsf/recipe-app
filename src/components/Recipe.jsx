import { useContext } from "react";
import { RecipesContext } from "../contexts/RecipesContext";
import { FaEnvelopeOpenText, FaPencilAlt, FaTrash } from "react-icons/fa";

function Recipe({ id, name, origin, instructions, ingredientsNames }) {
  const { deleteRecipe } = useContext(RecipesContext);

  function makeDescription(str) {
    if (str.length <= 100) {
      return str;
    } else {
      let limit = str.lastIndexOf(" ", 100);
      return str.substring(0, limit) + "...";
    }
  }

  return (
    <section className="card card-compact w-full max-w-md shadow-md bg-neutral">
      <div className="card-body h-80">
        <div className="flex justify-between">
          <h3 className="card-title text-2xl text-primary font-bold">{name}</h3>
          <div className="card-actions flex-none">
            <div className="tooltip tooltip-info" data-tip="More Details">
              <button className="btn btn-circle btn-info text-lg text-gray-900">
                <FaEnvelopeOpenText />
              </button>
            </div>
            <div className="tooltip tooltip-success" data-tip="Edit">
              <button className="btn btn-circle btn-success text-lg text-gray-900">
                <FaPencilAlt />
              </button>
            </div>
            <div className="tooltip tooltip-error" data-tip="Delete">
              <button
                onClick={() => deleteRecipe(id)}
                className="btn btn-circle btn-error text-lg text-gray-900"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xl font-bold mr-2">Origin:</span>
          <span className="text-lg">{origin}</span>
        </div>
        <div>
          <span className="text-xl font-bold">Instructions:</span>
          <div className="text-lg text-justify whitespace-pre-wrap">
            {makeDescription(instructions)}
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
