const initState = {
  data: null,
};

export const Canvas = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_TEMPLATE":
      state.data = action.data;
      return state;
    case "CLEAR_TEMPLATE":
      state.data = null;
      return state;
    default:
      return state;
  }
};
