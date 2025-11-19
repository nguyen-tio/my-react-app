import { useState } from 'react';
import './App.css';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>画面の更新</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}