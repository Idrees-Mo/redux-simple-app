// A single Todo
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Redux State
export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

// Action Types
export const ADD_TODO = "ADD_TODO" as const;
export const TOGGLE_TODO = "TOGGLE_TODO" as const;
export const DELETE_TODO = "DELETE_TODO" as const;

// async action types
export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

// Action Interfaces
export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

// Async Action Interfaces
export interface FetchTodosRequestAction {
  type: typeof FETCH_TODOS_REQUEST;
}

export interface FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

export interface FetchTodosFailureAction {
  type: typeof FETCH_TODOS_FAILURE;
  payload: string;
}

// Union of all action types
export type TodoAction =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | FetchTodosRequestAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction;
