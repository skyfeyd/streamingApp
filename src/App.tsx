import React from 'react';
import {  Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import  Main from './Pages/Albums/Album';
import Nav from './Components/Nav/Nav';
import Left from './Components/Left/Left';
import Right from './Components/Right/Right';
import './App.less';

function App() {
  
  return (
    <section className='App'>
        <Nav />
        <section className='mainApp'>
          <Left />
          <Main />
          <Right />
        </section>
    </section>
  );
}

export default App;
