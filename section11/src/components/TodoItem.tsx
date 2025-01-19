import { useTodoDispatch } from "../contexts/TodoDispatchContext";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { deleteTodo } = useTodoDispatch();

  const handleClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      <span>{todo.content}</span>
      <button onClick={handleClick}>삭제</button>
    </div>
  );
};

export default TodoItem;
