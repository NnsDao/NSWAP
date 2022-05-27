import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ManageSearchSharpIcon from '@mui/icons-material/ManageSearchSharp';
import { Avatar } from '@mui/material';
import React from 'react';
export default function Dialog() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="w-463 h-780 px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll relative">
      <div className="flex justify-between items-center pb-30">
        <div></div>
        <div className="text-22 text-white leading-26  font-bold bg-secondary">Select a Token</div>
        <div>
          <CloseSharpIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
        </div>
      </div>
      <div className="pb-30 relative bg-secondary rounded-8 ">
        <input
          type="text"
          placeholder="Search name or paste address"
          className="text-18 leading-22 px-20 py-20 w-full  bg-lowColor "
        />
        <div className=" absolute right-25 top-19">
          <ManageSearchSharpIcon
            className="cursor-pointer"
            sx={{ color: '#fff', fontSize: 26 }}></ManageSearchSharpIcon>
        </div>
      </div>
      {data.map(item => (
        <div
          key={item}
          className="bg-main-grounding mb-10 rounded-8 w-414 h-74 px-1 py-1 flex justify-center items-center text-18">
          <div className="w-full rounded-8 bg-lowColor  px-10 py-16 flex justify-between items-center">
            <div className=" flex justify-between items-center">
              <div className="pr-14">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div>1INCH TOKEN</div>
            </div>
            <div className="flex justify-between items-center">
              <div>10.059 &nbsp;</div>
              <div> TOKEN</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
