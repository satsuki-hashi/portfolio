import React, { useEffect } from 'react';
import './App.css';
import Skills from './Skills';
import Profile from './Profile';

function App() {
    // useEffectフックを使って、スクロールイベントの処理を実装
  useEffect(() => {
    const handleScroll = () => {
      // 現在の垂直スクロール量を取得
      const scrollY = window.scrollY;
      
      // スクロール量に応じて、背景のX軸（横方向）の位置を計算します。
      // ここの `0.2` の数値を変更すると、背景が動く速度を調整できます。
      const newX = scrollY * 1; 
      
      // body要素のスタイルを直接更新して、背景位置を変更
      document.body.style.backgroundPosition = `${newX}px`;
    };

    // スクロールイベントが発生するたびにhandleScroll関数を実行するように登録
    window.addEventListener('scroll', handleScroll);

    // コンポーネントが不要になったら（アンマウント時）、イベントリスナーを解除します。
    // これを忘れるとメモリリークの原因になることがあります。
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 第2引数に空の配列を渡すことで、この処理が初回レンダリング時に一度だけ実行されるようにします。

  return (
    <div className="App">
      {/* portfolio-contentで各要素をまとめる */}
      <div className="portfolio-content">
        {/* ここに将来プロフィールコンポーネントなどを追加していく */}
        <Profile /> 
        <Skills />
      </div>
    </div>
  );
}

export default App;