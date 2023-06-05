import { Address } from "everscale-inpage-provider";

type Listing = {
    id: string;
    title: string;
    description: string;
    price: string;
    seller: Address;
    offers: any[];
    offersCounter: string;
    sold: boolean;
}

export type { Listing };
