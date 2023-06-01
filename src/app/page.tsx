"use client";
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Styles from './page.module.css';

import { initVenomConnect } from './venom-connect/configure';
import VenomConnect from 'venom-connect';
import Main from '../../components/Main';

function App() {
  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className={Styles.App}>
      <Main venomConnect={venomConnect} />
    </div>
  );
}

export default App;