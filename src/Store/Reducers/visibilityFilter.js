import { visibilityFilters } from "../action";

const VisibilityFilters = (state = visibilityFilters, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default VisibilityFilters;
