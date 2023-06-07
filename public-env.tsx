let CONTRACT_ADDR : string;
let EXPLORER : string;
let INFURA_IPFS_PROJECTID : string;
let INFURA_IPFS_SECRET: string;
if(!process.env.NEXT_PUBLIC_CONTRACTADDR || process.env.NEXT_PUBLIC_CONTRACTADDR == ""){
    throw new Error("process.env.NEXT_PUBLIC_CONTRACTADDR is undefined")
}else{
    CONTRACT_ADDR = process.env.NEXT_PUBLIC_CONTRACTADDR;
}

if(!process.env.NEXT_PUBLIC_EXPLORER || process.env.NEXT_PUBLIC_EXPLORER == ""){
    throw new Error("process.env.NEXT_PUBLIC_EXPLORER is undefined")
}else{
    EXPLORER = process.env.NEXT_PUBLIC_EXPLORER;
}

if(!process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECTID || process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECTID == ""){
    throw new Error("process.env.NEXT_PUBLIC_PROJECTID is undefined")
}else{
    INFURA_IPFS_PROJECTID = process.env.NEXT_PUBLIC_EXPLORER;
}

if(!process.env.NEXT_PUBLIC_INFURA_IPFS_SECRET || process.env.NEXT_PUBLIC_INFURA_IPFS_SECRET == ""){
    throw new Error("process.env.NEXT_PUBLIC_INFURA_IPFS_SECRET is undefined")
}else{
    INFURA_IPFS_SECRET = process.env.NEXT_PUBLIC_INFURA_IPFS_SECRET;
}


export {CONTRACT_ADDR, EXPLORER, INFURA_IPFS_PROJECTID, INFURA_IPFS_SECRET}
