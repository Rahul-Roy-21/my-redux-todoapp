import { createStore } from "redux";
import * as actionTypes from "./actions";

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TodoAdded:
      
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      return {
        ...state,
        todos: [newTodo, ...state.todos, ],
      };

    case actionTypes.ToggleTodoCompleted:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.payload.id) {
            return { ...t, completed: !t.completed };
          } else {
            return t;
          }
        }),
      };
    case actionTypes.TodoRemoved:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload.id),
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
