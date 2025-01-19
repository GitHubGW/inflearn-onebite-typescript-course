import { useState } from "react";

interface EditorProps {
  onClickAdd: (text: string) => void;
}

const Editor = ({ onClickAdd }: EditorProps) => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleClickAdd = () => {
    onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClickAdd}>추가</button>
    </div>
  );
};

export default Editor;
