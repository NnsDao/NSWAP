import React, { useEffect } from 'react';
import './App.css';
import { plugLogin } from './common/plug';
import { stoicLogin } from './common/stoic';
import Header from './components/Header/Index';
import { useGlobalState } from './hooks/globalState';
import AppRouter from './router';

function App() {
  const [{ loginType }, dispatch] = useGlobalState();
  const autoLogin = async () => {
    if (loginType) {
      let address = '';
      if (loginType === 'plug') {
        address = await plugLogin();
      }
      if (loginType === 'stoic') {
        address = await stoicLogin();
      }
      address && dispatch({ type: 'changeLogin', isLogin: true, address, loginType: loginType });
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
