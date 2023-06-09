let CONTRACT_ADDR : string;
let EXPLORER : string;
let INFURA_IPFS_PROJECTID : string;
let INFURA_IPFS_SECRET: string;

CONTRACT_ADDR="0:aee8c95405ed379a37834d8f0eb8d7f002f262b413ad998cc0326e6ef1c2b8a4"
EXPLORER="https://devnet.venomscan.com"

// TODO: add upload image to IPFS
INFURA_IPFS_PROJECTID=""
INFURA_IPFS_SECRET=""

/*
TODO: configure Dockerfile and Cloud Run to support env variables (different from usual next config)

if(!process.env.REACT_APP_CONTRACTADDR || process.env.REACT_APP_CONTRACTADDR === ""){
    throw new Error("process.env.REACT_APP_CONTRACTADDR is undefined")
}else{
    CONTRACT_ADDR = process.env.REACT_APP_CONTRACTADDR;
}

if(!process.env.REACT_APP_EXPLORER || process.env.REACT_APP_EXPLORER === ""){
    throw new Error("process.env.REACT_APP_EXPLORER is undefined")
}else{
    EXPLORER = process.env.REACT_APP_EXPLORER;
}

if(!process.env.REACT_APP_INFURA_IPFS_PROJECTID || process.env.REACT_APP_INFURA_IPFS_PROJECTID === ""){
    throw new Error("process.env.REACT_APP_PROJECTID is undefined")
}else{
    INFURA_IPFS_PROJECTID = process.env.REACT_APP_EXPLORER;
}

if(!process.env.REACT_APP_INFURA_IPFS_SECRET || process.env.REACT_APP_INFURA_IPFS_SECRET === ""){
    throw new Error("process.env.REACT_APP_INFURA_IPFS_SECRET is undefined")
}else{
    INFURA_IPFS_SECRET = process.env.REACT_APP_INFURA_IPFS_SECRET;
}
*/

export {CONTRACT_ADDR, EXPLORER, INFURA_IPFS_PROJECTID, INFURA_IPFS_SECRET}
