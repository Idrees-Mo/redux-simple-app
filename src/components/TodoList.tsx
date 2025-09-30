// import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import TodoItem from "./TodoItem";
import type { Todo } from "../redux/types";
import { selectError, selectLoading, selectTodos } from "../redux/selectors";
import { fetchTodos } from "../redux/actions";

const TodoList: React.FC = () => {
  // slice selectors
  const todos = useAppSelector(selectTodos);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);

  const handleFetchTodos = () => {
    dispatch(fetchTodos());
  };

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <>
      <button onClick={handleFetchTodos}>Fetch Todos</button>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {todos.length === 0 && <p>No todos yet!</p>}
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
