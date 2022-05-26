import React from 'react';
import './App.css';
import Header from './components/Header/Index';
import AppRouter from './router';

function App() {
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
