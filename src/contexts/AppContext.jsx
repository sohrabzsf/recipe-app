import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
import { AppReducer, Actions } from "./AppReducer";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [collection, setCollection] = useLocalStorage("myRecipeCollection", []);
  const initialState = {
    loading: false,
    results: [],
    alert: null,
    form: { inputs: {}, isOpen: false },
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // fetches recipes data and sets it to results if the response was successful
  async function searchRecipes(text) {
    dispatch({ type: Actions.clearResults });
    dispatch({ type: Actions.toggleLoading });

    let params;
    let response;
    let data;

    try {
      params = new URLSearchParams({ s: text });
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?${params}`
      );
      data = await response.json();
    } catch (err) {
      console.log(`${err.name}: ${err.message}`);
    }

    if (data && data.meals) {
      dispatch({
        type: Actions.setResults,
        payload: convertToResults(data.meals),
      });
    } else if (data && data.meals === null) {
      showAlert("Sorry, we couldn't find any match.", "error");
    } else {
      showAlert("Network error! Please check your connection.", "error");
    }

    dispatch({ type: Actions.toggleLoading });
  }

  // shows different alerts according to the parameters received
  function showAlert(message, type) {
    dispatch({
      type: Actions.setAlert,
      payload: { message: message, type: type },
    });

    setTimeout(() => dispatch({ type: Actions.clearAlert }), 3000);
  }

  // saves a recipe from the search results to the collection if it's not already there
  function handleRecipeSave(recipe) {
    const existingIndex = collection.findIndex((item) => item.id === recipe.id);

    if (existingIndex === -1) {
      setCollection([recipe, ...collection]);
      showAlert("Added recipe to your collection.", "success");
    } else {
      showAlert("Recipe was in your collection already.", "warning");
    }
  }

  // opens the form with empty input fields to create new recipe
  function handleRecipeAdd() {
    dispatch({
      type: Actions.setForm,
      payload: {
        id: uuidv4(),
        name: "",
        cuisine: "",
        imagePath: "",
        instructions: "",
        ingredients: [],
      },
    });
  }

  // opens the form and puts a recipe data from the collection into it for editing
  function handleRecipeEdit(recipe) {
    dispatch({ type: Actions.setForm, payload: recipe });
  }

  // removes a recipe from the collection
  function handleRecipeDelete(id) {
    const filtered = collection.filter((recipe) => recipe.id !== id);

    setCollection(filtered);
  }

  // updates the form state according to the changes of input fields
  function handleInputChange(changes) {
    dispatch({
      type: Actions.setForm,
      payload: { ...state.form.inputs, ...changes },
    });
  }

  // adds new ingredient fields to the open form
  function handleIngredientAdd() {
    const newIngredient = { id: uuidv4(), name: "", measure: "" };

    dispatch({
      type: Actions.setForm,
      payload: {
        ...state.form.inputs,
        ingredients: [...state.form.inputs.ingredients, newIngredient],
      },
    });
  }

  // removes an ingredient fields from the open form
  function handleIngredientDelete(id) {
    dispatch({
      type: Actions.setForm,
      payload: {
        ...state.form.inputs,
        ingredients: state.form.inputs.ingredients.filter((i) => i.id !== id),
      },
    });
  }

  // saves data in the open form to the collection in a new or existing recipe
  function handleFormSave(e) {
    e.preventDefault();

    const existingIndex = collection.findIndex(
      (item) => item.id === state.form.inputs.id
    );

    if (existingIndex === -1) {
      const newRecipe = { ...state.form.inputs };

      setCollection([newRecipe, ...collection]);
    } else {
      const newCollection = JSON.parse(JSON.stringify(collection));
      newCollection[existingIndex] = state.form.inputs;

      setCollection(newCollection);
    }

    dispatch({ type: Actions.clearForm });
  }

  // closes the form and removes data from it's state
  function handleFormCancel() {
    dispatch({ type: Actions.clearForm });
  }

  return (
    <AppContext.Provider
      value={{
        collection,
        loading: state.loading,
        results: state.results,
        alert: state.alert,
        form: state.form,
        searchRecipes,
        showAlert,
        handleRecipeSave,
        handleRecipeAdd,
        handleRecipeEdit,
        handleRecipeDelete,
        handleInputChange,
        handleIngredientAdd,
        handleIngredientDelete,
        handleFormSave,
        handleFormCancel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// converts the array of objects received from the api to desired format and discards extra properties
function convertToResults(meals) {
  const resultsArray = meals.map((meal) => {
    const id = meal.idMeal;
    const name = meal.strMeal;
    const cuisine = meal.strArea;
    const imagePath = meal.strMealThumb;
    const instructions = meal.strInstructions.replace(/\r\n/g, " ");
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientName = meal["strIngredient" + i];
      const ingredientMeasure = meal["strMeasure" + i];

      if (ingredientName !== "" && ingredientName !== null) {
        ingredients.push({
          id: uuidv4(),
          name: ingredientName,
          measure: ingredientMeasure,
        });
      }
    }

    return { id, name, cuisine, imagePath, instructions, ingredients };
  });

  return resultsArray;
}
