import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, type TodoAction } from "./types";

// Sync actions
export const addTodo = (text: string): TodoAction => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number): TodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: number): TodoAction => ({
  type: DELETE_TODO,
  payload: id,
});
