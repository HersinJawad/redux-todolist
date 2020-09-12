import { combineReducers } from "redux";
import todos from "../Reducers/todo";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter,
});
