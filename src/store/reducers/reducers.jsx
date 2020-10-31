import { combineReducers } from "redux";
import { Components } from "./componentReducers";
import { Canvas } from "./canvasReducers";

const RootReducer = combineReducers({ Components, Canvas });

export default RootReducer;
