import Styles from './styles/Nav.module.css';
import navLogo from '../assets/navLogo.svg';
import ConnectWallet from './ConnectWallet';
import VenomConnect from 'venom-connect';
import { Address, ProviderRpcClient } from 'everscale-inpage-provider';
import { useNavigate } from 'react-router-dom';

function Nav(props: {venomConnect: VenomConnect | undefined, onConnect: (provider: ProviderRpcClient | undefined, address: Address | undefined) => void}) {
  const navigate = useNavigate();  
  return (
    <div className={Styles.nav}>
        <div className={Styles.inner}>
        <div className={Styles.logo}>
            <img onClick={() => navigate("/")}src={navLogo} alt="logyq's logo"/>

        </div>
        <ConnectWallet venomConnect={props.venomConnect} onConnect={(provider, address) => props.onConnect(provider, address)}/>
        </div>
    </div>
  );
}
export default Nav;