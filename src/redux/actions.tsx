import type { Dispatch } from "react";
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  type TodoAction,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  type Todo,
} from "./types";

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

// Async action with Thunk
export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: FETCH_TODOS_REQUEST });

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const data: { id: number; title: string; completed: boolean }[] =
        await res.json();

      const todos: Todo[] = data.map((t) => ({
        id: t.id,
        text: t.title,
        completed: t.completed,
      }));

      dispatch({ type: FETCH_TODOS_SUCCESS, payload: todos });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
      } else {
        dispatch({
          type: FETCH_TODOS_FAILURE,
          payload: "An unknown error occurred",
        });
      }
    }
  };
};
