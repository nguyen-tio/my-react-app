import './App.css';

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>スタイルの追加</h1>
      <Avatar />
    </div>
  );
}