import type { RootState } from "./store";

export const selectTodos = (state: RootState) => state.todos;
export const selectLoading = (state: RootState) => state.loading;
export const selectError = (state: RootState) => state.error;
