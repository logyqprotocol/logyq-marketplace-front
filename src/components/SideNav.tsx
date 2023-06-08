import { useState } from 'react';
import Styles from './styles/SideNav.module.css';
import { useNavigate } from 'react-router-dom';
import ArrowRight from '../assets/ArrowRight.svg'

function SideNav() {
    type MenuItem ={
        route : string;
        text: string;
        active: boolean;
    }
  const menuItems : MenuItem[] = [
    {
        route : "/",
        text: "Home",
        active: false,
    },
    {
        route : "/listing/my",
        text: "My listings",
        active: false,
    },
    {
        route : "/listing/new",
        text: "Create listing",
        active: false,
    }
  ]
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();  

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${Styles.sideNav} ${isOpen ? Styles.open : ""}`}>
       {/* TODO: replace with icon */}
       <button className={Styles.openButton} onClick={handleMenu}><img alt="arrow"src={ArrowRight}/></button>
       <div className={`${Styles.menuContainer} ${isOpen ? Styles.show : ""}`}>
        <ul className={`${Styles.menu}`}>
           {menuItems.map((item) => <li className={Styles.menuItem}><button disabled={!isOpen} onClick={() => navigate(item.route)}>{item.text}</button></li>)}
            <li className={Styles.menuItem}><button disabled={!isOpen} onClick={() => window.open("https://www.logyqprotocol.com", "_blank")}>Logyq Protocol</button></li>
           </ul>
       </div>
    </div>
  );
}
export default SideNav;