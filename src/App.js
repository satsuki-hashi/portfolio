import React from 'react';
import './App.css';
import Skills from './Skills';
import Profile from './Profile';

function App() {
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