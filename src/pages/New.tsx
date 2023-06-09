import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import VenomConnect from 'venom-connect';
import { initVenomConnect } from '../venom-connect/configure';
import { Address, ProviderRpcClient } from 'everscale-inpage-provider';
import CreationContainer from '../components/CreationContainer';
import { Toaster } from 'react-hot-toast';
import SideNav from '../components/SideNav';
import Overlay from '../components/Overlay';



function NewListing() {

  
  const onConnect = (provider: ProviderRpcClient | undefined, address: Address | undefined) => {
    setAddress(address);
    setProvider(provider);
  };

  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const [provider, setProvider] = useState<any>(undefined);
  const [address, setAddress] = useState<any>(undefined);

  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
    <Overlay/>
    <Toaster/>
    <Nav onConnect={(provider, address) => onConnect(provider, address)} venomConnect={venomConnect}/>
    <SideNav/>
    {address ? <CreationContainer userProvider={provider} userAddress={address} venomConnect={venomConnect}/> : <div className='center'>Connect your wallet to create a listing.</div>}

    </>
  );
  }

export default NewListing;