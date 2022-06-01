import { Avatar } from '@mui/material';
import React from 'react';

type Prop = {
  data: any[];
};
export default function ImportList(props: Prop) {
  return (
    <div className="h-576 overflow-auto">
      {props.data.map(item => (
        <div key={item} className="bg-lowColor mb-10 px-10 py-13 rounded-8  flex justify-between items-center ">
          <div className="flex items-center">
            <Avatar alt="Remy Sharp" src="" className="mr-14" />
            <div>
              <div className="">
                <span>BNB </span>
                <span>Binance coin</span>
              </div>
              <div className="text-gray-400">via Kleros Tokens</div>
            </div>
          </div>
          <div className="txtr-14 text-white leading-19 bg-main-btn py-6 px-21 rounded-20 cursor-pointer">Import</div>
        </div>
      ))}
    </div>
  );
}
