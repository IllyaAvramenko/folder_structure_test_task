import React from 'react';
import s from './App.module.css';
import { MyBrowser } from './MyBrowser/MyBrowser';

function App() {
  return (
    <div className={s.app}>
      <div className={s.app__wrapper}>
        <MyBrowser expandedFolders={['/Common7']}/>
      </div>
    </div>
  );
}

export default App;
