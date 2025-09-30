import { createStore, type StoreEnhancer } from "redux";
import { todoReducer } from "./reducer";

// Extend the Window interface to include __REDUX_DEVTOOLS_EXTENSION__
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => unknown;
  }
}

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    (window.__REDUX_DEVTOOLS_EXTENSION__() as StoreEnhancer<object, object>)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
