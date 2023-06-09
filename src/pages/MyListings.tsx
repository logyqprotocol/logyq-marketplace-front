import React, { useEffect, useState } from 'react';
import VenomConnect from 'venom-connect';
import CardContainer from '../components/CardContainer';
import Nav from '../components/Nav';
import { initVenomConnect } from '../venom-connect/configure';
import SideNav from '../components/SideNav';
import Overlay from '../components/Overlay';
function MyListings() {
  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  const onConnect = (provider: any, address: any) => {
    setAddress(address);
    setProvider(provider);
  };

  const [provider, setProvider] = useState<any>(undefined);
  const [address, setAddress] = useState<any>(undefined);
  return (
    <>
      <Overlay/>
      <Nav onConnect={onConnect} venomConnect={venomConnect}/>
      <SideNav/>
      {address ? <CardContainer address={address} venomConnect={venomConnect}/> : <div className='center'>Connect your wallet to view your listings.</div>}
    </>
  );
}

export default MyListings;