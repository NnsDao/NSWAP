import { Button } from '@mui/material';
import React from 'react';
import { useBoolean } from 'usehooks-ts';
import SwapState from '../swap/SelectTokenState';
import Account from './Account/Index';
import CreatePair from './createPair/Index';
import style from './index.module.css';
import Receive from './receive/Index';
export function Pool() {
  const { value: isOpen, toggle: toggleOpen } = useBoolean(false);

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
          <Button className="mr-24" onClick={toggleOpen}>
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
      <CreatePair isOpen={isOpen} toggleOpen={toggleOpen}></CreatePair>
      <Receive></Receive>
    </div>
  );
}
export default function PoolWrapper() {
  return (
    <SwapState>
      <Pool></Pool>
    </SwapState>
  );
}
