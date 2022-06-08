import { Button } from '@mui/material';
import React from 'react';
import Account from './Account/Index';
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
          <Button className="mr-24">
            <div className={style.CreateButton}>
              <div className={style.createText}>Create a Pair</div>
            </div>
          </Button>
          <Button>
            <div className={style.LiquidityButton}>
              <div className={style.LiquidityText}>Add Liquidity</div>
            </div>
          </Button>
        </div>
      </div>
      <div className={style.accruedFees}>Account analytics and accrued fees</div>
      <Account></Account>
      <div className={style.ImportWrapper}>
        <div className={style.joined}>Don’t see a pool you joined? </div>
        <div className={style.Import}> Import It</div>
      </div>
    </div>
  );
}
