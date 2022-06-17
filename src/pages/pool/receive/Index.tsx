import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Avatar, Modal } from '@mui/material';
import React from 'react';

export default function Receive(props) {
  const { isOpen, toggleOpen } = props;
  const onClose = () => {
    console.log(1);
  };

  return (
    <Modal onClose={() => onClose()} open={isOpen}>
      <div className="pt-105">
        <div className=" w-463  px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll  text-white">
          <div>
            <div className="flex justify-between items-center pb-30">
              <div>
                <KeyboardArrowLeftIcon
                  className="cursor-pointer hover:scale-110"
                  sx={{ color: '#fff', fontSize: 20 }}></KeyboardArrowLeftIcon>
              </div>
              <div className="text-22 text-white leading-26  font-bold bg-secondary">You Will Receive</div>
              <div>
                <CloseSharpIcon
                  className="cursor-pointer hover:scale-110"
                  sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
              </div>
            </div>
          </div>
          <div className="text-34 pt-31 pb-24 font-bold">0.002211223</div>
          <div className="text-16 text-white">ICP/AWC pool Tokens</div>
          <div className="text-16 pt-10 pb-105 text-gray-400">
            Output is estimated. If the price changes by more than 0.5% your transaction revert
          </div>
          <div className="text-16">
            <div className="flex justify-between items-center  pb-14">
              <div className="text-gray-400">ICP Deposited</div>
              <div className="flex justify-center items-center">
                <Avatar alt="Remy Sharp" src="" className="mr-7" />
                0.0023123
              </div>
            </div>
            <div className="flex justify-between items-center  pb-14">
              <div className="text-gray-400">ICP Deposited</div>
              <div className="flex justify-center items-center">
                <Avatar alt="Remy Sharp" src="" className="mr-7" />
                0.0023123
              </div>
            </div>
            <div className="flex justify-between items-center  pb-14">
              <div className="text-gray-400">Rates</div>
              <div>1ICP = 1082.88 AWC </div>
            </div>
            <div className="flex justify-between items-center  pb-14">
              <div></div>1AWC = 0.00000922 ICP
            </div>
            <div className="flex justify-between items-center  pb-14">
              <div className="text-gray-400">Share of pool</div>
              <div>0.12%</div>
            </div>
            <div
              className="pt-30 flex justify-center items-center cursor-pointer"
              onClick={
                () => console.log(1)
                // openConfirm()
              }>
              <div className="text-16 rounded-27 py-17 px-126 bg-main-btn">Confirm Supply</div>
            </div>
          </div>
        </div>
        <div className="w-400 mx-auto text-16 text-gray-400">
          By adding liquidity earn 0.3% of all trades on this pair proportional to your share of the pool. fees are
          added to the pool,accrue in real time and can be claimed by withdrawing your liquidity.
        </div>
      </div>
    </Modal>
  );
}
