import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../contexts/AppContext";

function FormIngredient({ ingredient, handleChange }) {
  const { handleIngredientDelete } = useContext(AppContext);

  // updates the state of ingredient fields in the form
  function handleInputChange(changes) {
    handleChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <div className="flex gap-2 mb-2">
      <div className="flex-1">
        <label htmlFor="ingr-name" className="label font-bold pb-1">
          Name
        </label>
        <input
          type="text"
          name="ingr-name"
          id="ingr-name"
          value={ingredient.name}
          onChange={(e) => handleInputChange({ name: e.target.value })}
          className="input input-sm input-bordered input-secondary text-lg w-full"
          required
        />
      </div>
      <div className="flex-1">
        <label htmlFor="ingr-measure" className="label font-bold pb-1">
          Measure
        </label>
        <input
          type="text"
          name="ingr-measure"
          id="ingr-measure"
          value={ingredient.measure}
          onChange={(e) => handleInputChange({ measure: e.target.value })}
          className="input input-sm input-bordered input-secondary text-lg w-full"
          required
        />
      </div>
      <div className="flex-none">
        <div className="mb-9"></div>
        <div className="tooltip tooltip-error" data-tip="Remove Ingredient">
          <button
            type="button"
            onClick={() => handleIngredientDelete(ingredient.id)}
            className="btn btn-sm btn-square btn-error text-lg text-gray-900"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormIngredient;
