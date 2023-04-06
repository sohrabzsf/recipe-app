import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import FormIngredient from "./FormIngredient";
import { FaPlus } from "react-icons/fa";

function RecipeForm({ recipe }) {
  const {
    handleInputChange,
    handleIngredientAdd,
    handleFormSave,
    handleFormCancel,
  } = useContext(AppContext);

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;

    handleInputChange({ ingredients: newIngredients });
  }

  return (
    <form
      onSubmit={handleFormSave}
      className="form-control self-center rounded-2xl w-full max-w-2xl shadow-md bg-neutral p-4 mb-6"
    >
      <label htmlFor="name" className="label font-bold pb-1">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={recipe.name}
        onChange={(e) => handleInputChange({ name: e.target.value })}
        className="input input-sm input-bordered input-secondary text-lg mb-2"
        required
      />
      <label htmlFor="origin" className="label font-bold pb-1">
        Origin
      </label>
      <input
        type="text"
        name="origin"
        id="origin"
        value={recipe.origin}
        onChange={(e) => handleInputChange({ origin: e.target.value })}
        className="input input-sm input-bordered input-secondary text-lg mb-2"
        required
      />
      <label htmlFor="instructions" className="label font-bold pb-1">
        Instructions
      </label>
      <textarea
        name="instructions"
        id="instructions"
        value={recipe.instructions}
        onChange={(e) => handleInputChange({ instructions: e.target.value })}
        className="textarea textarea-sm textarea-bordered textarea-secondary text-lg h-36 mb-2"
        required
      />
      <label className="label font-bold pb-0">Ingredients</label>
      {recipe.ingredients.map((ingredient) => (
        <FormIngredient
          key={ingredient.id}
          ingredient={ingredient}
          handleChange={handleIngredientChange}
        />
      ))}
      <div
        className="tooltip tooltip-success self-center"
        data-tip="Add Ingredient"
      >
        <button
          type="button"
          onClick={handleIngredientAdd}
          className="btn btn-sm btn-square btn-success text-lg text-gray-900 mt-2"
        >
          <FaPlus />
        </button>
      </div>
      <div className="self-end mt-4">
        <button
          type="submit"
          className="btn btn-sm btn-success text-gray-900 mr-2"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleFormCancel}
          className="btn btn-sm btn-error text-gray-900"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
