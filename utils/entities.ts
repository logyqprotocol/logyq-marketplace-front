import { Address } from "everscale-inpage-provider";

type Listing = {
    id?: string;
    title: string;
    description: string;
    price: string;
    seller: Address;
    offers: any[];
    offersCounter: string;
    sold: boolean;
}

type Offer = {
    amount: string;
    buyer: Address;
    id?: string;
    status: string;
}

export type { Listing, Offer };
