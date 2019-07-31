import React from 'react';
import home from './svg/icon-home.svg';
import homea from './svg/icon-home-active.svg';
import stores from './svg/icon-stores.svg';
import storesa from './svg/icon-stores-active.svg';
import account from './svg/icon-account.svg';
import accounta from './svg/icon-account-active.svg';
import menu from './svg/icon-menu.svg';
import menua from './svg/icon-menu-active.svg';
import more from './svg/icon-more.svg';
import morea from './svg/icon-more-active.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="ula">
      <li className="lia">
        <a href="">
          <span>
          <img src={home} alt=""/>
          <img src={homea} alt=""/>
          </span>
          <div>主页</div>
        </a>
      </li>
      <li className="lia">
        <a href="">
          <span>
            <img src={stores} alt=""/>
            <img src={storesa} alt=""/>
          </span>
          <div>门店</div>
        </a>
      </li>
      <li className="lia">
        <a href="">
          <span>
            <img src={account} alt=""/>
            <img src={accounta} alt=""/>
          </span>
          <div>我的账户</div>
        </a>
      </li>
      <li className="lia">
        <a href="">
          <span>
            <img src={menu} alt=""/>
            <img src={menua} alt=""/>
          </span>
          <div>菜单</div>
        </a>
      </li>
      <li className="lia">
        <a href="">
          <span>
            <img src={more} alt=""/>
            <img src={morea} alt=""/>
          </span>
          <div>更多</div>
        </a>
      </li>
    </ul>
    </div>
  );
}
export default App;
