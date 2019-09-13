import { createStore } from "redux";

const INITIAL_STATE = ["reactJS", "nodeJS"];
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return [...state, action.course];
    default:
      return [...state];
  }
}

const store = createStore(reducer);
export default store;
