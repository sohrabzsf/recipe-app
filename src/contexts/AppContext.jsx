import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [collection, setCollection] = useLocalStorage(
    "myRecipeCollection",
    sampleRecipes
  );
  const [form, setForm] = useState({
    inputs: {},
    shown: false,
  });

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
      (recipe) => recipe.id === form.inputs.id
    );

    if (existingIndex !== -1) {
      const newCollection = JSON.parse(JSON.stringify(collection));
      newCollection[existingIndex] = form.inputs;

      setCollection(newCollection);
    } else {
      const newRecipe = { ...form.inputs };
      setCollection([newRecipe, ...collection]);
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
        form,
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

const sampleRecipes = [
  {
    id: uuidv4(),
    name: "Spanish Tortilla",
    origin: "Spanish",
    instructions:
      "Put a large non-stick frying pan on a low heat. Cook the onion slowly in the oil and butter until soft but not brown \u2013 this should take about 15 mins. Add the potatoes, cover the pan and cook for a further 15-20 mins, stirring occasionally to make sure they fry evenly.\r\nWhen the potatoes are soft and the onion is shiny, crush 2 garlic cloves and stir in, followed by the beaten eggs.\r\nPut the lid back on the pan and leave the tortilla to cook gently. After 20 mins, the edges and base should be golden, the top set but the middle still a little wobbly. To turn it over, slide it onto a plate and put another plate on top, turn the whole thing over and slide it back into the pan to finish cooking. Once cooked, transfer to a plate and serve the tortilla warm or cold, scattered with the chopped parsley.\r\nTo accompany, take slices of warmed baguette, stab all over with a fork and rub with the remaining garlic, pile on grated tomatoes and season with sea salt and a drizzle of olive oil.",
    ingredients: [
      { id: uuidv4(), name: "Onion", measure: "1 sliced" },
      { id: uuidv4(), name: "Potatos", measure: "400g" },
    ],
  },
  {
    id: uuidv4(),
    name: "Spicy Arrabiata Penne",
    origin: "Italian",
    instructions:
      "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    ingredients: [
      { id: uuidv4(), name: "penne rigate", measure: "1 pound" },
      { id: uuidv4(), name: "olive oil", measure: "1/4 cup" },
    ],
  },
  {
    id: uuidv4(),
    name: "Lamb Biryani",
    origin: "Indian",
    instructions:
      "Grind the cashew, poppy seeds and cumin seeds into a smooth paste, using as little water as possible. Set aside. \r\nDeep fry the sliced onions when it is hot. Don\u2019t overcrowd the oil. When the onions turn light brown, remove from oil and drain on paper towel. The fried onion will crisp up as it drains. Also fry the cashewnuts till golden brown. Set aside.\r\nWash the rice and soak in water for twenty minutes.\r\nMeanwhile, take a big wide pan, add oil in medium heat, add the sliced onions, add the blended paste, to it add the green chillies, ginger garlic paste and garlic and fry for a minute.\r\nThen add the tomatoes and saut\u00e9 them well till they are cooked and not mushy.\r\nThen to it add the red chilli powder, biryani powder, mint, coriander leaves and saut\u00e9 them well.\r\nAdd the yogurt and mix well. I always move the skillet away from the heat when adding yogurt which prevents it from curdling.\r\nNow after returning the skillet back to the stove, add the washed lamb and salt and \u00bd cup water and mix well. Cook for 1 hour and cook it covered in medium low heat or put it in a pressure cooker for 6 whistles. If the water is not drained totally, heat it by keeping it open.\r\nTake another big pan, add thrice the cup of rice you use, and boil it. When it is boiling high, add the rice, salt and jeera and mix well. After 7 minutes exact or when the rice is 80% done. Switch off and drain the rice.\r\nNow, the layering starts. To the lamb, pat and level it. Add the drained hot rice on the top of it. Garnish with fried onions, ghee, mint, coriander leaves and saffron dissolved in milk.\r\nCover the dish and bake in a 350f oven for 15 minutes or till the cooked but not mushy. Or cook in the stove medium heat for 12 minutes and lowest heat for 5 minutes. And switch off. Mix and serve hot!\r\nNotes\r\n1. If you are cooking in oven, do make sure to cook in a big oven safe pan and cover it tight and then keep in oven for the final step.\r\n2. You can skip biryani masala if you don\u2019t have and add just garam masala (1 tsp and red chilli powder \u2013 3 tsp instead of 1 tsp)\r\n3. If it is spicy in the end, squeeze some lemon, it will reduce the heat and enhance the flavors also.",
    ingredients: [
      { id: uuidv4(), name: "Cashew nuts", measure: "12" },
      { id: uuidv4(), name: "Cumin seeds", measure: "\u00bd tbsp" },
    ],
  },
];
