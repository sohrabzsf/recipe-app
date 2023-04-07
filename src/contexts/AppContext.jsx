import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [collection, setCollection] = useLocalStorage("myRecipeCollection", []);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [form, setForm] = useState({
    inputs: {},
    shown: false,
  });

  async function searchRecipes(text) {
    setResults([]);
    setLoading(true);

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
      setResults(convertToResults(data.meals));
    } else if (data && data.meals === null) {
      showAlert("Sorry, we couldn't find any match.", "error");
    } else {
      showAlert("Network error! Please check your connection.", "error");
    }

    setLoading(false);
  }

  function showAlert(message, type) {
    setAlert({ message: message, type: type });

    setTimeout(() => setAlert(null), 3000);
  }

  function handleRecipeAdd() {
    setForm({
      inputs: {
        id: uuidv4(),
        name: "",
        origin: "",
        instructions: "",
        ingredients: [],
      },
      shown: true,
    });
  }

  function handleRecipeSave(recipe) {
    const existingIndex = collection.findIndex((item) => item.id === recipe.id);

    if (existingIndex === -1) {
      setCollection([recipe, ...collection]);
      showAlert("Added recipe to your collection.", "success");
    } else {
      showAlert("Recipe was in your collection already.", "warning");
    }
  }

  function handleRecipeEdit(recipe) {
    setForm({ inputs: recipe, shown: true });
  }

  function handleRecipeDelete(id) {
    const filtered = collection.filter((recipe) => recipe.id !== id);
    setCollection(filtered);
  }

  function handleInputChange(changes) {
    setForm({ ...form, inputs: { ...form.inputs, ...changes } });
  }

  function handleIngredientAdd() {
    const newIngredient = { id: uuidv4(), name: "", measure: "" };
    setForm({
      ...form,
      inputs: {
        ...form.inputs,
        ingredients: [...form.inputs.ingredients, newIngredient],
      },
    });
  }

  function handleIngredientDelete(id) {
    setForm({
      ...form,
      inputs: {
        ...form.inputs,
        ingredients: form.inputs.ingredients.filter((i) => i.id !== id),
      },
    });
  }

  function handleFormSave(e) {
    e.preventDefault();

    const existingIndex = collection.findIndex(
      (item) => item.id === form.inputs.id
    );

    if (existingIndex === -1) {
      const newRecipe = { ...form.inputs };

      setCollection([newRecipe, ...collection]);
    } else {
      const newCollection = JSON.parse(JSON.stringify(collection));
      newCollection[existingIndex] = form.inputs;

      setCollection(newCollection);
    }

    setForm({ inputs: {}, shown: false });
  }

  function handleFormCancel() {
    setForm({ inputs: {}, shown: false });
  }

  return (
    <AppContext.Provider
      value={{
        collection,
        results,
        loading,
        alert,
        form,
        searchRecipes,
        showAlert,
        handleRecipeAdd,
        handleRecipeSave,
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

function convertToResults(meals) {
  const resultsArray = meals.map((meal) => {
    const id = meal.idMeal;
    const name = meal.strMeal;
    const origin = meal.strArea;
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

    return { id, name, origin, instructions, ingredients };
  });

  return resultsArray;
}
