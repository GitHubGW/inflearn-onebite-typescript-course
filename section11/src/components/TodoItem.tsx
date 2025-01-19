import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onClickDelete: (id: number) => void;
}

const TodoItem = ({ todo, onClickDelete }: TodoItemProps) => {
  const handleClickDelete = () => {
    onClickDelete(todo.id);
  };

  return (
    <div>
      <span>{todo.content}</span>
      <button onClick={handleClickDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
