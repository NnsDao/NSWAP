import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { Modal } from '@mui/material';
import React from 'react';
import { useSwapState } from '../../SelectTokenState';
import SearchInput from './components/searchInput/Index';
import TokenList from './components/tokenList/Index';
export default function SelectDialog(props: Prop) {
  const { isOpen, toggleOpen } = props;
  const [swapState, dispatch] = useSwapState();
  const data = [1, 2, 3, 4, 5, 6, 7];
  console.log(useSwapState());

  const onCloseSelector = (val?: any) => {
    console.log(val);
    toggleOpen();
  };

  return (
    <Modal onClose={() => onCloseSelector()} open={isOpen}>
      <div className="w-463 h-780 px-24 py-26 bg-secondary rounded-8 mx-auto overflow-scroll relative top-2/4 -translate-y-1/2">
        <div className=" flex justify-between items-center pb-30">
          <div></div>
          <div className="text-22 text-white leading-26  font-bold bg-secondary">Select a Token</div>
          <div onClick={() => onCloseSelector()}>
            <CloseSharpIcon
              className="cursor-pointer hover:scale-110 "
              sx={{ color: '#fff', fontSize: 20 }}></CloseSharpIcon>
          </div>
        </div>
        {/* <ImportInput /> */}
        <SearchInput />
        {/* <ImportList data={data} /> */}
        <TokenList
          data={data}
          onClose={(val: any) => {
            swapState.selectToken(val);
            onCloseSelector(val);
          }}
        />
        {/* <div className="w-387 m-auto absolute py-13 bottom-30 left-38 flex justify-center items-center cursor-pointer bg-secondaryGrey rounded-27">
          <img src={manager} alt="manager" width={'28px'} className="mr-12" />
          <span className="gradientText">Manager</span>
        </div> */}
      </div>
    </Modal>
  );
}
type Prop = { isOpen: boolean; toggleOpen: () => void };
