import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import TodoItem from "./TodoItem";
import type { Todo } from "../redux/types";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);
  const loading = useAppSelector((state) => state.loading);
  const error = useAppSelector((state) => state.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <ul>
      {todos.length === 0 && <p>No todos yet!</p>}
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
