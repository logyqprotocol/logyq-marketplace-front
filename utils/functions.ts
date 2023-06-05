import { Address } from "everscale-inpage-provider";

const formatBalance = (balance: string) => {
    return (parseFloat(balance) /  (10 ** 9)).toFixed(2);
}

const getShortAddress = (address: Address) => {
   const _address = address.toString();
    return `${_address.slice(0, 6)}...${_address.slice(-4)}`;
  };

  const convertToUsd = (balance: string) => {
    return (parseFloat(balance) /  (10 ** 9) * 4).toFixed(2);
  }

export { formatBalance, getShortAddress, convertToUsd };