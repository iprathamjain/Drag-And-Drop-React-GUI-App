import { createStore } from "redux";
import RootReducer from "./reducers/reducers";
import { loadState, saveState } from "./localStorage";

const presistedState = loadState();

const store = createStore(RootReducer, presistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
