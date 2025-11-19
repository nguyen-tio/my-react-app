import './App.css';

function AdminPanel() {
  return <div style={{ padding: '10px', background: '#e0f7fa' }}>Admin Panel</div>;
}

export default function App() {
  const isLoggedIn = false; // ← ここをtrue/falseで切り替えて試す

  return (
    <div>
      <h1>条件つきレンダー（論理&&）</h1>
      <p>isLoggedIn = {isLoggedIn ? 'true' : 'false'}</p>
      {isLoggedIn && <AdminPanel />}
      {!isLoggedIn && <p>ログインしていません</p>}
    </div>
  );
}