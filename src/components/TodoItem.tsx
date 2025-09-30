import React from "react";
import type { Todo } from "../redux/types";
import { useAppDispatch } from "../redux/hooks";
import { toggleTodo, deleteTodo } from "../redux/actions";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
    </li>
  );
};

export default TodoItem;
