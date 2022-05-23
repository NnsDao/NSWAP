import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo text-2xl' alt='logo' />
        <p>Hello Vite + React!</p>
        <p className='px-1 bg-current bg-red-200'>tailwind css</p>
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
}

export default App;
