import React from 'react';
import './Skills.css'; // スキルセクション専用のCSSファイルをインポート

// スキルのデータを配列として管理します
const skillData = [
    { name: 'CODING', level: 8 },
    { name: 'HTML', level: 8 },
    { name: 'CSS', level: 7 },
    { name: 'JAVASCRIPT', level: 6 },
    { name: 'JAVA', level: 6 },
    { name: 'PYTHON', level: 5 }
];

const Skills = () => {
  return (
    <div className="skill-section-container">
      <h2 className="skill-title">SKILL</h2>
      <div className="skill-list">
        {skillData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar-wrapper">
              <div className="skill-bar" style={{ width: `${skill.level * 10}%` }}></div>
            </div>
            {/* 画像のデザインに合わせてレベルの数字はバーの外に表示します */}
            <span className="skill-level">{skill.level}</span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;