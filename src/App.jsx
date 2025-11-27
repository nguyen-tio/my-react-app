import './App.css';

// 好きなカフェのデータ
const favoriteCafeItems = [
  {
    id: 1,
    name: 'スターバックス コーヒー 六本木ヒルズ ウエストウォーク ラウンジ店',
    description: '六本木ヒルズにある落ち着いた雰囲気のラウンジ店。広々とした空間でゆっくりとコーヒーを楽しめます。勉強や読書にも最適な環境です。'
  },
  {
    id: 2,
    name: 'Yellow 代沢店',
    description: '代沢にあるおしゃれなカフェ。コーヒーの味はもちろん、インテリアもとても素敵です。地域に愛される隠れ家的なスポットです。'
  },
  {
    id: 3,
    name: 'No.4',
    description: 'シンプルな店名が印象的なカフェ。こだわりのコーヒーと居心地の良い空間が魅力です。'
  }
];

// 気になるカフェのデータ
const interestedCafeItems = [
  {
    id: 1,
    name: 'ブルーボトルコーヒー 青山カフェ'
  },
  {
    id: 2,
    name: '猿田彦珈琲 恵比寿本店'
  },
  {
    id: 3,
    name: 'アストラル ランプ'
  }
];

// カフェアイテムコンポーネント（好きなカフェ用）
function FavoriteCafeItem({ name, description }) {
  return (
    <div className="cafe-item">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

// カフェアイテムコンポーネント（気になるカフェ用）
function InterestedCafeItem({ name }) {
  return (
    <div className="cafe-item">
      <h3>{name}</h3>
    </div>
  );
}

// メインアプリコンポーネント
export default function App() {
  return (
    <div className="container">
      <h1>カフェ巡り</h1>
      
      <section className="section">
        <h2>好きなカフェ</h2>
        <div className="cafe-list">
          {favoriteCafeItems.map((item) => (
            <FavoriteCafeItem 
              key={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </section>
      
      <section className="section">
        <h2>気になるカフェ</h2>
        <div className="cafe-list">
          {interestedCafeItems.map((item) => (
            <InterestedCafeItem 
              key={item.id}
              name={item.name}
            />
          ))}
        </div>
      </section>
    </div>
  );
}