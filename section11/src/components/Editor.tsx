import { useState } from "react";
import { useTodoDispatch } from "../contexts/TodoDispatchContext";

const Editor = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
    </div>
  );
};

export default Editor;
