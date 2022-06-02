import React, { useEffect } from 'react';
import './App.css';
import { plugLogin } from './common/plug';
import { stoicLogin } from './common/stoic';
import { getUserICP } from './common/utils';
import Header from './components/Header/Index';
import { useGlobalState } from './hooks/globalState';
import AppRouter from './router';

function App() {
  const [{ loginType }, dispatch] = useGlobalState();
  const autoLogin = async () => {
    if (loginType) {
      let address = '';
      let userICP = BigInt(0);
      if (loginType === 'plug') {
        address = await plugLogin();
      }
      if (loginType === 'stoic') {
        address = await stoicLogin();
      }
      address && (userICP = await getUserICP(address));
      address && dispatch({ type: 'changeLogin', isLogin: true, address, loginType: loginType, userICP: userICP });
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <div className="App bg-main">
      <div className="App-content">
        <Header></Header>
        <AppRouter></AppRouter>
      </div>
    </div>
  );
}

export default App;
