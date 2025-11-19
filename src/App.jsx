import './App.css';

function AdminPanel() {
  return <div style={{ padding: '10px', background: '#e0f7fa' }}>Admin Panel</div>;
}

function LoginForm() {
  return <div style={{ padding: '10px', background: '#ffe0b2' }}>Login Form</div>;
}

export default function App() {
  const isLoggedIn = false; // ← ここをtrue/falseで切り替えて試す

  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      <h1>条件つきレンダー（if文）</h1>
      <p>isLoggedIn = {isLoggedIn ? 'true' : 'false'}</p>
      {content}
    </div>
  );
}