import { todoReducer } from "./reducer";
import { addTodo, toggleTodo, deleteTodo } from "./actions";
import { type TodoState } from "./types";

describe("todoReducer", () => {
  const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
  };

  it("should handle ADD_TODO", () => {
    const action = addTodo("Test Todo");
    const newState = todoReducer(initialState, action);

    expect(newState.todos.length).toBe(1);
    expect(newState.todos[0].text).toBe("Test Todo");
    expect(newState.todos[0].completed).toBe(false);
  });

  it("should handle TOGGLE_TODO", () => {
    const stateWithTodo: TodoState = {
      ...initialState,
      todos: [{ id: 1, text: "Toggle Me", completed: false }],
    };

    const action = toggleTodo(1);
    const newState = todoReducer(stateWithTodo, action);

    expect(newState.todos[0].completed).toBe(true);
  });

  it("should handle DELETE_TODO", () => {
    const stateWithTodo: TodoState = {
      ...initialState,
      todos: [{ id: 1, text: "Delete Me", completed: false }],
    };

    const action = deleteTodo(1);
    const newState = todoReducer(stateWithTodo, action);

    expect(newState.todos.length).toBe(0);
  });

  it("should not mutate the original state", () => {
    const action = addTodo("Immutability Test");
    const newState = todoReducer(initialState, action);

    expect(newState).not.toBe(initialState); // different object
    expect(initialState.todos.length).toBe(0); // untouched
  });
});
