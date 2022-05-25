import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStateProvider from './hooks/globalState';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RecoilRoot> */}
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
      {/* </RecoilRoot> */}
    </BrowserRouter>
  </React.StrictMode>
);
