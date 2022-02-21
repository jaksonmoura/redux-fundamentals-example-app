import { createStore } from "redux";
import rootReducer from "./reducer";

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos');

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }



const store = createStore(rootReducer, undefined,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;