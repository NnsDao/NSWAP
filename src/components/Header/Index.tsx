import React from 'react';
import nswapIcon from '../../static/nswap.png';
import style from './index.module.css';
export default function Header() {
  const left = ['Swap', 'Pool', 'Aboutnswap', 'Vote'];
  return (
    <header className={`${style.header} h-100 flex items-center px-50`}>
      <img src={nswapIcon} alt="nswap logo" className="nswaplogo mr-30" />
      {left.map(item => (
        <div key={item} className={style.menuBox}>
          <input type="radio" name="leftMenu" id={item} className="hidden" />
          <label className={style.menu} htmlFor={item}>
            {item}
          </label>
        </div>
      ))}
      <div className="flex-1"></div>
      <div className={style.balance}>0 NS</div>
      <div className={style.wallet}>Connect to Wallet</div>
      <div className={style.mode}></div>
      <div className={style.settings}>...</div>
    </header>
  );
}
