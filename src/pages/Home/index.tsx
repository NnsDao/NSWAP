import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import React from 'react';
import style from './index.module.css';

export default function Home() {
  return (
    <div className={`${style.home} mt-60 bg-secondary`}>
      <div className={`${style.header}`}>
        <span>Swap</span>
        <Brightness7OutlinedIcon
          className={style.settings}
          sx={{ color: '#fff', fontSize: 24 }}></Brightness7OutlinedIcon>
      </div>
      <div className={style.from}>Swap from</div>
      <div className={style.fromInput}>
        <input type="number" name="fromNum" id="fromNum" />
      </div>
    </div>
  );
}
