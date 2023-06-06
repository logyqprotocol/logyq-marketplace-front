import React, { CSSProperties, useEffect, useState } from "react";
import Card from "./Card";
import Styles from "./styles/Card.module.css";
import {
  Address,
  Contract,
  ProviderRpcClient,
} from "everscale-inpage-provider";
import { CONTRACT_ADDR } from "../public-env";
import Abi from "../abis/Marketplace.abi.json";
import { EverscaleStandaloneClient } from "everscale-standalone-client";
import { VenomConnect } from "venom-connect";
import Loader from "./Loader";
import { Listing } from "../utils/entities";

function CardContainer(props: { venomConnect: VenomConnect | undefined }) {

    const initProvider = async () => {
        const _provider = await props.venomConnect?.getStandalone("venomwallet");
        setProvider(_provider);
    };

  const [provider, setProvider] = useState<any>(undefined);
  const [listings, setListings] = useState<any[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
        if(!provider){
            initProvider();
        }else{
            fetchListings(provider);
        }
  }, [props.venomConnect, provider]);

  const fetchListings = async (
    provider: ProviderRpcClient
  ): Promise<string | undefined> => {
    try {
      setIsLoading(true);
      const contract = new provider.Contract(Abi, new Address(CONTRACT_ADDR));
      const rawListings = (await contract.methods
        .listings({} as never)
        .call()) as any;
      if (!rawListings) return undefined;
      let _listings: any[] = [];
      rawListings["listings"].forEach((listing: any) => {
        listing[1]["id"] = listing[0];
        _listings.push(listing[1]);
      });
      setListings(_listings);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.inner}>
        <Loader isLoading={isLoading} />
        {listings &&
          !isLoading &&
          listings.filter((listing) => !listing.sold).map((listing: Listing) => (
            <Card key={listing.id} listing={listing} />
          ))}
      </div>
    </div>
  );
}
export default CardContainer;
