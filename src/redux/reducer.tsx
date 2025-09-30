import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  type TodoAction as TodoAction,
  type TodoState,
} from "./types";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

let nextId = 1000;

export const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextId++, text: action.payload, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
