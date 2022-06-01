import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import { Avatar, Modal } from '@mui/material';
import React from 'react';
export default function ConfirmSwap(props: Prop) {
  const { isOpen, toggleOpen } = props;
  const onClose = () => {
    toggleOpen();
    console.log('close');
  };
  return (
    <Modal onClose={() => onClose()} open={isOpen}>
      <div className=" w-463  px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll relative top-2/4 -translate-y-1/2 text-white">
        <div className="flex justify-between items-center pb-30">
          <div onClick={() => onClose()}>
            <KeyboardArrowLeftIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 20 }}></KeyboardArrowLeftIcon>
          </div>
          <div className="text-22 text-white leading-26  font-bold bg-secondary">Confirm Swap</div>
          <div onClick={() => onClose()}>
            <CloseSharpIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
          </div>
        </div>
        <div className="pt-26 pb-13 text-18 leading-22">Swap from</div>
        <div className=" flex justify-between items-center mb-26">
          <div className="text-34 text-white leading-42 text-bold">0.001</div>
          <div className="flex items-center">
            <div className="mr-8">
              <Avatar alt="Remy Sharp" src="" />
            </div>
            <div className="text-18 ">ICP</div>
          </div>
        </div>
        <div className="pt-26 pb-13 text-18 leading-22">Swap to</div>
        <div className=" flex justify-between items-center mb-26">
          <div className="text-34 text-white leading-42 text-bold">0.001</div>
          <div className="flex items-center">
            <div className="mr-8">
              <Avatar alt="Remy Sharp" src="" />
            </div>
            <div className="text-18 ">ICP</div>
          </div>
        </div>
        <div className="flex-16 leading-19 text-gray-400 mb-24">
          Output is estimated.You will recei at least 938.5 AMPL or the transaction will revert
        </div>
        <div className="flex justify-between mb-14">
          <div className="text-16 text-gray-400 leading-19">Price</div>
          <div className="flex items-center">
            <div className="mr-12">0.0023123 ICP per 1INCH</div>
            <SwapCallsIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 18 }}></SwapCallsIcon>
          </div>
        </div>
        <div className="flex justify-between mb-14">
          <div className="text-16 text-gray-400 leading-19 flex items-center">
            <div className="mr-12">Minimum received</div>
            <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A6', fontSize: 14 }}></HelpOutlineIcon>
          </div>
          <div>9.74 &nbsp;NDP</div>
        </div>
        <div className="flex justify-between mb-14">
          <div className="text-16 text-gray-400 leading-19 flex items-center">
            <div className="mr-12">Price Impact</div>
            <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A6', fontSize: 14 }}></HelpOutlineIcon>
          </div>
          <div>{'< 0.01%'}</div>
        </div>
        <div className="flex justify-between mb-40 ">
          <div className="text-16 text-gray-400 leading-19 flex items-center">
            <div className="mr-12">Liquidity Provider Fee</div>
            <HelpOutlineIcon className="cursor-pointer" sx={{ color: '#9799A6', fontSize: 14 }}></HelpOutlineIcon>
          </div>
          <div>0.000066 ICP</div>
        </div>
        <div className="rounded-27 mx-38 px-126 py-16 bg-main-btn text-white text-18 leading-22 cursor-pointer whitespace-nowrap">
          Confirm Swap
        </div>
      </div>
    </Modal>
  );
}
type Prop = { isOpen: boolean; toggleOpen: () => void };
