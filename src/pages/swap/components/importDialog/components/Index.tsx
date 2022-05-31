import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Avatar, Checkbox } from '@mui/material';
import { yellow } from '@mui/material/colors';
import React from 'react';

export default function Import() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="w-463 h-780 px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll relative">
      <div className="flex justify-between items-center pb-30">
        <div>
          <KeyboardArrowLeftIcon
            className="cursor-pointer"
            sx={{ color: '#fff', fontSize: 20 }}></KeyboardArrowLeftIcon>
        </div>
        <div className="text-22 text-white leading-26  font-bold bg-secondary">Import Token</div>
        <div>
          <CloseSharpIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
        </div>
      </div>
      <div className="px-10 py-10 rounded-8 bg-lowColor flex justify-start items-center">
        <div>
          <Avatar alt="Remy Sharp" src="" className="mr-14" />
        </div>
        <div>
          <div className="text-18px leading-22">BNB Binance coin</div>
          <div className="text-14px leading-17 text-blue-300">0x88c3787488fift768927c6789c789d78dd7</div>
          <div className="text-16px leading-19 text-gray-500">via Kleros Tokens</div>
        </div>
      </div>
      <div className="pt-43 pb-30 flex justify-center items-center m-auto">
        <img src={'null'} alt="" width={104} height={94} />
      </div>
      <div className="text-center">
        <div>Trade at your own risk！</div>
        <div className="text-gray-500 pt-18 pb-39 ">
          <div>Anyone can create a token,including</div>
          <div>creating fake versions of existing tokens</div>
          <div>that claim to represent projects. </div>
          <div>If you purchase this token,</div>
          <div>you may not be able to sell it back</div>
        </div>
        <div className="flex justify-center items-center">
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: yellow[800],
              '&.Mui-checked': {
                color: yellow[600],
              },
            }}
          />
          <div>I understand </div>
        </div>
      </div>
      <div className="w-387 m-auto absolute py-16 bottom-30 left-38 flex justify-center items-center cursor-pointer bg-main-btn rounded-27">
        <span className="text-white text-18">Import</span>
      </div>
    </div>
  );
}
