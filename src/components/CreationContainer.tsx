

import { useState } from "react";
import Styles from "./styles/Card.module.css";
import {
  Address,
  ProviderRpcClient,
} from "everscale-inpage-provider";
import { CONTRACT_ADDR } from "../public-env";
import Abi from "../abis/Marketplace.abi.json";
import { VenomConnect } from 'venom-connect';
import "react-loading-skeleton/dist/skeleton.css";
import "react-tooltip/dist/react-tooltip.css";
import { getValueForSend } from "../utils/functions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreationContainer(props: {
  venomConnect: VenomConnect | undefined;
  userProvider: ProviderRpcClient | undefined;
  userAddress: Address | undefined;
}) {
  const navigate = useNavigate();


  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateInput = () => {
    setError("");
    if(title.length < 3){
      setError("Title must be at least 3 characters long.");
      return;
    }
    if(description.length < 5){
      setError("Description must be at least 5 characters long.");
      return;
    }
    if(parseFloat(price) < 0.1){
      setError("Price must be at least 0.1 VENOM.");
      return;
    }
    createListing();
  }
const createListing = async () => {
    const toastId = toast.loading('Creating listing...'); 
    try {
        if(!props.userProvider || !props.userAddress) return;
        const contract = new props.userProvider!.Contract(Abi, new Address(CONTRACT_ADDR));     
        const result = await contract.methods
          .createListing({
            _title: title,
            _description: description,
            _price: getValueForSend(price),
          } as never)
          .send({ from: props.userAddress, amount: getValueForSend(1), bounce: true });
          console.log(result)
        if (result?.id?.lt && result?.endStatus === 'active') {
          //TODO: implement event subscription, sorry for this sketchy solution :C
          setTimeout(() => {
            toast.dismiss(toastId);
            toast.success("Listing created.");
            navigate(`/listing/my`);
           }, 5000);
        }else{
            toast.dismiss(toastId);
            toast.error("Listing not declined. Try again.");
        }
      } catch (e : any) {
        toast.dismiss(toastId);
        toast.error(e.message);
    }
}


    return (
      <div className={Styles.cardContainer}>
        <div className={Styles.inner}>
        <h1>Create listing</h1>
        <div className={Styles.formBorderContainer}>
          <div className={Styles.formInnerContainer}>
            <label>Title<input placeholder="Title" type="text" onChange={(e) => setTitle(e.target.value)} /></label>
            <label>Description<textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} /></label>
            <label>Price (VENOM)<input placeholder="Price" type="number" onChange={(e) => setPrice(e.target.value)} /></label>
            <div className="errorBox">{error}</div>
            <button className="btn" onClick={validateInput}>Create listing</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default CreationContainer;
