export function AppReducer(state, action) {
  switch (action.type) {
    case "toggleLoading":
      return { ...state, loading: !state.loading };
    case "setResults":
      return { ...state, results: action.payload };
    case "clearResults":
      return { ...state, results: [] };
    case "setAlert":
      return { ...state, alert: action.payload };
    case "clearAlert":
      return { ...state, alert: null };
    case "setForm":
      return { ...state, form: { inputs: action.payload, isOpen: true } };
    case "clearForm":
      return { ...state, form: { inputs: {}, isOpen: false } };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export const Actions = {
  toggleLoading: "toggleLoading",
  setResults: "setResults",
  clearResults: "clearResults",
  setAlert: "setAlert",
  clearAlert: "clearAlert",
  setForm: "setForm",
  clearForm: "clearForm",
};
