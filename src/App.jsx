import { useState } from 'react';
import './App.css';

// 練習1: スタイルの追加 & 練習2: データの表示
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

// 練習3: 条件つきレンダー（論理&&演算子を使用）
function Item({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked && '✓'}
    </li>
  );
}

function PackingList() {
  return (
    <ul>
      <Item isPacked={true} name="Space suit" />
      <Item isPacked={true} name="Helmet with a golden leaf" />
      <Item isPacked={false} name="Photo of Tam" />
    </ul>
  );
}

// 練習4: リストのレンダー
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return <ul>{listItems}</ul>;
}

// 練習5: イベントに応答する & 練習6: 画面の更新
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
    <div style={{ padding: '20px' }}>
      <h1>React クイックスタート 練習まとめ</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>1. スタイルの追加 & データの表示</h2>
        <Profile />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>2. 条件つきレンダー（論理&&演算子）</h2>
        <h3>Sally Ride's Packing List</h3>
        <p>✓ = 梱包済み</p>
        <PackingList />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>3. リストのレンダー</h2>
        <h3>Shopping List</h3>
        <ShoppingList />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>4. イベントに応答する & 画面の更新</h2>
        <p>各ボタンは独立してカウントされます</p>
        <MyButton />
        <MyButton />
      </section>
    </div>
  );
}