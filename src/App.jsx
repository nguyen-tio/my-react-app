import './App.css';

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>イベントに応答する</h1>
      <MyButton />
    </div>
  );
}