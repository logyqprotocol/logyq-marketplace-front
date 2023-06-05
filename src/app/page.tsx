"use client";
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

import { initVenomConnect } from './venom-connect/configure';
import VenomConnect from 'venom-connect';
import CardContainer from '../../components/CardContainer';
import Nav from '../../components/Nav';
import { ProviderRpcClient } from 'everscale-inpage-provider';
function App() {
  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const [venomProvider, setVenomProvider] = useState<ProviderRpcClient | undefined>();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Nav venomConnect={venomConnect} onConnect={(provider : ProviderRpcClient) => setVenomProvider(provider)}/>
      <CardContainer venomConnect={venomConnect}/>
    </div>
  );
}

export default App;