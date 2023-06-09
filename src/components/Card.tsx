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
    <div onClick={() =>     navigate(`/listing/${props.listing.id}`)} className={Styles.imageContainer}>
    {/* TODO: ADD IMAGE HERE */}
    </div>
    <div className={Styles.infoContainer}>
        <h4 onClick={() =>     navigate(`/listing/${props.listing.id}`)}>{props.listing.title}</h4>
        <span>{`${formatBalance(props.listing.price)} VENOM (${convertToUsd(props.listing.price)} USD)` }</span>
        <span>{`${getShortAddress(props.listing.seller)}`}</span>
        <span className={`${props.listing.sold ? "red" : "green"}`}>{`${props.listing.sold ? "Sold" : "Active"}`}</span>
        </div>
  </div>
</div>
  );
}
  
export default Card;