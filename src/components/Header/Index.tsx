import ContentCopy from '@mui/icons-material/ContentCopy';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Alert, AlertTitle, Avatar, Button, MenuItem, Snackbar } from '@mui/material';
import Menu from '@mui/material/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBoolean } from 'usehooks-ts';
import { plugLogout } from '../../common/plug';
import { stoicLogout } from '../../common/stoic';
import { useGlobalState } from '../../hooks/globalState';
import plug from '../../public/plug.png';
import stoic from '../../public/stoic.png';
import nswapIcon from '../../static/nswap.png';
import WalletSelector from '../WalletSelector';
import style from './index.module.css';
export default function Header() {
  const { value: isOpen, toggle: toggleOpen } = useBoolean(false);
  const [loginAnchor, setLoginAnchor] = useState(null);
  const [index, setIndex] = useState(0);

  const Left = () => {
    const left = [
      { item: 'Swap', route: '/' },
      { item: 'Pool', route: '/pool' },
      { item: 'Aboutnswap', route: '/aboutnswap' },
      { item: 'Vote', route: '/vote' },
    ];
    return (
      <>
        {left.map(({ item, route }, i) => (
          <Button key={item} onClick={() => setIndex(i)}>
            <Link to={route}>
              <div className={`${index === i ? style.selectedBox : ''} ${style.menuBox}`}>{item}</div>
            </Link>
          </Button>
        ))}
      </>
    );
  };

  const [{ address, isLogin, loginType, userICP }, dispatch] = useGlobalState();
  // const getAvatar = () => {
  //   if (loginType === 'stoic') {
  //     return '/stoic.png';
  //   }
  //   if (loginType === 'plug') {
  //     return '/plug.png';
  //   }
  //   return '';
  // };
  // @ts-ignore
  const openLoginMenu = e => {
    setLoginAnchor(e.currentTarget);
  };
  console.log(userICP);

  return (
    <>
      <header className={`${style.header} h-100 flex items-center px-50`}>
        <Link to={'/'}>
          <img src={nswapIcon} alt="nswap logo" className={`${style.nswaplogo}  mr-30`} />
        </Link>
        <Left></Left>
        <div className="flex-1"></div>
        <Button>
          <div className={style.balance}>
            <div className={style.balanceText}>{Number(userICP) / 1e8} ICP</div>
          </div>
        </Button>
        {isLogin ? (
          <Button id="connected-button" onClick={openLoginMenu}>
            <div className={`${style.wallet} flex items-center`}>
              <Avatar alt="Logo" sx={{ width: 24, height: 24 }} src={loginType === 'stoic' ? stoic : plug} />
              <span className="ml-8">{address.slice(0, 4) + '...' + address.slice(-4)}</span>
            </div>
          </Button>
        ) : (
          <Button>
            <div className={style.wallet} onClick={() => toggleOpen()}>
              Connect to Wallet
            </div>
          </Button>
        )}
        {/* <Button>
          <div className={style.mode}></div>
        </Button> */}
        <Button>
          <div className={style.settings}>
            <MoreHorizOutlinedIcon sx={{ color: '#fff' }}></MoreHorizOutlinedIcon>
          </div>
        </Button>
      </header>
      {/* select wallet */}
      <WalletSelector isOpen={isOpen} toggleOpen={toggleOpen}></WalletSelector>
      <LoginAction anchorEl={loginAnchor} close={() => setLoginAnchor(null)}></LoginAction>
    </>
  );
}

const LoginAction = (props: LoginActionProps) => {
  const [{ address, isLogin, loginType, userICP }, dispatch] = useGlobalState();
  const toast = useBoolean(false);
  const [toastMsg, setToastMsg] = useState('');
  const logout = async () => {
    // props.close();
    console.log(`logout start`);
    if (loginType === 'stoic') {
      await stoicLogout();
    } else if (loginType === 'plug') {
      await plugLogout();
    }
    console.log(`logout`);
    dispatch({ type: 'changeLogin', isLogin: false, address: '', userICP: BigInt(0) });
    toast.setTrue();
    setToastMsg('Logged out');
    props.close();
  };

  const copyAddress = async () => {
    await navigator.clipboard.writeText(address);
    toast.setTrue();
    setToastMsg('Acccount ID copied to clipboard');
    props.close();
  };
  return (
    <>
      <Menu
        PaperProps={{ sx: { backgroundColor: '#10152F', color: '#fff' } }}
        id="connected-button"
        open={!!props.anchorEl}
        anchorEl={props.anchorEl}
        onClose={props.close}>
        <MenuItem sx={{ minWidth: '150px' }} onClick={copyAddress}>
          <ContentCopy fontSize="small" />
          <span>&ensp;&ensp;Copy Address</span>
        </MenuItem>
        <MenuItem onClick={logout}>
          <LogoutOutlined fontSize="small" />
          <span>&ensp;&ensp;Logout</span>
        </MenuItem>
      </Menu>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={toast.value}
        onClose={toast.setFalse}
        autoHideDuration={3000}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {toastMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

type LoginActionProps = { anchorEl: Element | ((element: Element) => Element) | null | undefined; close: () => void };
