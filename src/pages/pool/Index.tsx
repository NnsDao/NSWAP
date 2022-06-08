import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';
import React from 'react';
import style from './index.module.css';

export default function Pool() {
  return (
    <div className={style.wrapper}>
      <div className={style.Liquidity}>Liquidity provider rewards </div>
      <div className={style.LiquidityInfo}>
        <div className={style.LiquidityItem}>Liquidity provider earn a 0.3% fee on all tades proportional to their</div>
        <div className={style.LiquidityItem}>
          share of the pool.fees are added o the pool, accrue in real time and can
        </div>
        <div className={style.LiquidityItem}>be claimed by withdrawing your liqudity.</div>
        <div className={style.Readmore}>Read more about providing liquidity</div>
      </div>
      <div className={style.Pair}>
        <div className={style.PairTitle}>Your Liquidity</div>
        <div className={style.PairButton}>
          <div className={style.CreateButton}>
            <div className={style.createText}>Create a Pair</div>
          </div>
          <div className={style.LiquidityButton}>
            <div className={style.LiquidityText}>Add Liquidity</div>
          </div>
        </div>
      </div>
      <div className={style.accruedFees}>Account analytics and accrued fees</div>
      <div className={style.AccountWrapper}>
        <div className={style.AccountItem}>
          <div className={style.avatarWrapper}>
            <div className="pr-8">
              <Avatar alt="Remy Sharp" src="" />
            </div>
            <div className="pr-8">
              <Avatar alt="Remy Sharp" src="" />
            </div>
            <div className={style.text}>ETH/APY</div>
          </div>

          <div className={style.logo}>
            <KeyboardArrowDownIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 18 }}></KeyboardArrowDownIcon>
          </div>
        </div>
        <div className={style.AccountItem}>
          <div className={style.avatarWrapper}>
            <div className="pr-8">
              <Avatar alt="Remy Sharp" src="" />
            </div>
            <div className="pr-8">
              <Avatar alt="Remy Sharp" src="" />
            </div>
            <div className={style.text}>ETH/APY</div>
          </div>

          <div className={style.logo}>
            <KeyboardArrowDownIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 18 }}></KeyboardArrowDownIcon>
          </div>
        </div>
      </div>
      <div className={style.ImportWrapper}>
        <div className={style.joined}>Don’t see a pool you joined? </div>
        <div className={style.Import}> Import It</div>
      </div>
    </div>
  );
}
