import { combineReducers } from "redux";
import { Components } from "./componentReducer";
import { Canvas } from "./canvasReducer";

const RootReducer = combineReducers({ Components, Canvas });

export default RootReducer;
