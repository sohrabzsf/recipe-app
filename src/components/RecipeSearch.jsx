import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { FaSearch } from "react-icons/fa";

function RecipeSearch() {
  const [text, setText] = useState("");
  const { searchRecipes, showAlert } = useContext(AppContext);

  // updates the text state according to the input field
  function handleInputChange(e) {
    setText(e.target.value);
  }

  // starts the search to find recipes based on the input text
  function handleSubmit(e) {
    e.preventDefault();

    if (text === "") {
      showAlert("Please enter something into search bar.", "error");
    } else {
      searchRecipes(text);
      setText("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-control self-center w-full max-w-2xl mb-6 lg:mb-10"
    >
      <div className="input-group">
        <input
          type="text"
          name="search"
          placeholder="Enter recipe name..."
          value={text}
          onChange={handleInputChange}
          className="input input-lg input-bordered input-secondary text-xl flex-1"
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
