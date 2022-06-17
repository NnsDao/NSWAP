import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import React from 'react';
import style from './index.module.css';

export default function CustomizeGas() {
  return (
    <div className="w-463 mx-auto pt-15">
      <div>
        <div className={`${style.colorCyan} text-center text-34 font-34 font-bold `}>ELLAsset</div>
        <div className="pt-38 pb-42 text-24 text-center font-bold ">Connect to ELLAsset!</div>
      </div>
      <div className="bg-secondary w-463 px-26 py-34 rounded-8">
        <div>
          <div className="flex justify-between items-center pb-30">
            <div className="flex items-center">
              <KeyboardArrowLeftIcon
                className="cursor-pointer hover:scale-110 mr-25"
                sx={{ color: '#fff', fontSize: 20 }}></KeyboardArrowLeftIcon>
            </div>
            <span className="font-bold text-22 ">Customize Gas</span>
            <div>
              <CloseSharpIcon
                className="cursor-pointer hover:scale-110"
                sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
            </div>
          </div>
        </div>
        <div className="pt-48 text-18 text-white pb-17">Estimated Processing Times</div>
        <div className="py-20 text-16 text-gray-400">
          Select a higher gas fee accelerate the processing of your transaciton.*
        </div>
        <div
          className={`${'hover:bg-main-grounding cursor-pointer'} mb-14 rounded-8  px-1 py-1  flex justify-center items-center text-14 text-white`}>
          <div className=" w-full  rounded-8 bg-lowColor  px-20 py-8 ">
            <div className=" flex justify-between items-center pb-12">
              <div className="text-14 text-gray-400 leading-17">Slow</div>
              <div className="leading-17  text-14">0.00000097 ICP</div>
            </div>
            <div className="flex justify-end items-center ">
              <div className="leading-17 text-14"> &nbsp; $ 0.0152625</div>
            </div>
          </div>
        </div>
        <div
          className={`${'hover:bg-main-grounding cursor-pointer'} mb-14 rounded-8  px-1 py-1  flex justify-center items-center text-14 text-white`}>
          <div className=" w-full  rounded-8 bg-lowColor  px-20 py-8 ">
            <div className=" flex justify-between items-center pb-12">
              <div className="text-14 text-gray-400 leading-17">Slow</div>
              <div className="leading-17  text-14">0.00000097 ICP</div>
            </div>
            <div className="flex justify-end items-center ">
              <div className="leading-17 text-14"> &nbsp; $ 0.0152625</div>
            </div>
          </div>
        </div>
        <div
          className={`${'hover:bg-main-grounding cursor-pointer'} mb-14 rounded-8  px-1 py-1  flex justify-center items-center text-14 text-white`}>
          <div className=" w-full  rounded-8 bg-lowColor  px-20 py-8 ">
            <div className=" flex justify-between items-center pb-12">
              <div className="text-14 text-gray-400 leading-17">Slow</div>
              <div className="leading-17  text-14">0.00000097 ICP</div>
            </div>
            <div className="flex justify-end items-center ">
              <div className="leading-17 text-14"> &nbsp; $ 0.0152625</div>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-30 text-14 text-gray-400">
          <div>
            *Accelerating a transaction by using a higher gas price increases its chances of getting by the network
            faster,but it is not always guaranteed.
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center text-16 text-white pb-14">
            <div className="text-gray-400">Send Amount</div>
            <div>0.002873 ICP</div>
          </div>
          <div className="flex justify-between items-center text-16 text-white pb-14">
            <div className="text-gray-400">Transaction Fee</div>
            <div>0.002873 ICP</div>
          </div>
          <div className="flex justify-between items-center text-16 text-white pb-14">
            <div>New Total</div>
            <div>0.000002873 ICP</div>
          </div>
          <div className="flex justify-end items-center text-16 text-white pb-24">
            <div className="text-gray-400">$6.27</div>
          </div>
        </div>
        <div className="rounded-27 mx-38 px-172 text-center py-16 bg-main-btn text-white text-18 leading-22 cursor-pointer whitespace-nowrap">
          Save
        </div>
      </div>
    </div>
  );
}
