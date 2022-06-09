import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import style from '../index.module.css';

export default function Account() {
  const source = [
    { name: '1', isOpen: false },
    { name: '2', isOpen: false },
  ];
  const [data, setData] = useState(source);
  const toogleItem = index => {
    //@ts-ignore
    setData(data => {
      let item = JSON.stringify(data);
      item = JSON.parse(item);
      //@ts-ignore
      item[index].isOpen = !item[index].isOpen;
      console.log(index, item);
      return item;
    });
  };
  return (
    <div className={style.AccountWrapper}>
      {data.map((item, index) => (
        <div className={style.AccountItem} key={item.name} onClick={() => toogleItem(index)}>
          <div className={style.AccountTop}>
            <div className={style.avatarWrapper}>
              <div className="pr-8">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="pr-8">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className={style.text}>ETH/APY</div>
            </div>

            <div className={item.isOpen ? style.logo : style.logoReverse}>
              <KeyboardArrowDownIcon
                className="cursor-pointer"
                sx={{ color: '#fff', fontSize: 18 }}></KeyboardArrowDownIcon>
            </div>
          </div>

          <div className={`${!item.isOpen ? style.hide : ''} ${style.show} px-10 w-full`}>
            <div className="w-full flex justify-between items-center pt-14">
              <div className="text-16 text-gray-400">Your total pool tokens</div>
              <div className="text-16 text-white">0.0009887778</div>
            </div>
            <div className="w-full flex justify-between items-center pt-14">
              <div className="text-16 text-gray-400">Fooled ICP</div>
              <div className="text-16 text-white">0.090988889 ICP</div>
            </div>
            <div className="w-full flex justify-between items-center pt-14">
              <div className="text-16 text-gray-400">Pooled AWC</div>
              <div className="text-16 text-white">0.000066 AWC</div>
            </div>
            <div className="w-full flex justify-between items-center pt-20">
              <div className="text-16 text-gray-400">Your pool share</div>
              <div className="text-16 text-white">0.14%</div>
            </div>
            <div className="text-18  flex justify-center pb-34">
              <div className=" gradientText ">View Accrued Fees and Analytics</div>
            </div>
            <div className="flex justify-center items-center">
              <Button>
                <div className={style.RemoveButton}>
                  <div className={style.RemoveText}>Remove</div>
                </div>
              </Button>
              <div className="w-50 h-1"></div>
              <Button>
                <div className={style.RemoveButton}>
                  <div className={style.RemoveText}>Add</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
