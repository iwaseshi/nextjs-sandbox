import { NextPage } from "next";
import { useState } from "react";

// カスタムフック
const useTodos = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, text]);
    setText("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return { text, todos, changeText, addTodo, deleteTodo };
};

const Home: NextPage = () => {
  const { text, todos, changeText, addTodo, deleteTodo } = useTodos();

  return (
    <main>
      <div>
        <input type="text" value={text} onChange={changeText} />
        <button onClick={addTodo}>追加</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <p>{todo}</p>
              <button onClick={() => deleteTodo(index)}>完了</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
