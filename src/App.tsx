import React from 'react';
import Routes from './routes/Routes';
import { AOSInit } from './pages/aos';

function App() {
  return (
    <>
      <AOSInit />
      <Routes />
    </>
  );
}

export default App;
