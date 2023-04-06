import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { FaSearch } from "react-icons/fa";

function RecipeSearch() {
  const [text, setText] = useState("");
  const { searchRecipes } = useContext(AppContext);

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (text !== "") {
      searchRecipes(text);
      setText("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-control self-center w-full max-w-2xl mb-6"
    >
      <div className="input-group">
        <input
          type="text"
          name="search"
          placeholder="Enter recipe name..."
          value={text}
          onChange={handleInputChange}
          className="input input-lg input-bordered input-secondary text-xl flex-1"
          required
        />
        <button
          type="submit"
          className="btn btn-lg btn-secondary text-3xl text-gray-900 flex-none"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default RecipeSearch;
