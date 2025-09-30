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

// Union of all action types
export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
