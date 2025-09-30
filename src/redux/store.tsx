import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { todoReducer } from "./reducer";
import type { TodoState } from "./types";
import { thunk } from "redux-thunk";

const loadState = (): TodoState | undefined => {
  try {
    const serialized = localStorage.getItem("todos");
    if (!serialized) return undefined;
    return JSON.parse(serialized) as TodoState;
  } catch {
    return undefined;
  }
};

const saveState = (state: TodoState) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state));
  } catch {
    /* empty */
  }
};

const persistedState = loadState();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  todoReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
