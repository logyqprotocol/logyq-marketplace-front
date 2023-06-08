import React from 'react';
import Styles from './styles/Card.module.css';
import { convertToUsd, formatBalance, getShortAddress } from '../utils/functions';
import { Listing } from '../utils/entities';
import { useNavigate } from "react-router-dom";


function Card(props: {listing: Listing}) {
  const navigate = useNavigate();

  return (
    <div className={Styles.borderContainer}>
  <div className={Styles.innerContainer}>
    <div className={Styles.imageContainer}>
    {/* TODO: ADD IMAGE HERE */}
    </div>
    <div className={Styles.infoContainer}>
        <h4 onClick={() =>     navigate(`/listing/${props.listing.id}`)}>{props.listing.title}</h4>
        <span>{`${formatBalance(props.listing.price)} VENOM (${convertToUsd(props.listing.price)} USD)` }</span>
        <span>{(new Date(parseInt(props.listing.timestamp)).toLocaleString())}</span>
        <span>{`${getShortAddress(props.listing.seller)}`}</span>
        </div>
  </div>
</div>
  );
}
  
export default Card;