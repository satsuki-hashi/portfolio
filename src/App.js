import React from 'react';
import './App.css';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      {/* portfolio-contentで各要素をまとめる */}
      <div className="portfolio-content">
        {/* ここに将来プロフィールコンポーネントなどを追加していく */}
        <Skills />
        <Skills />
        <Skills />
      </div>
    </div>
  );
}

export default App;