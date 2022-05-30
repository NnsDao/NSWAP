import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import React from 'react';
import manager from '../../../../../../public/manager.png';
import ImportInput from './components/importInput/Index';
import ImportList from './components/importList/Index';
import SearchInput from './components/searchInput/Index';
export default function Dialog() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="w-463 h-780 px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll relative">
      <div className="flex justify-between items-center pb-30">
        <div></div>
        <div className="text-22 text-white leading-26  font-bold bg-secondary">Select a Token</div>
        <div>
          <CloseSharpIcon className="cursor-pointer" sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
        </div>
      </div>
      <ImportInput />
      <SearchInput />
      <ImportList data={data} />
      {/* <TokenList data={data} /> */}
      <div className="w-387 m-auto absolute py-13 bottom-30 left-38 flex justify-center items-center cursor-pointer bg-secondaryGrey rounded-27">
        <img src={manager} alt="manager" width={'28px'} className="mr-12" />
        <span className="gradientText">Manager</span>
      </div>
    </div>
  );
}
