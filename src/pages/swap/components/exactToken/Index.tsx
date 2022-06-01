import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import style from './index.module.css';

export default function ConfirmSwap() {
  const [index, setIndex] = useState(0);
  const Left = () => {
    const left = ['Details', 'Data'];
    return (
      <div className="flex justify-center items-center mb-40 relative">
        {left.map((item, i) => (
          <Button key={item} onClick={() => setIndex(i)}>
            <div className={`${style.menuBox} ${index === i ? style.selectedBox : ''} `}>{item}</div>
          </Button>
        ))}
        <div className="absolute left-0 bottom-n4 w-full h-1 bg-black "></div>
      </div>
    );
  };
  return (
    <div className=" w-463  px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll relative">
      <div className="flex justify-between items-center pb-30">
        <div>
          <KeyboardArrowLeftIcon
            className="cursor-pointer"
            sx={{ color: '#fff', fontSize: 20 }}></KeyboardArrowLeftIcon>
        </div>
        <div className="text-22 text-white leading-26  font-bold bg-secondary">Swap Exact ICP for Token</div>
        <div>
          <CloseSharpIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
        </div>
      </div>
      <div className="pt-33 pb-35 flex flex-col justify-center items-center ">
        <div className="text-34 leading-42 text-white mb-10">0.022 ICP</div>
        <div className="text-16 text-gray-400 leading-18">${9.74}</div>
      </div>
      <Left />
      {index === 0 ? (
        <div className="pt-108 pb-48 text-16 leading-19 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>Gas fee</div>
              <div className="ml-10 gradientText">Edit</div>
            </div>
            <div>0.0023123 &nbsp;ICP </div>
          </div>
          <div className="flex justify-end pt-10 pb-26">
            <div className="text-16 text-gray-400 leading-18">$9.74</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Total</div>
            <div>0.0023123 ICP </div>
          </div>
          <div className="text-16 text-gray-400 leading-18 flex justify-between items-center mt-10">
            <div>(Amount + gas fee)</div>
            <div>$9.74</div>
          </div>
        </div>
      ) : null}

      <div className="rounded-27  text-white text-18 leading-22 flex justify-center items-center ">
        <Button className="mr-69">
          <div className="gradientText rounded-40 cursor-pointer px-58 py-14 font-bold">Reject</div>
        </Button>
        <div className="w-69 h-1"></div>
        <Button>
          <div className="cursor-pointer rounded-40 text-white font-bold bg-main-btn px-58 py-14">Confirm</div>
        </Button>
      </div>
    </div>
  );
}
