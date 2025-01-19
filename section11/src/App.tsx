import { useReducer, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";
import { TodoStateContext } from "./contexts/TodoStateContext";
import { TodoDispatchContext } from "./contexts/TodoDispatchContext";

interface AddAction {
  type: "ADD";
  data: Todo;
}

interface DeleteAction {
  type: "DELETE";
  id: number;
}

type Action = AddAction | DeleteAction;

const reducer = (state: Todo[], action: Action) => {
  if (action.type === "ADD") {
    const result = [...state, action.data];
    return result;
  }
  if (action.type === "DELETE") {
    const result = state.filter((item) => item.id !== action.id);
    return result;
  }

  return state;
};

const App = () => {
  const idRef = useRef(0);
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = (text: string) => {
    const newTodo = { id: idRef.current + 1, content: text };
    dispatch({ type: "ADD", data: newTodo });
    idRef.current++;
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <TodoStateContext.Provider value={{ todos }}>
      <TodoDispatchContext.Provider value={{ addTodo, deleteTodo }}>
        <div className="App">
          <h1>App</h1>
          <Editor />

          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default App;
