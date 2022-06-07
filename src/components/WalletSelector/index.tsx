import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Alert, AlertTitle, Button, CircularProgress, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useBoolean } from 'usehooks-ts';
import { plugLogin } from '../../common/plug';
import { stoicLogin } from '../../common/stoic';
import { getUserICP } from '../../common/utils';
import { useGlobalState } from '../../hooks/globalState';
import style from './index.module.css';

export default function WalletSelector(props: PropsType) {
  const { isOpen, toggleOpen } = props;

  const [selecteDIndex, setIndex] = useState(0);
  const onCloseSelector = () => {
    toggleOpen();
    console.log('close');
  };

  const loginLoading = useBoolean(false);
  const connectErr = useBoolean(false);
  const [{ isLogin, address, loginType }, dispatch] = useGlobalState();

  const login = async () => {
    const params = walletList[selecteDIndex];
    loginLoading.setTrue();
    let address = '';
    let userICP = BigInt(0);
    try {
      if (params.id === 'stoic') {
        const res = await stoicLogin();
        address = res || '';
      } else if (params.id === 'plug') {
        const res = await plugLogin();
        address = res || '';
      }
    } catch (error) {
      connectErr.setTrue();
    }

    if (!address) {
      connectErr.setTrue();
    } else {
      connectErr.setFalse();
    }
    address && (userICP = await getUserICP(address));
    loginLoading.setFalse();
    dispatch({ type: 'changeLogin', isLogin: true, address: address, loginType: params.id, userICP: userICP });
    toggleOpen();
  };
  const Loading = () => {
    return (
      <div className="absolute left-1 right-1 top-1 bottom-1 flex items-center justify-center">
        <CircularProgress color="secondary" size={150} />
      </div>
    );
  };

  return (
    <Modal onClose={() => onCloseSelector()} open={isOpen}>
      <div className={`${style.box} bg-secondary`}>
        <div className={style.title}>
          <span>Connect to a wallet</span>
          <div className={style.close} onClick={() => toggleOpen()}>
            <CloseOutlinedIcon sx={{ color: '#fff', fontSize: 18 }}></CloseOutlinedIcon>
          </div>
        </div>
        <div>
          {walletList.map(({ text, logo }, index) => (
            <div
              key={text}
              className={`${style.walletItemBox} ${selecteDIndex === index ? style.activeWalletItemBox : ''}`}>
              <div
                onClick={() => setIndex(index)}
                className={`${style.walletItem} ${selecteDIndex === index ? style.activeWalletItem : ''}`}>
                <span>{text}</span>
                <img src={logo} />
              </div>
            </div>
          ))}
        </div>
        <div className="m-auto pt-40 text-center">
          <Button variant="contained" onClick={() => login()} className="bg-main-btn relative">
            Continue
          </Button>
        </div>
        {connectErr.value && (
          <Alert className="mt-8" severity="error">
            <AlertTitle>Error</AlertTitle>
            Connect failed, please try again later
          </Alert>
        )}
        <div className={style.footer}>
          <div>New to II?</div>
          <div style={{ color: '#00E3FB', lineHeight: 1.5, textDecoration: 'underline' }}>Learn more about wallets</div>
        </div>
        {loginLoading.value && <Loading></Loading>}
      </div>
    </Modal>
  );
}

const walletList = [
  {
    id: 'stoic',
    logo: '/stoic.png',
    text: 'Stoic wallet',
  },

  {
    id: 'plug',
    logo: '/plug.png',
    text: 'Plug wallet',
  },
];

// Type

type PropsType = { isOpen: boolean; toggleOpen: () => void };
