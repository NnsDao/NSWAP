import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import swapLogo from '../../static/swapLogo.png';
import style from './index.module.css';
export default function Swap() {
  return (
    // <div className={`${style.swap} mt-60 bg-secondary`}>
    //   <div className={`${style.header}`}>

    //   </div>
    //   <div className={style.from}>Swap from</div>
    //   <div className={style.fromInput}>
    //     <input type="number" name="fromNum" id="fromNum" />
    //   </div>
    // </div>
    <div className="flex justify-center pt-105 ">
      <div className="border-1 bg-secondary  w-617 h-576 px-32 py-36 rounded-16">
        <div className=" flex justify-between items-center text-29 ">
          <span></span>
          <span className="font-bold">Swap</span>
          <Brightness7OutlinedIcon
            className="cursor-pointer"
            // className={style.settings}
            sx={{ color: '#fff', fontSize: 24 }}></Brightness7OutlinedIcon>
        </div>
        <div className="pt-35 text-24 font-bold">Swap from</div>
        <div className="pt-5 pb-17 flex justify-between items-center">
          <input
            type="number"
            name="fromNum"
            id="fromNum"
            placeholder="0"
            className={`${style.inputSize} pl-10 bg-secondary w-205 text-white text-35 leading-56 focus:outline-none`}
          />
          <div className="bg-main-btn rounded-36 px-33 py-23 flex justify-between items-center text-21 cursor-pointer">
            <div className="pr-5">Select a Token</div>
            <KeyboardArrowDownIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 24 }}></KeyboardArrowDownIcon>
          </div>
        </div>
        <div className="text-21 pb-31">Balance: &nbsp;&nbsp; 70.42</div>
        <div className=" w-full h-1 bg-mainGrey relative">
          <img
            src={swapLogo}
            className="absolute right-0 bottom-n32 cursor-pointer "
            alt="swapLogo"
            width="64px"
            height="64px"
          />
        </div>
        <div className=" text-24 pt-31 font-bold">Swap to</div>
        <div className="pt-5 pb-17  flex justify-between items-center">
          <input
            type="number"
            name="fromNum"
            id="fromNum"
            placeholder="0"
            className={`${style.inputSize} pl-10 bg-secondary w-205 text-white text-35 leading-56 focus:outline-none`}
          />
          <div className="bg-main-btn rounded-36 px-33 py-23 flex justify-between items-center text-21 cursor-pointer">
            <div className="pr-5">Select a Token</div>
            <KeyboardArrowDownIcon
              className="cursor-pointer"
              sx={{ color: '#fff', fontSize: 24 }}></KeyboardArrowDownIcon>
          </div>
        </div>
        <div className="text-21">Balance: &nbsp;&nbsp; -</div>
        <div className="pt-40 pb-36 flex justify-center items-center cursor-pointer">
          <div className="text-21 rounded-36 text-black py-23 px-168 bg-secondaryGrey">Enter on Amount</div>
        </div>
      </div>
    </div>
  );
}
