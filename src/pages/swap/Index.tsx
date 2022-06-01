import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import { useBoolean } from 'usehooks-ts';
import WalletSelector from '../../components/WalletSelector';
import { useGlobalState } from '../../hooks/globalState';
import swapLogo from '../../static/swapLogo.png';
import ConfirmSwap from './components/confirmSwap/Index';
import SelectButton from './components/selectButton/Index';
import SelectDialog from './components/selectDialog/Index';
import style from './index.module.css';
import SwapState, { useSwapState } from './SelectTokenState';

export function Swap() {
  const { value: isOpen, toggle: toggleOpen } = useBoolean(false);
  const { value: isOpenWallet, toggle: toggleOpenWallet } = useBoolean(false);
  const { value: isOpenConfirm, toggle: toggleOpenConfirm } = useBoolean(false);
  const [{ address, isLogin, loginType }] = useGlobalState();
  const [swapState, dispatch] = useSwapState();

  const [fromToken, setFromToken] = useState(null);
  const [fromInput, setFromInput] = useState<string>('');
  const [toToken, setToToken] = useState(null);
  const [toInput, setToInput] = useState<string>('');

  const swapToken = () => {
    console.log('swapToken');
  };
  const openConfirm = () => {
    //todo  price
    if (toInput !== '' && fromInput !== '') {
      toggleOpenConfirm();
    }
  };
  return (
    <div className="pt-105 ">
      <div className="border-1 bg-secondary mx-auto w-463  px-27 py-24 rounded-16">
        <div className=" flex justify-between items-center text-22  leading-26">
          <span></span>
          <span className="font-bold">Swap</span>
          <Brightness7OutlinedIcon
            className="cursor-not-allowed"
            sx={{ color: '#fff', fontSize: 24 }}></Brightness7OutlinedIcon>
        </div>
        <div className="pt-26 pb-4 text-18 leading-22 font-bold">Swap from</div>
        <div className="pt-4 pb-13 flex justify-between items-center">
          <input
            type="number"
            name="fromNum"
            id="fromNum"
            value={fromInput}
            onChange={e => setFromInput(e.target.value)}
            placeholder="0.00"
            className={`${style.inputSize} pl-10 bg-secondary w-205 text-white text-24 leading-42 focus:outline-none`}
          />
          {fromToken ? (
            <div className="flex justify-center items-center">
              <div className="pr-8">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="text-18 pr-8">{fromToken}</div>
              <KeyboardArrowDownIcon
                className="cursor-pointer"
                sx={{ color: '#fff', fontSize: 18 }}></KeyboardArrowDownIcon>
            </div>
          ) : (
            <Button>
              <SelectButton
                onClick={() => {
                  dispatch({ type: 'selectToken', value: setFromToken });
                  toggleOpen();
                }}
              />
            </Button>
          )}
        </div>
        <div className="text-16 pb-23">Balance: &nbsp;&nbsp; 70.42</div>
        <div className="w-full  relative ">
          <div className="h-1 bg-mainGrey opacity-10	"> </div>
          <img
            onClick={() => swapToken()}
            src={swapLogo}
            className="absolute right-0 bottom-n24 cursor-pointer  opacity-100 hover:scale-110"
            alt="swapLogo"
            width="48px"
            height="48px"
          />
        </div>
        <div className="pt-26 pb-4 text-18 leading-22 font-bold">Swap to</div>
        <div className="pt-4 pb-13 flex justify-between items-center">
          <input
            type="number"
            value={toInput}
            onChange={e => setToInput(e.target.value)}
            name="fromNum"
            id="fromNum"
            placeholder="0.00"
            className={`${style.inputSize} pl-10 bg-secondary w-205 text-white text-24 leading-42 focus:outline-none`}
          />
          {toToken ? (
            <div className="flex justify-center items-center">
              <div className="pr-8">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="text-18 pr-8">{toToken}</div>
              <KeyboardArrowDownIcon
                className="cursor-pointer"
                sx={{ color: '#fff', fontSize: 18 }}></KeyboardArrowDownIcon>
            </div>
          ) : (
            <Button>
              <SelectButton
                onClick={() => {
                  dispatch({ type: 'selectToken', value: setToToken });
                  toggleOpen();
                }}
              />
            </Button>
          )}
        </div>
        <div className="text-16 ">Balance: &nbsp;&nbsp; -</div>
        {isLogin ? (
          <div className="pt-30 flex justify-center items-center cursor-pointer" onClick={() => openConfirm()}>
            <div className="text-16 rounded-27 py-17 px-170 bg-main-btn">Swap</div>
          </div>
        ) : (
          <div className="pt-30 flex justify-center items-center cursor-pointer" onClick={toggleOpenWallet}>
            <div className="text-16 rounded-27 text-black py-17 px-126 bg-secondaryGrey">Enter on Amount</div>
          </div>
        )}
      </div>
      {isLogin && fromInput !== '' && toInput !== '' ? (
        <div className="w-463 mx-auto px-24 py-20">
          <div className="flex justify-between items-center mb-14">
            <div className="flex flex-row">
              <div className="text-19 mr-12 text-gray-400">Minimum receieved</div>
              <div>
                <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A5', fontSize: 14 }}></HelpOutlineIcon>
              </div>
            </div>
            <div className="text-white">9.74 NDP</div>
          </div>
          <div className="flex justify-between items-center mb-14">
            <div className="flex flex-row">
              <div className="text-19 mr-12 text-gray-400">Price Impact</div>
              <div>
                <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A5', fontSize: 14 }}></HelpOutlineIcon>
              </div>
            </div>
            <div> {'< 0.01%'}</div>
          </div>
          <div className="flex justify-between items-center mb-14">
            <div className="flex flex-row">
              <div className="text-19 mr-12 text-gray-400">Liquidity Provider Fee</div>
              <div>
                <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A5', fontSize: 14 }}></HelpOutlineIcon>
              </div>
            </div>
            <div>0.000066 ICP</div>
          </div>
          <div className="gradientText text-center cursor-pointer">View Pair Analytics</div>
        </div>
      ) : null}

      <SelectDialog isOpen={isOpen} toggleOpen={toggleOpen}></SelectDialog>
      <ConfirmSwap isOpen={isOpenConfirm} toggleOpen={toggleOpenConfirm}></ConfirmSwap>
      <WalletSelector isOpen={isOpenWallet} toggleOpen={toggleOpenWallet}></WalletSelector>
    </div>
  );
}

export default function SwapWrapper() {
  return (
    <SwapState>
      <Swap></Swap>
    </SwapState>
  );
}
