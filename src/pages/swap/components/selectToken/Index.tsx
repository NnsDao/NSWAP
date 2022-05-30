import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';

export default function SelectToken() {
  return (
    <div className="bg-main-btn rounded-27 px-18 py-11 flex justify-between items-center text-16 cursor-pointer">
      <div className="pr-11 whitespace-nowrap text-white">Select a Token</div>
      <KeyboardArrowDownIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 18 }}></KeyboardArrowDownIcon>
    </div>
  );
}
