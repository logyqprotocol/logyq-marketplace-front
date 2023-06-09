import Skeleton from 'react-loading-skeleton';
import Styles from '../components/styles/Listing.module.css'
import { EXPLORER } from '../public-env';
import { Listing } from '../utils/entities';
import { formatBalance, getShortAddress } from '../utils/functions';
function ListingInfo(props: {listing: Listing | undefined}) {

  if(props.listing){
  return (
    <div className={Styles.card}>
            <div className={Styles.imgBox}>{/* TODO: Add image here */}</div>
            <div className={Styles.infoBox}>
              <h2>{props.listing.title}</h2>
              <div>{formatBalance(props.listing.price)} VENOM</div>
                <div>Owned by <a href={`${EXPLORER}/accounts/${props.listing.seller.toString()}`}>{getShortAddress(props.listing.seller, 7,7)}</a></div>
              <div>This listing received {props.listing.offersCounter} {parseInt(props.listing.offersCounter) !== 1 ? "offers" : "offer"}</div>
            </div>
            <div className={Styles.descBox}>
              <h3>Description</h3>
              <p>{props.listing.description}</p>
            </div>
          </div>
  );
  }else{
    return (
    <div className={Styles.card}>
    <div className={Styles.imgBox}>{/* TODO: Add image here */}</div>
    <div className={Styles.infoBox}>
      <h2><Skeleton height={30} width={200}/></h2>
      <div><Skeleton height={20} width={100}/></div>
        <div><Skeleton height={20} width={150}/></div>
      <div><Skeleton height={20} width={175}/></div>
    </div>
    <div className={Styles.descBox}>
      <h3>Description</h3>
      <p>{<Skeleton count={5} height={10}/>}</p>
    </div>
  </div>
  );
  }
}
  
export default ListingInfo;