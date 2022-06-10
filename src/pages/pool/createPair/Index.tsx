import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import { useBoolean } from 'usehooks-ts';
import { useGlobalState } from '../../../../src/hooks/globalState';
import Message from '../../../components/message/Index';
import swapLogo from '../../../static/swapLogo.png';
import style from '../../swap/index.module.css';

export default function CreatePair() {
  const [{ address, isLogin, loginType, userICP }] = useGlobalState();
  const [exChange, setExChange] = useState(0);

  const [fromToken, setFromToken] = useState(null);
  const [fromInput, setFromInput] = useState<string>('');
  const [toToken, setToToken] = useState(null);
  const [toInput, setToInput] = useState<string>('');
  const toast = useBoolean(false);
  const [toastMsg, setToastMsg] = useState('');
  const { value: isOpen, toggle: toggleOpen } = useBoolean(false);

  const onClose = () => {
    console.log('close');
  };
  const swapToken = () => {
    if (fromToken && toToken) {
      setFromToken(toToken);
      setFromInput(toInput);
      setToToken(fromToken);
      setToInput(fromInput);
    }
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    switch (type) {
      case 'fromInput':
        if (fromToken) {
          setFromInput(e.target.value);
        } else {
          toast.setTrue();
          setToastMsg('Select Token!');
          toast.setFalse;
        }
        break;
      case 'toInput':
        if (toToken) {
          setToInput(e.target.value);
        } else {
          toast.setTrue();
          setToastMsg('Select Token!');
          toast.setFalse;
        }
        break;
    }
  };
  return (
    <div className="pt-105">
      <div className=" w-463  px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll  text-white">
        <div className="flex justify-between items-center pb-30">
          <div onClick={() => onClose()}>
            <KeyboardArrowLeftIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 20 }}></KeyboardArrowLeftIcon>
          </div>
          <div className="text-22 text-white leading-26  font-bold bg-secondary">Create a pair</div>
          <div onClick={() => onClose()}>
            <CloseSharpIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
          </div>
        </div>
        <div className="pt-26 pb-4 text-18 leading-22 font-bold">Swap from</div>
        <div className="pt-4 pb-13 flex justify-between items-center">
          <input
            type="number"
            name="fromNum"
            id="fromNum"
            value={fromInput}
            onChange={e => onChangeInput(e, 'fromInput')}
            placeholder="0.00"
            className={`${style.inputSize} pl-10 bg-secondary w-205 text-white text-24 leading-42 focus:outline-none`}
          />
          {fromToken ? (
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => {
                // dispatch({ type: 'selectToken', value: setFromToken });
                toggleOpen();
              }}>
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
              {/* <SelectButton
              onClick={() => {
                // dispatch({ type: 'selectToken', value: setFromToken });
                toggleOpen();
              }}
            /> */}
            </Button>
          )}
        </div>
        <div className="text-16 pb-23">Balance: &nbsp;&nbsp; ${(Number(userICP) / 1e8) * exChange} </div>
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
            onChange={e => onChangeInput(e, 'toInput')}
            name="fromNum"
            id="fromNum"
            placeholder="0.00"
            className={`${style.inputSize} pl-10 bg-secondary w-205 text-white text-24 leading-42 focus:outline-none`}
          />
          {toToken ? (
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => {
                // dispatch({ type: 'selectToken', value: setToToken });
                toggleOpen();
              }}>
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
              {/* <SelectButton
              onClick={() => {
                // dispatch({ type: 'selectToken', value: setToToken });
                toggleOpen();
              }}
            /> */}
            </Button>
          )}
        </div>
        <div className="text-16 ">Balance: &nbsp;&nbsp; -</div>

        <div className="rounded-27 mx-38 px-126 py-16 bg-main-btn text-white text-18 leading-22 cursor-pointer whitespace-nowrap">
          Confirm Swap
        </div>
        <Message text={toastMsg} type="warning" isOpen={toast.value} close={toast.setFalse}></Message>
        {/* <SelectDialog isOpen={isOpen} toggleOpen={toggleOpen}></SelectDialog> */}
      </div>
    </div>
  );
}
