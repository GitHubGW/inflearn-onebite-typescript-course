import { createContext, useContext } from "react";

export const TodoDispatchContext = createContext<{
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
} | null>(null);

export const useTodoDispatch = () => {
  const data = useContext(TodoDispatchContext);

  if (!data) {
    throw new Error("TodoDispatchContext is not found");
  }

  return data;
};
