import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import VenomConnect from 'venom-connect';
import { initVenomConnect } from '@/app/venom-connect/configure';
import '../../src/app/globals.css'
import ListingContainer from '../../components/ListingContainer';
import { useRouter } from 'next/router';
import { Address, ProviderRpcClient } from 'everscale-inpage-provider';



function Listing() {
  const router = useRouter();
  const  id  = router.query.id
  
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

  if(router.isReady && id){
  return (
    <>
    <Nav onConnect={(provider, address) => onConnect(provider, address)} venomConnect={venomConnect}/>
    <ListingContainer userProvider={provider} userAddress={address} venomConnect={venomConnect} id={id}/>
    </>
  );
  }else{
    return <></>
  }
}
export default Listing;