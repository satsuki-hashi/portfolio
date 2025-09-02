import React from 'react';
import './Profile.css'; // Profileコンポーネント専用のCSS
import { GearIcon, MessageIcon } from './icons'; // アイコンをインポート

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">プロフィール</h2>
      <div className="profile-icons">
        name：さつき<br />
        age：30代
      </div>
    </div>
  );
};

export default Profile;
