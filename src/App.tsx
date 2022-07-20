import React from 'react';
import {  Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import  Main from './Pages/Albums/Album';
import Nav from './Components/Nav/Nav';
import Left from './Components/LeftSideBar/Left';
import Right from './Components/RightSideBar/Right';

import Album from './Pages/Albums/Album';
import './App.less';


function App() {
  
  return (
    <section className='App'>
        <Nav />
        <section className='mainApp'>
          <Left />
          <div className='centerApp'>
            <Album />
          </div>
          <Right />
        </section>
    </section>
  );
}

export default App;
