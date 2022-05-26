import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import React from 'react';
import swapLogo from '../../static/swapLogo.png';
import SelectToken from './components/selectToken/Index';
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
      <div className="border-1 bg-secondary  w-463  px-27 py-24 rounded-16">
        <div className=" flex justify-between items-center text-22  leading-26">
          <span></span>
          <span className="font-bold">Swap</span>
          <Brightness7OutlinedIcon
            className="cursor-pointer"
            // className={style.settings}
            sx={{ color: '#fff', fontSize: 24 }}></Brightness7OutlinedIcon>
        </div>
        <div className="pt-26 pb-4 text-18 leading-22 font-bold">Swap from</div>
        <div className="pt-4 pb-13 flex justify-between items-center">
          <input
            type="number"
            name="fromNum"
            id="fromNum"
            placeholder="0"
            className={`${style.inputSize} pl-10 bg-secondary w-205 text-white text-24 leading-42 focus:outline-none`}
          />
          <SelectToken />
        </div>
        <div className="text-16 pb-23">Balance: &nbsp;&nbsp; 70.42</div>
        <div className="w-full  relative">
          <div className="h-1 bg-mainGrey opacity-10	"> </div>
          <img
            src={swapLogo}
            className="absolute right-0 bottom-n24 cursor-pointer  opacity-100"
            alt="swapLogo"
            width="48px"
            height="48px"
          />
        </div>
        <div className="pt-26 pb-4 text-18 leading-22 font-bold">Swap to</div>
        <div className="pt-4 pb-13 flex justify-between items-center">
          <input
            type="number"
            name="fromNum"
            id="fromNum"
            placeholder="0"
            className={`${style.inputSize} pl-10 bg-secondary w-205 text-white text-24 leading-42 focus:outline-none`}
          />

          <SelectToken />

          {/* <Dialog onClose={handleClose} open={open}>
          </Dialog> */}
        </div>
        <div className="text-16 ">Balance: &nbsp;&nbsp; -</div>
        <div className="pt-30 flex justify-center items-center cursor-pointer">
          <div className="text-16 rounded-27 text-black py-17 px-126 bg-secondaryGrey">Enter on Amount</div>
        </div>
      </div>
    </div>
  );
}
