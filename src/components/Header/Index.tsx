import { Avatar, Chip } from '@mui/material';
import React from 'react';
import { useBoolean } from 'usehooks-ts';
import { useGlobalState } from '../../hooks/globalState';
import nswapIcon from '../../static/nswap.png';
import WalletSelector from '../WalletSelector';
import style from './index.module.css';

export default function Header() {
  const left = ['Swap', 'Pool', 'Aboutnswap', 'Vote'];
  const { value: isOpen, toggle: toggleOpen } = useBoolean(false);

  const [{ address, isLogin, loginType }, dispatch] = useGlobalState();
  const getAvatar = () => {
    if (loginType === 'stoic') {
      return '/stoic.png';
    }
    if (loginType === 'plug') {
      return '/plug.png';
    }
    return '';
  };

  return (
    <>
      <header className={`${style.header} h-100 flex items-center px-50`}>
        <img src={nswapIcon} alt="nswap logo" className="nswaplogo mr-30" />
        {left.map(item => (
          <div key={item} className={style.menuBox}>
            <input type="radio" name="leftMenu" id={item} className="hidden" />
            <label className={style.menu} htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
        <div className="flex-1"></div>

        <div className={style.balance}>0 NS</div>
        {isLogin ? (
          <Chip
            className="ml-15  hover:cursor-pointer"
            sx={{ color: '#fff' }}
            label={address.slice(0, 8)}
            avatar={<Avatar alt="Logo" src={getAvatar()} />}
            // onClick={}
            // onDelete={handleDelete}
            // deleteIcon={<DeleteIcon />}
            variant="outlined"></Chip>
        ) : (
          <div className={style.wallet} onClick={() => toggleOpen()}>
            Connect to Wallet
          </div>
        )}
        <div className={style.mode}></div>
        <div className={style.settings}>...</div>
      </header>
      {/* select wallet */}
      <WalletSelector isOpen={isOpen} toggleOpen={toggleOpen}></WalletSelector>
    </>
  );
}
